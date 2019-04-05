import { NuxtContext, NuxtAxiosInstance } from 'nuxt'
import { AxiosInstance } from 'axios'

let doLogin = async (
  token: any,
  ax: AxiosInstance & NuxtAxiosInstance,
  redirect
) => {
  try {
    let user = await ax.$get('/check', { headers: { token } })
    if (user.state) {
      return redirect('/login')
    }
    return true
  } catch (error) {
    return redirect('/login')
  }
}

export default async function logined({
  store,
  redirect,
  route,
  app
}: NuxtContext) {
  route.query.hasOwnProperty('token')
    ? doLogin(route.query.token, app.$axios, redirect)
    : store.state.user.token === ''
    ? redirect('/login')
    : true
}
