<template lang="pug">
  v-app(dark)
    v-navigation-drawer(
    :mini-variant.sync="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    fixed
    app): v-list
      div(
        v-for="item in menus"
        :key="item.title"
      )
        v-list-group(    
          v-if="item.child&&item.child.length>0"
          )
          v-tooltip(v-if="miniVariant" right slot="prependIcon")
              v-icon(slot="activator") {{'mdi-'+item.icon}}
              span {{item.tip?item.tip:item.title}}
          v-icon(v-else slot="prependIcon") {{'mdi-'+item.icon}}
          v-list-tile(slot="activator"): v-list-tile-content(): v-list-tile-title(v-text="item.title")
          v-list-tile(
            v-for="itm in item.child"  
            :key="itm.title"  
            :to="itm.to"
            router
            exact)
            v-tooltip(v-if="miniVariant" right)
              v-list-tile-action(slot="activator"): v-icon(small) {{'mdi-'+itm.icon}}
              span {{itm.tip?itm.tip:itm.title}}
            v-list-tile-action(v-else).ml-3: v-icon {{'mdi-'+itm.icon}}
            v-list-tile-content(): v-list-tile-title(v-text="itm.title")
        v-list-tile(
          v-else
          router
          :to="item.to"
          exact
          )
          v-tooltip(v-if="miniVariant" right)
            v-list-tile-action(slot="activator"): v-icon {{'mdi-'+item.icon}}
            span {{item.tip?item.tip:item.title}}
          v-list-tile-action(v-else): v-icon {{'mdi-'+item.icon}}
          v-list-tile-content(): v-list-tile-title(v-text="item.title")
    v-toolbar( fixed app :clipped-left="clipped")
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-btn( icon @click.stop="miniVariant = !miniVariant"): v-icon(v-html="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'")
      v-btn( icon @click.stop="clipped = !clipped"): v-icon mdi-web
      v-btn( icon @click.stop="fixed = !fixed"): v-icon mdi-border-top-variant
      v-toolbar-title(v-text="title")
      v-spacer/
      v-btn(icon @click.stop="rightDrawer = !rightDrawer"): v-icon mdi-menu
    v-content(): v-container(): nuxt
    v-navigation-drawer(temporary :right="right" v-model="rightDrawer" fixed)
      v-list
        v-list-tile.cursor-pointer(@click.native="right = !right")
          v-list-tile-action(): v-icon {{right?'mdi-arrow-expand-left':'mdi-arrow-expand-right'}}
          v-list-tile-title Switch drawer {{right?'left':'right'}}(click me)
    v-footer(:fixed="fixed" app): span.ml-4 &copy;{{new Date().getFullYear()}}

</template>

<script lang="ts">
import { Vue, Component, State, Watch } from "nuxt-property-decorator";
import { setTimeout } from "timers";

@Component({ name: "default" })
export default class extends Vue {
  active = ""
  clipped = false
  drawer = true
  fixed = false
  miniVariant = true
  right = true
  rightDrawer = false
  @State menus
  @State title
  @State autoMiniVariant!: boolean
  @State miniTimeout!: number
  @Watch("miniVariant") onMiniVariantChange(val: boolean, old: boolean) {
    if (this.autoMiniVariant && !val) {
      setTimeout(() => this.miniVariant = true, this.miniTimeout)
    }

  }
}
</script>
