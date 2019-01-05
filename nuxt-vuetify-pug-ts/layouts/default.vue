<template lang="pug">
  v-app(dark)
    v-navigation-drawer(
    :mini-variant.sync="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    fixed
    app): v-list: v-list-tile(
    router
    :to="item.to"
    :key="i"
    v-for="(item, i) in items"
    exact)
      v-list-tile-action: v-icon(v-html="item.icon")
      v-list-tile-content: v-list-tile-title(v-text="item.title")
    v-toolbar( fixed app :clipped-left="clipped")
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-btn( icon @click.stop="miniVariant = !miniVariant"): v-icon(v-html="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'")
      v-btn( icon @click.stop="clipped = !clipped"): v-icon mdi-web
      v-btn( icon @click.stop="fixed = !fixed"): v-icon mdi-remove
      v-toolbar-title(v-text="title")
      v-spacer/
      v-btn(icon @click.stop="rightDrawer = !rightDrawer"): v-icon mdi-menu
    v-content: v-container: nuxt
    v-navigation-drawer(temporary :right="right" v-model="rightDrawer" fixed)
      v-list: v-list-tile.cursor-pointer(@click.native="right = !right")
        v-list-tile-action: v-icon {{right?'mdi-arrow-expand-left':'mdi-arrow-expand-right'}}
        v-list-tile-title Switch drawer to {{right?'left':'right'}} (click me)
    v-footer(:fixed="fixed" app): span.ml-4 &copy;{{new Date().getFullYear()}}
</template>
<script lang="ts">
import Component from "nuxt-class-component";
import Vue from "vue";
@Component({ name: "default" })
export default class Default extends Vue {
  clipped = false;
  drawer = true;
  fixed = false;
  items = [
    { icon: "mdi-apps", title: "Welcome", to: "/" },
    { icon: "mdi-chart-bubble", title: "Inspire", to: "/inspire" },
    { icon: "mdi-ammunition", title: "tsNuxt", to: "/tsNuxt" }
  ];
  miniVariant = false;
  right = true;
  rightDrawer = false;
  title = "Vuetify.js";
  created() {
    this.$HookExample();
  }
}
</script>
