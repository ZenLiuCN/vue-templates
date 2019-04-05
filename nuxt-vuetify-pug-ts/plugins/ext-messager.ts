import Vue from 'vue'
import { NuxtContext } from 'nuxt'

/* #region Model */
export abstract class Tips {
  public static NONE = 'none'
  public static ERROR = 'error'
  public static SUCCESS = 'success'
  public static INFO = 'info'
  public static WARN = 'warning'
  id: string = new Date().getTime().toString()
  type: string = Tips.INFO
  text: string = ''
  closeable: boolean = false
  timeout: number = -1
  timeoutHandler?: any
  icon?: string
  callback: callback = {}
  get icons() {
    if (this.icon) {
      return this.icon
    }
    return this.type == Tips.INFO
      ? 'mdi-information'
      : this.type == Tips.SUCCESS
      ? 'mdi-checkbox-marked-circle'
      : this.type == Tips.WARN
      ? 'mdi-alert'
      : this.type == Tips.ERROR
      ? 'mdi-alert'
      : this.type == 'primary'
      ? 'mdi-information-variant'
      : this.type == 'accent'
      ? 'mdi-information-variant'
      : 'mdi-information-variant'
  }
}
interface callback {
  done?: Function
  cancel?: Function
}
export interface IAlert {
  text: string
  transition?: string
  outline?: boolean
  icon?: string
  type?: string
  closeable?: boolean
  timeout?: number
  callback?: callback
}
export interface IToast {
  text: string
  icon?: string
  left?: boolean
  right?: boolean
  bottom?: boolean
  top?: boolean
  vertical?: boolean
  multiLine?: boolean

  type?: string
  closeable?: boolean
  timeout?: number
  callback?: callback
}
export interface IMsgbox {
  text: string
  icon?: string
  title?: string
  fullscreen?: boolean
  persistent?: boolean
  scrollable?: boolean
  maxWidth?: number
  type?: string
  callback?: callback
}
export interface IDAlert {
  transition?: string
  outline?: boolean
  icon?: string
  type?: string
  closeable?: boolean
  timeout?: number
}
export interface IDToast {
  icon?: string
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  vertical?: boolean
  multiLine?: boolean
  type?: string
  closeable?: boolean
  timeout?: number
}
export interface IDMsgbox {
  icon?: string
  title?: string
  fullscreen?: boolean
  persistent?: boolean
  scrollable?: boolean
  maxWidth?: number
  type?: string
}
export class Alert extends Tips {
  transition: string = 'scale-transition'
  outline: boolean = true
  closeable = true
}
export class Toast extends Tips {
  left: boolean = false
  right: boolean = false
  top: boolean = false
  bottom: boolean = false
  vertical: boolean = false
  multiLine: boolean = false
}
export class Msgbox extends Tips {
  title: string = '提醒'
  fullscreen: boolean = false
  persistent: boolean = true
  scrollable: boolean = false
  maxWidth?: number
}
export interface IMessager {
  pool: Tips[]
  setDefaultMsgbox(message: IDMsgbox): void
  setDefaultToast(message: IDToast): void
  setDefaultAlert(message: IDAlert): void
  msgbox(message: IMsgbox): void
  toast(message: IToast): void
  alert(message: IAlert): void
  remove(id: string): void
}
class Messager implements IMessager {
  pool: Tips[] = []
  private defToast: IDToast = {}
  private defMsgbox: IDMsgbox = {}
  private defAlert: IDAlert = {}
  setDefaultMsgbox(message: IDMsgbox): void {
    this.defMsgbox = message
  }
  setDefaultToast(message: IDToast): void {
    this.defToast = message
  }
  setDefaultAlert(message: IDAlert): void {
    this.defAlert = message
  }
  remove(id: string) {
    const idx = this.pool.findIndex(i => i.id == id)
    if (idx == -1) {
      return
    }
    this.pool.splice(idx, 1)
  }
  private processor(alt: Tips, noTimeout: boolean = false) {
    if (!noTimeout) {
      if ((!alt.closeable && alt.timeout <= 0) || alt.timeout > 30) {
        alt.timeout = 30
      }
      if (alt.hasOwnProperty('timeout') && alt.timeout > 0) {
        alt.timeout = alt.timeout * 1000
        alt['timeoutHandler'] = setTimeout(
          () => this.remove(alt.id),
          alt.timeout
        )
      }
    }
    this.pool.push(alt)
  }
  alert = (alert: IAlert) => {
    const alt = new Alert()
    Object.assign(alt, this.defAlert)
    Object.assign(alt, alert)
    this.processor(alt)
  }
  toast = (alert: IToast) => {
    const alt = new Toast()
    Object.assign(alt, this.defToast)
    Object.assign(alt, alert)
    this.processor(alt)
  }
  msgbox = (alert: IMsgbox) => {
    const alt = new Msgbox()
    Object.assign(alt, this.defMsgbox)
    Object.assign(alt, alert)
    this.processor(alt, true)
  }
}

/* #endregion */
export const messager: IMessager = new Messager()
const VueExtension = function(Vue: any, options: any) {
  Object.defineProperties(Vue.prototype, {
    $messager: {
      get() {
        return messager
      }
    }
  })
}

Vue.use(VueExtension)
export default (
  ctx: NuxtContext,
  inject: (name: string, obj: () => any | any) => void
) => {
  inject('messager', () => messager)
  ctx.store['$messager'] = messager
}
