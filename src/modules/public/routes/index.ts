const Module = () => import('../PublicModule.vue')
const HomePage = () => import('../views/PublicHomePage.vue')
const NotFoundPage = () => import('../views/PublicNotFoundPage.vue')

export const PUBLIC_ROUTES = {
  home: {
    path: '',
    name: 'Home',
  },
  notFound: {
    path: ':pathMatch(.*)*',
    name: 'NotFound',
  },
}

const publicRoutes = [
  {
    path: '/',
    component: Module,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        ...PUBLIC_ROUTES.home,
        component: HomePage,
      },
      {
        ...PUBLIC_ROUTES.notFound,
        component: NotFoundPage,
      },
    ],
  },
]

export default publicRoutes
