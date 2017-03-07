import '../../static/amazeui.touch.min.css'
import Vue from 'vue'
import * as accordion from './accordion'
import badge from './badge'
import * as button from './button'
import card from './card'
import container from './container'
import * as form from './form'
import * as grid from './grid'
import group from './group'
import icon from './icon'
import * as list from './list'
import loader from './loader'
import modal from './modal'
import navbar from './navbar'
import notification from './notification'
import offcanvas from './offcanvas'
import popover from './popover'
import * as slider from './slider'
import * as tabbar from './tabbar'
import * as tabs from './tabs'
import vueSwitch from './vueSwitch'
import vueview from './vueview'

const components = {
  ...accordion,
  badge,
  ...button,
  card,
  container,
  ...form,
  ...grid,
  group,
  icon,
  ...list,
  loader,
  modal,
  navbar,
  notification,
  offcanvas,
  popover,
  ...slider,
  ...tabbar,
  ...tabs,
  vueSwitch,
  vueview
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
  ...components,
  install
}
