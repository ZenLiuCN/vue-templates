class UserState {
  token: string = ''
}
class UserGetter {
  isLogin = (s: UserState) => s.token != ''
}
class UserMutation {}
class UserAction {}

export const state = () => new UserState()
export const getters = new UserGetter()
export const mutations = new UserMutation()
export const actions = new UserAction()
