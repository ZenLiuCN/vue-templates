import { messager } from './ext-messager'

export default function({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    if (store.state.user.token && store.state.user.token != '') {
      config.headers['token'] = store.state.user.token
    }
  })

  $axios.onResponseError(err => {
    if (!err.response) {
      messager.msgbox({
        text: '无法连接服务器,请检查本地网络或联系管理员',
        type: 'error'
      })
      return Promise.reject(err)
    }
    const code = parseInt(err.response && err.response.status)
    if (code === 401 || code === 403) {
      if (
        err.response.data &&
        err.response.request.responseURL.indexOf('login') != -1
      ) {
        messager.msgbox({
          text: `&nbsp;&nbsp;&nbsp;&nbsp;` + err.response.data.message,
          type: 'error'
        })
      } else {
        new Promise(r => {
          messager.msgbox({
            text:
              `&nbsp;&nbsp;&nbsp;&nbsp;` + err.response.data.message
                ? err.response.data.message
                : '请求失败,登录信息已过期,请重新登录!',
            type: 'error',
            callback: {
              done: r
            }
          })
        }).then(e => {
          redirect(`/login`)
        })
      }
    }
    return Promise.reject(err)
  })
  $axios.onRequestError(err => {
    messager.msgbox({
      text: '无法连接服务器,请检查本地网络或联系管理员',
      type: 'error'
    })
    return Promise.reject(err)
  })
}
const formStringify = (o: object): string => {
  return Object.keys(o)
    .map(k => `${k}=${o[k]}`)
    .join('&')
}
