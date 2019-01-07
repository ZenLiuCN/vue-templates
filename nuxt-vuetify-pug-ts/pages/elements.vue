<template lang="pug">
v-layout(row)
  v-flex(xs3)
    v-text-field(label="search" v-model="treeFilter")
    v-treeview.cyan.darken-3(
    :items='tree'
    item-key='name'
    :active='active'
    activatable)
      template(slot='label', slot-scope='{ item, open, leaf}')
        v-tooltip(bottom)
          span(slot="activator") {{item.name|overflow(15)}}
          span {{item.name}}

</template>
<script lang="ts">
import { Component, Vue, Mutation, namespace } from 'nuxt-property-decorator'
import { NuxtContext } from 'nuxt';

@Component({ name: 'elements' })
export default class Elements extends Vue {
  async asyncData({ app }: NuxtContext) {
    let data = await app.$axios.$get(`${window.location.origin}/tree.json`)
    return {
      tree: data
    }
  }
  active: string[] = []
  head() { return { title: 'element example' } }
  tree: { name: string }[]
  treeFilter: string = ''

}
</script>
<style lang="stylus">
</style>
