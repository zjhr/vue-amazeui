import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    component: App,
    children: [{ //嵌套路由，在App渲染的router-view里面router-view再次渲染为以下views
      path: '', //推荐
      meta: {
        auth: false
      }, //meta来定义一些字段，在路由钩子，找到这些字段来do someting，比如该auth定义的是：该链接是否需要显示header
      component: resolve => require(['views/index.vue'], resolve) //路由懒加载(异步组件写法)
    }, {
      path: 'Accordion',
      component: resolve => require(['views/Accordion'], resolve)
    }, {
      path: 'Badge',
      component: resolve => require(['views/Badge'], resolve)
    }, {
      path: 'Button',
      component: resolve => require(['views/Button'], resolve)
    }, {
      path: 'Card',
      component: resolve => require(['views/Card'], resolve)
    }, {
      path: 'Form',
      component: resolve => require(['views/Form'], resolve)
    }, {
      path: 'Grid',
      component: resolve => require(['views/Grid'], resolve)
    }, {
      path: 'Icon',
      component: resolve => require(['views/Icon'], resolve)
    }, {
      path: 'List',
      component: resolve => require(['views/List'], resolve)
    }, {
      path: 'Loader',
      component: resolve => require(['views/Loader'], resolve)
    }, {
      path: 'Modal',
      component: resolve => require(['views/Modal'], resolve)
    }, {
      path: 'Navbar',
      component: resolve => require(['views/Navbar'], resolve)
    }, {
      path: 'Notification',
      component: resolve => require(['views/Notification'], resolve)
    }, {
      path: 'offCanvas',
      component: resolve => require(['views/OffCanvas'], resolve)
    }, {
      path: 'Popover',
      component: resolve => require(['views/Popover'], resolve)
    }, {
      path: 'Slider',
      component: resolve => require(['views/Slider'], resolve)
    }, {
      path: 'TabBar',
      component: resolve => require(['views/TabBar'], resolve)
    }, {
      path: 'Tabs',
      component: resolve => require(['views/Tabs'], resolve)
    }, {
      path: 'Typography',
      component: resolve => require(['views/Typography'], resolve)
    }, {
      path: 'About',
      component: resolve => require(['views/About'], resolve)
    }]
  }]
})
