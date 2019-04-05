import { Menu } from '~/model/internal'
const pkg = require('~/package.json')
const menuFilter = (menus: Menu[], role: string | string[]) => {
  if (typeof role === 'string') {
    return menus
      .filter(e => !e.role || e.role.indexOf(<string>role) != -1)
      .map(m => (m.child ? menuFilter(m.child, role) : m))
  } else if (Array.isArray(role)) {
    {
      return menus
        .filter(e => !e.role || e.role.some(r => role.indexOf(r) != -1))
        .map(m => (m.child ? menuFilter(m.child, role) : m))
    }
  } else {
    return menus.map(m => (m.child ? menuFilter(m.child, role) : m))
  }
}
export class Global {
  autoMiniVariant: boolean = true
  miniTimeout: number = 3000
  private defaultMenu: Menu[] = [
    {
      title: '办公桌',
      to: '/',
      icon: 'mdi-monitor-dashboard',
      role: ['DOC', 'ADM']
    },
    { title: '我的', to: '/pat', icon: 'mdi-monitor-dashboard', role: ['PAT'] },
    {
      title: '办公桌',
      to: '/pha',
      icon: 'mdi-monitor-dashboard',
      role: ['PHA']
    },
    {
      title: '信息统计',
      to: '/static',
      icon: 'mdi-chart-scatterplot-hexbin',
      role: ['DOC', 'PHA', 'PAT']
    },
    {
      title: '系统设置',
      to: '/setting',
      icon: 'mdi-settings',
      role: ['ADM', 'DOC', 'PHA']
    },
    {
      title: '个人中心',
      to: '/setting',
      icon: 'mdi-settings',
      role: ['PAT']
    },
    { title: '测试页面', to: '/test', icon: 'mdi-settings', role: ['ADM'] }
  ]
  dark: boolean = false
  title: string = pkg.title
  menus: Menu[] = this.defaultMenu
}
class Mutations {
  switchTheme = (s: Global) => {
    s.dark = !s.dark
  }
}
class Getters {
  menuOf = (s: Global) => (role: string | string[]) => menuFilter(s.menus, role)
}
export const state = () => new Global()
export const getters = new Getters()
export const mutations = new Mutations()
export const actions = {
  /* async doLogin({ commit }: ActionContext<Root>, param: ParamLogin): void {
    let r: ApiResponse = await this.$axios.$post('/login', param)
    if (r.code !== "0") {
      commit("setError", r.msg)
    } else {
      commit('setToken', r.data.token)
    }

  } */
}
