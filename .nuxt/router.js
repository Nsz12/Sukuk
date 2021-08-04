import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6678d946 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _1cd1ce6c = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _679d79db = () => interopDefault(import('..\\pages\\blogs\\_uid.vue' /* webpackChunkName: "pages/blogs/_uid" */))
const _3a9c184f = () => interopDefault(import('..\\pages\\conditions.vue' /* webpackChunkName: "pages/conditions" */))
const _0c627dc0 = () => interopDefault(import('..\\pages\\credit_scoring.vue' /* webpackChunkName: "pages/credit_scoring" */))
const _a9836ee2 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _a0e2b8f2 = () => interopDefault(import('..\\pages\\funds.vue' /* webpackChunkName: "pages/funds" */))
const _6e2ca9ef = () => interopDefault(import('..\\pages\\investor.vue' /* webpackChunkName: "pages/investor" */))
const _cb5ecb7a = () => interopDefault(import('..\\pages\\shariah.vue' /* webpackChunkName: "pages/shariah" */))
const _f39e97ea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6678d946,
    name: "about"
  }, {
    path: "/blogs",
    component: _1cd1ce6c,
    name: "blogs",
    children: [{
      path: ":uid?",
      component: _679d79db,
      name: "blogs-uid"
    }]
  }, {
    path: "/conditions",
    component: _3a9c184f,
    name: "conditions"
  }, {
    path: "/credit_scoring",
    component: _0c627dc0,
    name: "credit_scoring"
  }, {
    path: "/faq",
    component: _a9836ee2,
    name: "faq"
  }, {
    path: "/funds",
    component: _a0e2b8f2,
    name: "funds"
  }, {
    path: "/investor",
    component: _6e2ca9ef,
    name: "investor"
  }, {
    path: "/shariah",
    component: _cb5ecb7a,
    name: "shariah"
  }, {
    path: "/",
    component: _f39e97ea,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
