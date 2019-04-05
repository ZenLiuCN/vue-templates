import Vue from 'vue'
import Dexie from 'dexie'
export class Database extends Dexie {
  //  exams: Dexie.Table<ExamStatus, string>

  constructor(name: string, version: number) {
    super(name)
    this.version(version).stores({
      exams: '&id, start,end,name'
    })
  }
}

let VueDexie = function(Vue: any, options: any) {
  const database = new Database(
    options.name ? options.name : 'quest',
    options.version ? options.version : 1
  )
  Object.defineProperties(Vue.prototype, {
    $db: {
      get() {
        return database
      }
    }
  })
  Vue.db = database
}
Vue.use(VueDexie, {
  name: 'quest',
  version: 1
})
