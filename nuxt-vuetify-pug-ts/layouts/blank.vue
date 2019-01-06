<template lang="pug">
  v-app(dark)
    v-toolbar( fixed app :clipped-left="clipped")
      v-spacer/
      v-toolbar-title(v-text="title")
      v-spacer/
    v-content(): v-container(fluid full-width full-hight): nuxt
    v-footer(:fixed="fixed" app): span.ml-4 &copy;{{new Date().getFullYear()}}

</template>

<script lang="ts">
import { Vue, Component, State, Watch } from "nuxt-property-decorator";

@Component({ name: 'blank', middleware: 'log' })
export default class Blank extends Vue {
  clipped = false
  fixed = false
  @State title
}
</script>
