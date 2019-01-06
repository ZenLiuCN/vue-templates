import { LoginedUser } from '~/@types/api';

class UserState {
  token: string = ''
  id: string = ''
  name: string = ''
}
class UserGetter {
  isLogin = (s: UserState) => s.token !== ''
}
class UserMutation {
  setUser = (s: UserState, u: LoginedUser) => {
    Object.assign(s, u)
  }
}
class UserAction { }

export const state = () => new UserState()
export const getters = new UserGetter()
export const mutations = new UserMutation()
export const actions = new UserAction()
