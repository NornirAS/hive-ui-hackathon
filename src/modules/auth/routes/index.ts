const AuthModule = () => import('../AuthModule.vue')
const AuthPasswordlessPage = () => import('../views/AuthPasswordlessPage.vue')
const AuthPasswordlessVerifyPage = () =>
  import('../views/AuthPasswordlessVerifyPage.vue')
import AppConfig from '@/config'

export const AUTH_ROUTES = {
  auth: {
    path: '',
    name: 'Auth',
  },
  verify: {
    path: 'verify',
  },
}

const authRoutes = [
  {
    path: AppConfig.authAppBasePath,
    component: AuthModule,
    meta: {
      requiresAuth: false,
    },
    children: [
      { ...AUTH_ROUTES.auth, component: AuthPasswordlessPage },
      { ...AUTH_ROUTES.verify, component: AuthPasswordlessVerifyPage },
    ],
  },
]

export default authRoutes
