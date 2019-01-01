<template lang="pug">
  v-layout
    v-flex.text-xs-center
      img.mb-5(src="/v.png" alt="Vuetify.js")
      .teal--text {{title}}
      blockquote.blockquote
        | &#8220;First, solve the problem. Then, write the code.&#8221;
        footer: small: em &mdash;John Johnson
</template>

<script lang="ts">
  import {Component, State, Vue} from 'nuxt-property-decorator'
  import {NuxtContext} from 'nuxt'

  @Component
  export default class tsNuxt extends Vue {
    @State public title!: string

    async asyncData({app}: NuxtContext) {
      const data = await app.$axios.$get('http://127.0.0.1:3000/info.json')
      return {news: data}
    }

    created() {
      console.log(this.news)
    }

  }
</script>
