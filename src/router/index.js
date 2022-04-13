import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Hero from '@/pages/hero/Hero'

Vue.use(Router)

// 获取原型对象上的push函数
const originalPush = Router.prototype.push
// 修改原型对象中的push方法
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/hero',
    name: 'Hero',
    component: Hero
  }]
})
