import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/home/Home'
import Hero from '@/pages/hero/Hero'
import Detail from '@/pages/detail/Detail'

const Router = createRouter({
  history: createWebHashHistory(),

  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/hero',
    name: 'Hero',
    component: Hero
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

// // 获取原型对象上的push函数
// const originalPush = Router.prototype.push
// // 修改原型对象中的push方法
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default Router
