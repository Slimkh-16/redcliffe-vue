import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/ContactsPage'
import Practices from '../pages/Practices/Practices'
import About from '../pages/About/About'
import Layers from '../pages/Layers/Layers'
import News from '../pages/News/News'
import NotFound from '../components/NotFound'

Vue.use(Router)

const routes = {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/notFound',
      name: 'Not found',
      component: NotFound
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/practices',
      name: 'Practices',
      component: Practices
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/layers',
      name: 'Layers',
      component: Layers
    },
    {
      path: '/news',
      name: 'News',
      component: News
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
