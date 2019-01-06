import { MenuItem } from '../@types/MenuItem'

class RootState {
  title: string = 'nuxted web framework'
  autoMiniVariant: boolean = false
  miniTimeout: number = 3000
  menus: MenuItem[] = [
    { icon: 'apps', title: 'Welcome', to: '/' },
    { icon: 'chart-bubble', title: 'Inspire', to: '/inspire' },
    { icon: 'ammunition', title: 'nuxted', to: '/nuxted' },
    {
      icon: 'file-tree',
      title: 'submenus',
      child: [
        { icon: 'apps', title: 'login', to: '/login' },
        { icon: 'xbox-controller', title: 'elements', to: '/elements' },
        { icon: 'ammunition', title: 'nuxted', to: '/nuxted' }
      ]
    }
  ]
}
class RootGetter { }
class RootMutation {
  setTitle = (s: RootState, title: string) => (s.title = title)
}
class RootAction { }
export const state = () => new RootState()
export const getters = new RootGetter()
export const mutations = new RootMutation()
export const actions = new RootAction()
