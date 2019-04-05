<template lang="pug">
  v-layout(row justify-center align-center)
    v-flex(xs12 sm8 md6 lg4,xl3)
      v-card.elevation-0(v-show="!binding")
        v-card-title().title.primary.white--text.pa-2 登录
        v-form.pa-3
          v-text-field#username(
            data-vv-as="用户名",v-validate="'required|alpha_num|max:32|min:3'",required,:error-messages="errors.collect('username')"
          ,name='username',v-model="param.username", label='帐号',clearable)
          v-text-field#password(
            data-vv-as="密码",v-validate="'required|min:3|max:32'",required, :error-messages="errors.collect('password')"
          ,name='password', v-model="param.password",label='密码',:type="showPassword?'text':'password'"
          ,clearable): component(slot="append",:is="showPassword?'mdi-eye-off':'mdi-eye'",@click.stop='switchShowPassword').cursor-pointer
        v-layout(row).pa-2
          v-flex(xs12 md6)
            v-btn( color='primary',:loading="loginIng",round,block,@click.stop="login" ) 登录
          v-flex(xs12 md6)
            v-btn( color='primary',flat,round,block,@click.stop="clear" ) 清空


</template>
<script lang="ts">
import { Component, Vue, namespace, State, Mutation, Watch } from "nuxt-property-decorator";
import { NuxtContext } from "nuxt";

import { LoginParam } from "~/model/model";


const USER = namespace('user')

@Component({
  layout: "blank"
})
export default class Login extends Vue {

  @USER.Action doLogin!: Function
  @USER.State isLogined!: boolean


  institutionId: number = -1
  binding: boolean = false
  alert: boolean = false
  showPassword: boolean = false;
  loginIng: boolean = false;
  param: LoginParam = new LoginParam()
  canShowPassword: boolean = true

  created() {
    this.param.username = 'admin'
    this.param.password = 'admin'
  }
  switchShowPassword() {
    this.showPassword = !this.showPassword
  }
  clear() {
    this.param.clear()
    this.$validator.reset()
  }

  login() {
    this.$validator.validateAll().then(e => {
      if (e === true) {
        this.loginIng = true
        return this.doLogin(this.param)
      } else {
        throw ""
      }
    }).then(e => {
      this.loginIng = false
      // console.log(e.role)
      switch (true) {
        case e.role == 'PHA': return this.$router.replace('/pha')
        case e.role == 'DOC': return this.$router.replace('/')
        case e.role == 'PAT': return this.$router.replace('/pat')
      }
    }).catch(
      e => {
        this.loginIng = false
        if (e != "") this.$log.error(e)
      }
    )

  }

}
</script>
