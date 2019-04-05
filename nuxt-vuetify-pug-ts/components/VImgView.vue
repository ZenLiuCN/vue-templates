<template lang="pug">
component(:is="layout"): slot(:images='images', :options='options')
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.min.css'


@Component({ name: 'VImgView' })
export default class VImgView extends Vue {
  @Prop({ type: Array }) images!: string[]
  @Prop({ type: String, default: 'div' }) layout!: string
  @Prop() trigger?: any
  @Prop() options?: any
  $viewer: any
  createViewer() {
    this.$viewer && this.$viewer.destroy()
    this.$viewer = new Viewer(this.$el, this.options)
    this.$emit('inited', this.$viewer)
  }
  mounted() {
    this.$nextTick(() => {
      this.createViewer()
    })
  }
  destroyed() {
    this.$viewer && this.$viewer.destroy()
  }
  @Watch('images') onImagesChange() {
    this.$nextTick(() => {
      this.createViewer()
    })
  }
  @Watch('trigger', { deep: true }) onTriggerChange() {
    this.$nextTick(() => {
      this.createViewer()
    })
  }
  @Watch('options', { deep: true }) onOptionsChange() {
    this.$nextTick(() => {
      this.createViewer()
    })
  }
}
</script>
