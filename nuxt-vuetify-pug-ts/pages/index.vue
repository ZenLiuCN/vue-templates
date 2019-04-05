<template lang="pug">
v-layout(column,warp,justify-start)
  v-flex()
    v-layout(row,wrap)
      v-flex(xs12,sm4): v-card().ma-2
        v-toolbar(dense,:class="cardTitle") 资讯
        v-layout(column)
          v-flex(v-for="paper in news",:key='paper',:class="paperStyle"): span {{paper}}
      v-flex(xs12,sm4): v-card().ma-2
        v-toolbar(dense,:class="cardTitle")  进行中处方
        v-data-iterator(:items='proc',hide-actions, content-tag='v-layout', column,style="height:120px;overflow-y:auto;").pl-2.pr-1
          template(v-slot:item='{item:p}')
            v-flex().pt-1: v-layout(row,warp,@click.stop="$router.replace(`/eps/${p.id}`)").cursor-pointer
              v-flex(xs12,lg3): span {{p.patient}}
              v-flex(xs12,lg5): span {{p.issueDate|timestamp}}
              v-flex(xs12,lg2): span {{stageToName(p.stage)}}
      v-flex(xs12,sm4): v-card().ma-2
        v-toolbar(dense,:class="cardTitle")  已完成处方
        v-data-iterator(:items='done',hide-actions, content-tag='v-layout', column,style="height:120px;overflow-y:auto;").pl-1.pr-1
          template(v-slot:item='{item:p}')
            v-flex(): v-layout(row,warp,@click.stop="$router.replace(`/eps/${p.id}`)").cursor-pointer
              v-flex(xs12,lg3): span {{p.patient}}
              v-flex(xs12,lg5): span {{p.issueDate|timestamp}}
              v-flex(xs12,lg2): span {{stageToName(p.stage)}}


  v-flex(): v-layout(
    d-flex,
    fill-height,
    justify-space-between)
    v-card().pl-2.pr-2.elevation-0
      v-toolbar(dense,:class="cardTitle") 快速入口
      v-container(grid-list-sm,fluid): v-layout(row,wrap)
        v-flex(xs4,v-for="m in menus",:key="m.icon")
          v-card(@click="$router.replace('/eps/create')",:class="['text-xs-center','cursor-pointer','elevation-0']")
            div.text-xs-center {{m.name}}
            v-hover(): componet(slot-scope="{ hover }",:is="m.icon",class="svg-primary",:class="hover?'elevation-5':'elevation-0'",:style="{width:hover?'80px':'64px',height:hover?'80px':'64px'}").pa-1.ma-1



</template>

<script lang="ts">
import { Component, Vue, State, namespace } from "nuxt-property-decorator";
import { NuxtContext } from "nuxt";
import IcoPermit from '~/assets/svg/permit.svg'
import IcoPrescription from '~/assets/svg/Prescription.svg'
import IcoStats from '~/assets/svg/stats.svg'
import { stageToName } from '~/model/helper'

const API = namespace('api')
const USR = namespace('user')
@Component({
  components: {
    IcoPermit, IcoPrescription, IcoStats
  }
})
export default class Main extends Vue {
  async asyncData({ store }: NuxtContext) {
    await store.dispatch('api/fetchAllEnvelope')
  }
  stageToName = stageToName
  @USR.State role!: string
  interval: any

  beforeDestroy() {
    this.interval ? clearInterval(this.interval) : undefined
  }
  mounted() {
    this.interval = setInterval(() => {
      this.$store.dispatch('api/fetchAllEnvelope')
    }, 10000)
    switch (true) {
      case this.role == 'PHA': return this.$router.replace('/pha')
      case this.role == 'PAT': return this.$router.replace('/pat')
    }
  }
  /* #region Style control */
  get cardTitle() {
    return ['subheading', 'primary', 'white--text', 'elevation-0']
  }

  get paperStyle() {
    return ["subheading", "pl-2", "elevation-0"]
  }
  /* #endregion */

  news = [
    "新闻1",
    "新闻2",
    "新闻3",
    "新闻4",
    "新闻5",
  ]
  @API.Getter getMy!: Function
  @USR.State name!: string
  get proc() {
    return this.getMy(this.name).proc.map(e => e.summary)
  }
  get done() {
    return this.getMy(this.name).done.map(e => e.summary)
  }

  menus = [
    { icon: "ico-prescription", name: "创建处方", to: "/eps/create" },
    // { icon: "ico-permit", name: "处方审核", to: "" },
    { icon: "IcoStats", name: "统计信息", to: "" }


  ]
}
</script>

<style scoped>
.scroller {
  height: calc(100vh - 64px) !important;
  overflow: auto;
}
</style>
