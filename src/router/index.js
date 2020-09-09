import Vue from 'vue'
import VueRouter from 'vue-router'
import siginRoter from './sign_in.js'
import appRote from  './app'

Vue.use(VueRouter)

const routes = [
  siginRoter,
  appRote,
  {
    path:'/',
    redirect:'/sign'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
