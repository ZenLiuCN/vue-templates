<template lang="pug">
v-layout(column)
    v-flex(xs12,v-for="a in Alerts",  :key="a.id")
        v-alert(
            :value='true'
            :type='a.type'
            :dismissible="a.closeable"
            :outline="a.outline"
            :transition="a.transition"
            :icon="a.icons"
            @input="remove(a.id,$event)"
        ) {{a.text}}
    v-flex(xs12,v-for="a in Toasts",  :key="a.id")
        v-snackbar(
            :value='toasts[a.id]',
            :bottom='a.bottom',
            :left='a.left',
            :multi-line='a.muiltLine',
            :right='a.right',
            :timeout='a.timeout==-1?undefined:a.timeout',
            :top='a.top',
            :color="a.type"
            :vertical='a.vertical')
            component(
              :is="a.icons"
              :class="[`svg-${a.type} `,isDark(a.type)?' lighten-2':' darken-2']",left)
            span {{ a.text }}
            v-spacer
            v-btn(
              v-if="a.closeable",
              flat,
              @click='remove(a.id,false)'
            ):  mdi-close(
              :class="isDark(a.type)?'svg-white':'svg-white'"
              )
    v-layout( v-if="msgbox" row justify-center)
      v-dialog(
        :value="msgbox"
        :persistent ="msgbox.persistent"
        :fullscreen ="msgbox.fullscreen"
        :scrollable ="msgbox.scrollable"
        :max-width="msgbox.maxWidth?msgbox.maxWidth:290").rounded-2
        v-card().pl-2.pr-2
          v-toolbar(card,dense,:class="msgbox.type")
            component(
              :is="msgbox.icons"
              :class="[`svg-${msgbox.type}`,isDark(msgbox.type)?' lighten-2':' darken-2']",left)
            v-toolbar-title(:class="[isDark(msgbox.type)?'white--text':'white--text']").pl-2.subheading {{msgbox.title}}
            v-spacer
            v-btn(v-if="msgbox.timeout<=0&&!msgbox.callback.hasOwnProperty('r')"
              @click.stop="remove(msgbox.id,false)",icon,small,flat):  mdi-close(:class="isDark(msgbox.type)?'svg-white':'svg-white'")
          div(v-html="msgbox.text").pa-2.pb-4.subheading {{msgbox.text}} {{isDark(msgbox.type)}} {{light(msgbox.type)}}
          v-card-actions()
            v-spacer
            v-btn(v-if="msgbox.callback&&msgbox.callback.done",
            small,color='primary',@click.stop="confirm(msgbox)") 确定
            v-btn(v-if="msgbox.callback&&msgbox.callback.cancel",
            flat,small,,@click.stop="cancel(msgbox)") 取消

</template>

<script lang="ts">
import { Component, Vue, Watch, Mutation, Getter } from "nuxt-property-decorator";
import { NuxtContext } from "nuxt";
import { Alert, Toast, Msgbox } from '~/plugins/ext-messager'
export const calcBright = (color: string) => {
  let hex = color.replace(/^\s*#|\s*$/g, '')
  if (hex.length == 3) {
    hex = hex.replace(/(.)/g, '$1$1')
  }
  let r = parseInt(hex.substr(0, 2), 16),
    g = parseInt(hex.substr(2, 2), 16),
    b = parseInt(hex.substr(4, 2), 16)
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return (l + s / 2) / 2
}
//!! must use with plugin
@Component({
  name: 'PAlert',
})
export default class PAlert extends Vue {
  messager = this.$messager
  get Alerts() {
    return this.messager.pool.filter(e => e instanceof Alert)
  }
  get Toasts() {
    return this.messager.pool.filter(e => e instanceof Toast)
  }
  get Msgboxes() {
    return this.messager.pool.filter(e => e instanceof Msgbox)
  }
  get msgbox() {
    return this.Msgboxes[this.Msgboxes.length - 1]
  }
  toasts: { [key: string]: boolean } = {}
  confirm(msgbox: Msgbox) {
    msgbox.callback.done ? msgbox.callback.done() : undefined
    this.remove(msgbox.id, false)
  }
  cancel(msgbox: Msgbox) {
    msgbox.callback.cancel ? msgbox.callback.cancel() : undefined
    this.remove(msgbox.id, false)
  }

  isDark = (type: string): boolean => {
    const color = this.$vuetify.theme[type]
    if (!color) return true //非标准颜色
    if (color.toString().indexOf('darken') != -1) return true
    if (color.toString().indexOf('lighten') != -1) return false
    return calcBright(color.toString()) < 0.3

  }
  light(color: string) {
    const col = this.$vuetify.theme[color].toString()
    return calcBright(col)
  }

  remove(id: string, status: boolean) {
    if (!status) {
      this.$messager.remove(id)
    }
  }
  @Watch('Toasts') onToastsChange(val: any) {
    this.Toasts.forEach(T => {
      if (!this.toasts.hasOwnProperty(T.id)) {
        this.toasts[T.id] = true
      }
    })
    Object.keys(this.toasts).forEach((K: string) => {
      if (this.Toasts.findIndex(e => e.id == K) != -1) {
        if (!this.toasts[K]) this.remove(K, false)
      } else {
        delete this.toasts[K]
      }
    });
  }
}
</script>
<style scoped>
</style>