<template lang='pug'>
.container
  h1(v-if='error.statusCode === 404') 功能页面不存在
  h1(v-else='') {{error.message}}
  nuxt-link(to='/') 返回工作台
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { error } from "util";
@Component({
  name: "ErrorPage"
})
export default class ErrorPage extends Vue {
  @Prop() error
  created() {
    console.log(error)
  }
}
</script>
