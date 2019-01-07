import { LoginedUser } from '~/@types/api';
import { ActionContext } from 'vuex';
import { RootState } from '.';
/* #region Class */

export class UserState {
  token: string = ''
  id: string = ''
  name: string = ''
}
export class UserGetter {
  isLogin = (s: UserState) => s.token !== ''
}
export class UserMutation {
  setUser = (s: UserState, u: LoginedUser) => {
    Object.assign(s, u)
  }
}
/* #endregion */

/* #region Exports */
export const state = () => new UserState()
export const getters = new UserGetter()
export const mutations = new UserMutation()
export const actions = {
  doLogin(store: ActionContext<UserState, RootState>) {

  },
  loading() {

  }
}

/* #endregion */
