<template lang="pug">
v-layout(row)
  v-flex(xs3)
    v-text-field(label="search" v-model="treeFilter")
    v-treeview.cyan(
    :items='items'
    item-key='name'
    open-on-click)
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
  head() { return { title: 'element example' } }
  tree: { name: string }[]
  treeFilter: string = ''
  get items() {
    if (this.treeFilter === '') return this.tree
    return this.tree.filter(e => e.name.indexOf(this.treeFilter) > 0)
  }
}
</script>
<style lang="stylus">
</style>