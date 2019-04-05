import { LoginParam } from '~/model/model'
import { ActionContext } from 'vuex'
import { State } from './index'
import { Response, UserInfo } from '~/model/api.d'

export class User {
  // token: string = ''
  // userId: number = -1
  // createTime: string = ''
  // expireTime: string = ''
  token = ''
}
class Getters {
  isLogined(s: User): boolean {
    return s.token !== ''
  }
}
class Mutations {
  assignInfo = (s: User, info: any) => {
    Object.assign(s, info)
  }
}

export const actions = {
  async doLogin({ commit }: ActionContext<User, State>, param: LoginParam) {
    // const r: Response<UserInfo> = await this.$axios.$post(`/login`, param)
    // if (r.status !== 200) {
    //   this.$messager.toast({
    //     text: r.message ? r.message : '登录失败!',
    //     type: 'error',
    //     closeable: true
    //   })
    //   return Promise.reject(r)
    // }

    commit('assignInfo', { token: '12345678901', name: 'DEMO' })
    return Promise.resolve({ token: '12345678901', name: 'DEMO' })
  }
}

export const state = () => new User()
export const getters = new Getters()
export const mutations = new Mutations()
