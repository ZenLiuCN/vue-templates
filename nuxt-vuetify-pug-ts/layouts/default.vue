<template lang="pug">
  v-app(:dark="dark")
    v-navigation-drawer(
      ref="_d"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app)
      v-list(): div(
        v-for="item in menu",
        :key="item.title"
      )
        v-list-group(v-if="item.child&&item.child.length>0")
          v-tooltip(v-if="miniVariant" right slot="prependIcon")
              component(:is='item.icon',slot="activator",:class="[item.iconColor?item.iconColor:'','',]")
              span {{item.tip?item.tip:item.title}}
          component(:is="item.icon", v-else,slot="prependIcon",:class="[item.iconColor?item.iconColor:'','',]")
          v-list-tile(slot="activator"): v-list-tile-content(@click="tryRoute(item)"): v-list-tile-title(v-text="item.title")
          v-list-tile(
            v-for="itm in item.child"
            :key="itm.title"
            :to="itm.to"
            router
            nuxt
            exact)
            v-tooltip(v-if="miniVariant" right)
              v-list-tile-action(slot="activator"): component(:is='itm.icon',:class="[item.iconColor?item.iconColor:'']")
              span {{itm.tip?itm.tip:itm.title}}
            v-list-tile-action(v-else).ml-3: component(:is='itm.icon',:class="[item.iconColor?item.iconColor:'']")
            v-list-tile-content(): v-list-tile-title(v-text="itm.title")
        v-list-tile(
          v-else
          router
          :to="item.to"
          exact
          )
          v-tooltip(v-if="miniVariant" right)
            v-list-tile-action(slot="activator"): component(:is="item.icon",:class="[item.iconColor?item.iconColor:'']")
            span {{item.tip?item.tip:item.title}}
          v-list-tile-action(v-else): component(:is="item.icon",:class="[item.iconColor?item.iconColor:'']")
          v-list-tile-content(): v-list-tile-title(v-text="item.title")
    v-toolbar(fixed,app,:clipped-left="clipped",dense).primary.white--text.elevation-0
      v-tooltip(bottom)
        v-toolbar-side-icon(slot='activator' @click="drawer = !drawer"): MdiMenu(:class="iconThemeColor")
        span {{drawer?'隐藏':'显示'}}主菜单
      v-btn(v-if="drawer" icon @click.stop="miniVariant = !miniVariant")
        component(:is="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'",:class="iconThemeColor")
      v-tooltip(bottom)
        v-btn(icon slot="activator" @click="switchTheme")
          mdi-brightness-6(:class="iconThemeColor")
        span  切换{{dark?'明亮':'高对比'}}主题
      v-spacer
      v-toolbar-title(v-text="title")
      v-spacer
      span.subheading(v-if="$vuetify.breakpoint.mdAndUp").pr-4
        |&nbsp;{{name}}
        span.body-1.grey--text &nbsp;
      v-tooltip(bottom)
        MdiExitToApp.cursor-pointer(slot="activator",@click.stop="$router.replace('/login')",class="svg-white")
        span 退出登录
    v-content()
      PAlert()
      v-container(fluid,:fill-height='fillHeight').ma-0.pa-1: nuxt()
</template>

<script lang="ts">
import { Vue, Component, State, Watch, Getter, namespace, Mutation } from "nuxt-property-decorator";
import { Menu } from "~/model/internal";
import PAlert from '~/components/PAlert.vue'

const GLOB = namespace("global")
const USER = namespace("user")
@Component({
  name: "default",
  middleware: 'logined',
  components: { PAlert }})
export default class extends Vue {
  /* #region Base */
  @USER.State name!: string
  @USER.State role!: string | string[]

  @GLOB.State dark!: boolean
  @GLOB.State title!: string
  @GLOB.State autoMiniVariant!: boolean
  @GLOB.State miniTimeout!: number
  @GLOB.Getter menuOf!: (role: string | string[]) => Menu[]
  @GLOB.Mutation switchTheme!: Function


  clipped: boolean = true
  drawer: boolean = true
  miniVariant: boolean = true
  get menu() {
    return this.menuOf(this.role)
  }
  get iconThemeColor() {
    return this.$vuetify.dark ? 'svg-white' : 'svg-white'
  }
  fillHeight = false
  setFillHeight(status: boolean) {
    this.fillHeight = status
  }
  @Watch("miniVariant") onMiniVariantChange(val: boolean, old: boolean) {
    if (this.autoMiniVariant && !val) {
      setTimeout(() => this.miniVariant = true, this.miniTimeout)
    }
  }
  /* #endregion */
}
</script>
