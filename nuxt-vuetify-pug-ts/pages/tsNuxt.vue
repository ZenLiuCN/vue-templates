<template lang="pug">
  v-layout
    v-flex.text-xs-center
      img.mb-5(src="/v.png" alt="Vuetify.js")
      .teal--text {{title}}
      div(v-for="d in news.name") {{d}}
      blockquote.blockquote
        | &#8220;First, solve the problem. Then, write the code.&#8221;
        footer: small: em &mdash;John Johnson
</template>

<script lang="ts">
import { Component, State, Vue } from "nuxt-property-decorator";
import { NuxtContext } from "nuxt";
interface JSON {
  name: string[];
}
@Component
export default class tsNuxt extends Vue {
  @State public title!: string;
  async asyncData({ app }: NuxtContext) {
    const data: JSON = await app.$axios.$get(
      `${window.location.origin}/info.json`
    );
    return { news: data };
  }
}
</script>
