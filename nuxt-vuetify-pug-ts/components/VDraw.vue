<template lang="pug">
v-container(fluid)
    v-toolbar(app,dense).primary
      v-btn(@click.stop="clear") 重新绘制
      v-btn(@click.stop="calcAngle") 绘制角缘
      v-btn(@click.stop="drawEdge") 计算角度
      v-btn(@click.stop="drawEdge") 绘制颌骨
      v-btn(@click.stop="save") 保存
      v-btn(@click.stop="").error 退回光片
      v-spacer/
      v-toolbar-title().white--text {{current=='angle'?'绘制下颌角':'绘制下颌边线'}}
      v-spacer/
      v-btn(@click.stop="").error 放大
      v-btn(@click.stop="").error 缩小
      v-select(dark,v-model="bold",:items="[{v:2,t:'细'},{v:4,t:'中'},{v:8,t:'普通'},{v:16,t:'粗'}]",item-text="t",item-value="v",dense)
        span(slot="prepend").white--text 线条
      v-spacer/
    v-layout(column)
      v-flex().container
        canvas#back()
        canvas#angle()
        canvas#draw()
        canvas#calc(@mousedown='onMouseDown', @mouseup='onMouseUp', @mousemove='onMouseMove')
      v-flex(v-if="url"): img(:src='url')


</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, namespace, Model } from "nuxt-property-decorator";
interface Point {
  x: number
  y: number
}
const angel = 'angle'
const calc = 'calc'
const draw = 'draw'
const back = 'back'
const names = ['angle', 'back', 'draw', 'calc']
const dataURLtoBlob = (dataURL) => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bStr = atob(arr[1]);
  let n = bStr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bStr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
@Component({
  name: 'VDraw',
})
export default class VDraw extends Vue {
  @Prop({ type: String }) src!: string
  @Prop({ type: String, default: 'red' }) color!: string
  @Prop({ type: Number, default: 2 }) size!: number
  @Prop({ type: Number, }) height!: number
  @Prop({ type: Number, }) width!: number

  bold = 2
  url: string | null = null
  bgHeight: number = 0
  bgWidth: number = 0
  bgScale = 0.0
  background: HTMLImageElement | null = null
  bgRatio = 0.0
  current: string = 'angle'
  currentLine: number = this.size
  mouse = {    current: {
      x: 0,
      y: 0
    },
    previous: {
      x: 0,
      y: 0
    },
    down: false  }

  ctx(name: string) {
    return this.canvas(name).getContext('2d')!
  }
  canvas(name: string) {
    return <HTMLCanvasElement>(document.getElementById(name))!
  }
  mounted() {
    this.init()
  }
  init() {
    if (!this.background) {
      this.background = new Image()
      this.background.src = this.src
      // Make sure the image is loaded first otherwise nothing will draw.
      this.background.onload = () => {
        this.bgWidth = this.background!.width;
        this.bgHeight = this.background!.height;
        this.bgRatio = this.bgWidth / this.bgHeight
        this.bgScale = 1024 / this.bgHeight
        names.forEach(name => {
          this.canvas(name).width = this.background!.width;
          this.canvas(name).height = this.background!.height;
        });
        this.ctx('back').drawImage(this.background!, 0, 0);

        // this.ctx.scale(this.bgScale, this.bgScale)
        // this.ctx.imageSmoothingEnabled = false;
      }
    } else {
      names.forEach(name => {
        this.canvas(name).width = this.background!.width;
        this.canvas(name).height = this.background!.height;
      });
      this.ctx(back).drawImage(this.background!, 0, 0);

    }

  }
  drawEdge() {
    this.current = "draw"
    this.clearLayer('angle')
  }

  clear() {
    this.clearLayer('calc')
    this.clearLayer('draw')
    this.clearLayer('angle')
    this.current = "angle"
  }
  calcAngle() {
    const img = this.ctx('angle').getImageData(0, 0, this.canvas('angle').width, this.canvas('angle').height)
    const p: Point[] = []
    const pt: Point = { x: img.width, y: img.height }
    const pb: Point = { x: 0, y: 0 }
    const pm: Point = { x: 0, y: 0 }
    //convert to point
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const idx = y * 4 * img.width + 4 * x
        let r = img.data[idx]
        let g = img.data[idx + 1]
        let b = img.data[idx + 2]
        let a = img.data[idx + 3]
        if (a != 0 && r > 0) {
          p.push({ x, y })
          // this.drawPoint(this.ctxCalc, 'aqua', { x: x, y: y })
        }
      }
    }
    //find top and down
    p.forEach(({ x, y }) => {
      if ((pt.x * 2) + pt.y > x * 2 + y) {
        pt.x = x
        pt.y = y
      }
      if (pb.x + (pb.y * 2) < x + (y * 2)) {
        pb.x = x
        pb.y = y
      }
    })
    //find most distence
    let md = 0
    p.forEach((po) => {
      const d = this.pointDistenceToLine(po, pt, pb)
      if (md < d) {
        md = d
        pm.x = po.x
        pm.y = po.y
      }
    })

    this.drawPoint(this.ctx('angle'), 'green', pt)
    this.drawPoint(this.ctx('angle'), 'blue', pb)
    this.drawPoint(this.ctx('angle'), 'yellow', pm)
    // this.drawLine(this.ctx('calc'), 'HotPink', pt, pm)
    // this.drawLine(this.ctx('calc'), 'HotPink', pm, pb)
    console.log('top-green', pt, 'bottom-blue', pb, 'middle-yellow', pm)
    const a = this.pointsCalcAngle(pm, pt, pb)
    this.drawText(this.ctx('calc'), "GA:" + a.toFixed(0).toString() + "°",
      '50px STheiti, SimHei',
      "cyan",
      { x: pm.x + 40, y: pm.y - 40 })


  }
  save() {
    const c = <HTMLCanvasElement>document.createElement('canvas')
    c.height = this.background!.height
    c.width = this.background!.width
    const ctx = c.getContext('2d')!
    ctx.drawImage(this.background!, 0, 0)
    const angel = new Image()
    angel.src = this.canvas('calc').toDataURL('image/png')
    angel.onload = () => {
      ctx.drawImage(angel, 0, 0)
      const angelLine = new Image()
      angelLine.src = this.canvas('draw').toDataURL('image/png')
      angelLine.onload = () => {
        ctx.drawImage(angelLine, 0, 0)
        this.url = c.toDataURL('image/png')
      }
    }


  }
  //<!-- #region-- >
  get currentMouse() {
    const rect = this.canvas(this.current).getBoundingClientRect();
    return {
      x: this.mouse.current.x - rect.left,
      y: this.mouse.current.y - rect.top
    };
  }

  draw(evt) {
    if (this.mouse.down) {
      // this.ctx.clearRect(0, 0, 800, 800);

      this.ctx(this.current).lineTo(this.currentMouse.x, this.currentMouse.y)
      this.ctx(this.current).strokeStyle = this.color
      this.ctx(this.current).lineWidth = this.bold
      this.ctx(this.current).stroke()
    }
  }
  onMouseDown(evt) {
    this.mouse.down = true;
    this.mouse.current = {
      x: evt.pageX,
      y: evt.pageY
    }
    this.ctx(this.current).beginPath()
    this.ctx(this.current).save()
    this.ctx(this.current).moveTo(this.currentMouse.x, this.currentMouse.y)
  }
  onMouseUp(evt) {
    this.ctx(this.current).closePath()
    this.mouse.down = false;

  }
  onMouseMove(evt) {
    this.mouse.current = {
      x: evt.pageX,
      y: evt.pageY
    }
    this.draw(event)
  }
  clearLayer(name: string) {
    this.ctx(name).clearRect(0, 0, this.canvas(name).width, this.canvas(name).height)
  }
  drawPoint(ctx: CanvasRenderingContext2D, color: string, p: Point) {
    ctx.save()
    ctx.fillStyle = color
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI, true);
    ctx.fill()
    ctx.restore()
  }

  drawLine(ctx: CanvasRenderingContext2D, color: string, ps: Point, pe: Point) {
    ctx.save()
    ctx.strokeStyle = color
    ctx.beginPath();
    ctx.moveTo(ps.x, ps.y)
    ctx.lineTo(pe.x, pe.y);
    ctx.stroke()
    ctx.restore()
  }
  drawText(ctx: CanvasRenderingContext2D, text: string, font: string, color: string, pt: Point) {
    ctx.save()
    ctx.fillStyle = color
    ctx.font = font
    ctx.beginPath();
    ctx.fillText(text, pt.x, pt.y)
    ctx.fill()
    ctx.restore()
  }
  pointDistenceToLine(p: Point, l1: Point, l2: Point): number {
    const a = l2.y - l1.y
    const b = l1.x - l2.x
    const c = l2.x * l1.y - l1.x * l2.y
    return (Math.abs(a * p.x + b * p.y + c)) / (Math.pow(a * a + b * b, 0.5))
  }
  pointsCalcAngle(p1: Point, p2: Point, p3: Point): number {
    const lab = Math.sqrt(Math.pow(p1.x - p2.x, 2) +
      Math.pow(p1.y - p2.y, 2)),
      lac = Math.sqrt(Math.pow(p1.x - p3.y, 2) +
        Math.pow(p1.y - p3.y, 2)),
      lbc = Math.sqrt(Math.pow(p2.x - p3.y, 2) +
        Math.pow(p2.y - p3.y, 2));
    const cosA = (Math.pow(lab, 2) + Math.pow(lac, 2) - Math.pow(lbc, 2)) /
      (2 * lab * lac);
    return (Math.acos(cosA) * 180 / Math.PI)

  }
  //<!-- #endregion-- >
}
</script>
<style scoped>
.container canvas {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
