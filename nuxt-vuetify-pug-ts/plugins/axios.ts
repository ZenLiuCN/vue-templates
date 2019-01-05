export default function({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    if (
      store.state.user &&
      store.state.user.token &&
      store.state.user.token != ''
    ) {
      $axios.setToken(store.state.user.token, 'token')
    }
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
