import EasyCm from './EasyCm.vue'
import ShortKey from 'vue-shortkey'
const VueEasyCm  = {
  install: function (Vue) {
    Vue.component('easy-cm', EasyCm)
    Vue.prototype.$easycm = function (e,root,tag) {
      e.stopPropagation()
      e.preventDefault()
      root.$emit('easyAxis',{
        tag: tag,
        x: e.clientX,
        y: e.clientY
      })
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueEasyCm)
    window.Vue.use(ShortKey)
}

export default VueEasyCm
