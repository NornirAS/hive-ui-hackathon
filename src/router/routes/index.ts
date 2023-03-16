import authRoutes, { AUTH_ROUTES } from '@/modules/auth/routes'
import domainRoutes, { DOMAIN_ROUTES } from '@/modules/domain/routes'
import serviceRoutes, { SERVICE_ROUTES } from '@/modules/service/routes'
import ghostRoutes, { GHOST_ROUTES } from '@/modules/ghost/routes'
import publicRoutes, { PUBLIC_ROUTES } from '@/modules/public/routes'

const routes = [
  ...authRoutes,
  ...domainRoutes,
  ...serviceRoutes,
  ...ghostRoutes,
  ...publicRoutes,
]

export default routes

export const ROUTES = {
  publicModule: PUBLIC_ROUTES,
  authModule: AUTH_ROUTES,
  domainModule: DOMAIN_ROUTES,
  serviceModule: SERVICE_ROUTES,
  ghostModule: GHOST_ROUTES,
}
