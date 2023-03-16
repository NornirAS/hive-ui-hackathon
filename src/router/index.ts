import Session from 'supertokens-web-js/recipe/session'
import { createRouter, createWebHistory } from 'vue-router'
import routes, { ROUTES } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  // https://router.vuejs.org/guide/advanced/meta.html
  if (to.meta.requiresAuth && !(await Session.doesSessionExist())) {
    return { name: ROUTES.authModule.auth.name }
  }
  if (to.name === 'Auth' && (await Session.doesSessionExist())) {
    return { name: ROUTES.domainModule.domainList.name }
  }
})

export default router
