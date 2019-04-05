<template lang="pug">
v-paper(src='/x.jpg')


</template>
<script lang="ts">
import { Component, Vue, namespace, State, Mutation, Watch } from "nuxt-property-decorator";
import { NuxtContext } from "nuxt";

import VPaper from '~/components/VPaper.vue'



@Component({
  layout: "empty",
  components: {
    VPaper
  }
})
export default class Paper extends Vue {



}
</script>
