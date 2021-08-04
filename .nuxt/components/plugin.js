import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  PartialTermOfServicesIntroduction: () => import('../..\\components\\partial\\term_of_services\\introduction.vue' /* webpackChunkName: "components/partial-term-of-services-introduction" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm1: () => import('../..\\components\\partial\\term_of_services\\term_1.vue' /* webpackChunkName: "components/partial-term1" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm10: () => import('../..\\components\\partial\\term_of_services\\term_10.vue' /* webpackChunkName: "components/partial-term10" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm11: () => import('../..\\components\\partial\\term_of_services\\term_11.vue' /* webpackChunkName: "components/partial-term11" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm12: () => import('../..\\components\\partial\\term_of_services\\term_12.vue' /* webpackChunkName: "components/partial-term12" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm13: () => import('../..\\components\\partial\\term_of_services\\term_13.vue' /* webpackChunkName: "components/partial-term13" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm2: () => import('../..\\components\\partial\\term_of_services\\term_2.vue' /* webpackChunkName: "components/partial-term2" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm3: () => import('../..\\components\\partial\\term_of_services\\term_3.vue' /* webpackChunkName: "components/partial-term3" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm4: () => import('../..\\components\\partial\\term_of_services\\term_4.vue' /* webpackChunkName: "components/partial-term4" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm5: () => import('../..\\components\\partial\\term_of_services\\term_5.vue' /* webpackChunkName: "components/partial-term5" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm6: () => import('../..\\components\\partial\\term_of_services\\term_6.vue' /* webpackChunkName: "components/partial-term6" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm7: () => import('../..\\components\\partial\\term_of_services\\term_7.vue' /* webpackChunkName: "components/partial-term7" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm8: () => import('../..\\components\\partial\\term_of_services\\term_8.vue' /* webpackChunkName: "components/partial-term8" */).then(c => wrapFunctional(c.default || c)),
  PartialTerm9: () => import('../..\\components\\partial\\term_of_services\\term_9.vue' /* webpackChunkName: "components/partial-term9" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
