import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'

Vue.use(Router)

const routes = {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
}

const router = new Router(routes)

router.beforeEach((to, from, next) => {
  console.log('to: ', to)
  console.log('from: ', from)
  next()
})

export default router
