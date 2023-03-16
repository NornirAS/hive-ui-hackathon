import StackedLayout from '@/layouts/StackedLayout.vue'
const Module = () => import('../DomainModule.vue')
const DomainList = () => import('../views/DomainListPage.vue')
const DomainDetails = () => import('../views/DomainDetailsPage.vue')
const DomainCreate = () => import('../views/DomainCreatePage.vue')

export const DOMAIN_ROUTES = {
  domainList: {
    path: '',
    name: 'DomainList',
  },
  domainDetails: {
    path: ':slug/details',
    name: 'DomainDetails',
  },
  domainCreate: {
    path: 'create',
    name: 'DomainCreate',
  },
}

const domainRoutes = [
  {
    path: '/domains',
    component: Module,
    meta: {
      layout: StackedLayout,
      requiresAuth: true,
    },
    children: [
      {
        ...DOMAIN_ROUTES.domainList,
        component: DomainList,
      },
      {
        ...DOMAIN_ROUTES.domainDetails,
        component: DomainDetails,
        props: true,
      },
      {
        ...DOMAIN_ROUTES.domainCreate,
        component: DomainCreate,
      },
    ],
  },
]

export default domainRoutes
