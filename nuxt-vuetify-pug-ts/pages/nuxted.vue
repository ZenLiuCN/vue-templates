<template lang="pug">
  v-layout
    v-flex.text-xs-center
      img.mb-5(src="/v.png" alt="Vuetify.js")
      .teal--text {{title}}
      .cyan--text.cursor-pointer(v-for="it in news.name")  {{it}}
      blockquote.blockquote
        | &#8220;with full power of VUE NUXT PUG STYLUS &amp; TYPESCRIPT &#8221;
        footer: small: em &mdash;Zen
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator'
import { NuxtContext } from 'nuxt'

@Component
export default class Nuxted extends Vue {
  @State title!: string

  async asyncData({ app }: NuxtContext) {
    let data = await app.$axios.$get(`${window.location.origin}/info.json`)
    return { news: data }
  }

}
</script>
