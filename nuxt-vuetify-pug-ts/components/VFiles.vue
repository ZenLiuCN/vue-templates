<template lang="pug">
v-item-group
  div(style='display:none' ref="c")
  v-container(grid-list-md)
    v-layout(wrap align-content-space-between)
      v-flex(v-for='(n,i) in total', :key='n+i', xs6, sm4,md3)
        v-item
          v-card.d-flex.align-center(slot-scope='{ active, toggle }', :color="active ? 'primary' : ''", dark,width='200', height='200', @mouseenter='toggle', @mouseleave='toggle').relative
            v-img(v-if="isImage", width='200', height='200' ,:src="n.data",:lazy-src='n.data')
            span(v-else) {{n}}-{{i}}
            v-fade-transition(hide-on-leave)
              .display-3.text-xs-center(v-if='active',height='200',width='200').absolute.btnLayer
                v-btn(icon large @click.stop='remove(n)').pt--50: v-icon(large) mdi-trash-can-outline
      v-flex(xs6, sm4,md3)
          v-card.d-flex.align-center(color="primary", dark, height='200',width='200')
            v-fade-transition(hide-on-leave)
              .display-3.text-xs-center()
                v-btn(icon large @click.stop='add' ): v-icon(large) mdi-plus


</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, namespace, Model } from "nuxt-property-decorator";
interface DataNode {
  type: number
  value: any
  data: string
}
@Component({
  name: 'VFiles',
})
export default class VFiles extends Vue {
  @Prop({ type: String, default: '.png,.jpg' }) accept!: string
  @Prop({ type: Boolean, default: true }) isImage!: boolean
  @Prop({ type: Number, default: 0 }) size!: number
  @Model("update:files") files!: string[]
  fileNode: DataNode[] = []
  $refs!: {
    c: HTMLDivElement
  }
  get total() {
    let a: { type: number, value: any }[] = []
    return a.concat(this.files.map(e => ({ type: 0, value: e, data: e }))).concat(this.fileNode)
  }

  add() {
    let idx: HTMLInputElement = document.createElement('input')
    idx.setAttribute("type", "file")
    idx.setAttribute("accept", this.accept)
    idx.onchange = async () => {
      if (idx.files && idx.files.length == 1) { //TODO:upload to server
        let files = await this.getData(idx.files[0])
        this.fileNode.push({
          type: 1,
          value: idx.files[0],
          data: files
        })
        // this.$emit("update:files", this.newFiles)
      }
    }
    idx.click()
  }
  get newFiles(): string[] {
    return this.fileNode.map(n => n.value.toString())
  }
  async getData(file: File) {
    let p = await new Promise<string>((r) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const src = e.target.result;
        r(src);
      };
      reader.readAsDataURL(file);
    })
    return p

  }
  remove({ type: t, value: v }: { type: number, value: any }) {
    t === 0 ? this.files.splice(this.files.indexOf(v), 1) : this.files.splice(this.files.indexOf(v), 1)
  }
}
</script>
<style scoped>
.btnLayer {
  width: 200px;
  height: 200px;
  display: block;
}
.pt--50 {
  padding-top: 45%;
}
</style>
