// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import FastClick from 'fastclick' //安装Fastclick
FastClick.attach(document.body);

//安装css
import '../static/amazeui.touch.min.css'

/* eslint-disable no-new */
new Vue({ router })
    .$mount('#app') //挂载index.html的dom为id=app,路由必须安装import App from './App'
    // new Vue({
    //     router,//编译挂载元素里面的<router-view></router-view>
    //     el: '#app',//挂载index.html的dom为id=app
    //     template: '<App/>',//挂载模板，替换挂载元素
    //     components: { App }//组件，利用组件注册到上面“template”，必须安装import App from './App'
    // })
    // new Vue({
    //         router,
    //         render: h => h(App) //创建一个可以编译App的“template”，必须安装import App from './App'
    //     }).$mount('#app') //挂载index.html的dom为id=app