import Vue from 'vue'
import { NuxtContext } from 'nuxt'
/* #region Logger */

export class Logger {
  public static readonly ALL = 0
  public static readonly TRACE = 1
  public static readonly DEBUG = 2
  public static readonly INFO = 3
  public static readonly WARN = 4
  public static readonly ERROR = 5
  public static readonly FATAL = 6
  public static readonly NONE = 7
  constructor(tag?: string, level?: number) {
    this.level = level ? (level < 0 ? 0 : level > 7 ? 7 : level) : 0
    this.prefix = tag ? tag : ''
  }
  level: number
  prefix: string
  trace(...param: any[]) {
    if (this.level <= Logger.TRACE)
      this.color(`[T][${this.prefix}]`, 'grey', param)
  }
  info(...param: any[]) {
    if (this.level <= Logger.INFO)
      this.color(`[I][${this.prefix}]`, '#00FF00', param)
  }
  debug(...param: any[]) {
    if (this.level <= Logger.DEBUG)
      this.color(`[D][${this.prefix}]`, '#000000', param)
  }
  warn(...arr: any[]) {
    if (this.level <= Logger.WARN) {
      arr.splice(0, 0, ` [W][${this.prefix}]: `)
      console.warn.apply(console, <[any?, ...any[]]>arr)
    }
  }
  error(...arr: any[]) {
    if (this.level <= Logger.ERROR) {
      arr.splice(0, 0, ` [D][${this.prefix}]: `)
      console.error.apply(console, <[any?, ...any[]]>arr)
    }
  }
  fatal(...arr: any[]) {
    if (this.level <= Logger.FATAL) {
      arr.splice(0, 0, ` [F][${this.prefix}]: `)
      console.error.apply(console, <[any?, ...any[]]>arr)
    }
  }
  log(tagStr: string, color: string, ...arr: any[]) {
    this.color(tagStr, color, arr)
  }
  private color(tagStr: string, color: string, arr: any[]) {
    let tag = arr[0]
    if (typeof tag == 'string' || tag == null || tag == undefined) {
      arr[0] = `%c ${tagStr} ${arr[0]}`
      arr.splice(1, 0, `color:${color}`)
    } else {
      arr.splice(0, 0, `%c ${tagStr} : `)
      arr.splice(1, 0, `color:${color}`)
    }
    console.log.apply(console, <[any?, ...any[]]>arr)
  }
}
const logger = new Logger('system')

/* #endregion */
const VueExtension = function(Vue: any, options: any) {
  Object.defineProperties(Vue.prototype, {
    $log: {
      get() {
        return logger
      }
    }
  })
}

Vue.use(VueExtension)
export default (ctx: NuxtContext, inject: Function) => {
  ctx['$log'] = logger
}
