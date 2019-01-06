<template lang="pug">
v-layout(row ajust-center)
    v-flex(xs12 md4)
        v-card()
            v-card-title( primary-title).title
                |login &nbsp;
                v-icon(small) mdi-security
            .ma-3
                v-text-field( prepend-icon="mdi-account" name="username" label="username" v-model="param.username" )
                v-text-field( prepend-icon="mdi-lock-open" name="password" label="password" v-model="param.password" type="password" )
            v-card-actions(): v-btn(@click="doLogin") login
    v-flex( xs12 md8)
        .ma-3
            .header easy web framework

</template>
<script lang="ts">
import { Component, Vue, Mutation, namespace } from 'nuxt-property-decorator'
import { LoginParam } from '~/@types/api';
const userModule = namespace('user')
@Component({ name: 'login', middleware: 'log', layout: 'blank' })
export default class Login extends Vue {
  param: LoginParam = { username: '', password: '' }
  @userModule.Mutation setUser
  doLogin() {
    this.$router.push("/")
  }
}
</script>
<style lang="stylus">
</style>