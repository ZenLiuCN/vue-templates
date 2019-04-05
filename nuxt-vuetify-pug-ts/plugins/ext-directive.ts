import Vue from 'vue'
import { DirectiveBinding } from 'vue/types/options'
const Binder = {
  calc: (el: HTMLElement) => {
    return (event?: Event) => {
      let tar = el.classList.contains('v-window')
        ? el
        : el.classList.contains('v-tabs')
        ? Array.from(el.children).filter(e =>
            e.classList.contains('v-window')
          )[0]
        : null

      if (tar) {
        if (el.getAttribute('reset') == null) {
          tar.setAttribute(
            'style',
            `overflow:auto;max-height:${window.innerHeight -
              tar.getClientRects()[0].top}px`
          )
        } else {
          tar.removeAttribute('style')
        }
      }
    }
  },
  pool: {},
  bind: (el: HTMLElement, binding: DirectiveBinding) => {
    let ok = el.getAttribute('listener')
    if (binding.value === undefined || binding.value) {
      let key = ok ? ok : new Date().getTime().toString(16)
      if (!ok) {
        Binder.pool[key] = Binder.calc(el)
        Binder.pool[key]()
        window.addEventListener('resize', Binder.pool[key])
        el.setAttribute('listener', key)
      }
    } else {
      if (ok) {
        el.setAttribute('reset', 'true')
        Binder.pool[ok]()
        window.removeEventListener('resize', Binder.pool[ok])
        el.removeAttribute('reset')
        el.removeAttribute('listener')
      }
    }
  },
  unbind: (el: HTMLElement) => {
    let ok = el.getAttribute('listener')
    if (ok) {
      window.removeEventListener('resize', Binder.pool[ok])
    }
  }
}
Vue.directive('scrollable', {
  inserted: Binder.bind,
  update: Binder.bind,
  unbind: Binder.unbind
})
