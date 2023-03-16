import StackedLayout from '@/layouts/StackedLayout.vue'
const Module = () => import('../GhostModule.vue')
const GhostList = () => import('../views/GhostListPage.vue')
const GhostDetails = () => import('../views/GhostDetailsPage.vue')

export const GHOST_ROUTES = {
  ghostList: {
    path: '',
    name: 'GhostList',
  },
  ghostDetails: {
    path: ':domain/:service/:ghostID/details',
    name: 'GhostDetails',
  },
}

const ghostRoutes = [
  {
    path: '/ghosts',
    component: Module,
    meta: {
      layout: StackedLayout,
      requiresAuth: true,
    },
    children: [
      {
        ...GHOST_ROUTES.ghostList,
        component: GhostList,
      },
      {
        ...GHOST_ROUTES.ghostDetails,
        component: GhostDetails,
      },
    ],
  },
]

export default ghostRoutes
