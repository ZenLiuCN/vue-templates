<template lang="pug">
  v-app()
    v-content()
      PAlert()
      nuxt
</template>

<script lang="ts">
import { Vue, Component, State, Watch, namespace } from "nuxt-property-decorator";
import PAlert from '~/components/PAlert.vue'
const GLOB = namespace("global")
@Component({ name: "empty", components: { PAlert } })
export default class LayoutEmpty extends Vue {
  @GLOB.State title;

  head() {
    return {
      title: this.title
    };
  }
}
</script>
