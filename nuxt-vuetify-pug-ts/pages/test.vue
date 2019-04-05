<template lang="pug">
v-draw(src='/x.jpg')


</template>
<script lang="ts">
import { Component, Vue, namespace, State, Mutation, Watch } from "nuxt-property-decorator";
import { NuxtContext } from "nuxt";

import VDraw from '~/components/VDraw.vue'



@Component({
  layout: "blank",
  components: {
    VDraw
  }
})
export default class Test extends Vue {



}
</script>
