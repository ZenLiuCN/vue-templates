<template lang="pug">
  v-app()
    // v-toolbar(dese).primary.text-xs-center
    //   v-spacer
    //   v-toolbar-title().white--text.header.ml-0 {{title}}
    //   v-spacer
    v-content(): v-container(fluid)
      PAlert()
      nuxt
</template>

<script lang="ts">
import { Vue, Component, State, Watch, namespace } from "nuxt-property-decorator";
import PAlert from '~/components/PAlert.vue'
const GLOB = namespace("global")
@Component({ name: "blank", components: { PAlert } })
export default class LayoutBlank extends Vue {
  @GLOB.State title;

  head() {
    return {
      title: this.title
    };
  }
}
</script>
