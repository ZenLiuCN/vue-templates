export class State {
  main: string = ''
}
class Getters {}
class Mutations {}
export const state = () => new State()
export const mutations = new Mutations()
export const getters = new Getters()
export const actions = {}
