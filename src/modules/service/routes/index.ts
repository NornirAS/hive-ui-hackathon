import StackedLayout from '@/layouts/StackedLayout.vue'
const Module = () => import('../ServiceModule.vue')
const ServiceList = () => import('../views/ServiceListPage.vue')
const ServiceDetails = () => import('../views/ServiceDetailsPage.vue')
const ServiceCreate = () => import('../views/ServiceCreatePage.vue')
const ServiceEdit = () => import('../views/ServiceEditPage.vue')

export const SERVICE_ROUTES = {
  serviceList: {
    path: '',
    name: 'ServiceList',
  },
  serviceDetails: {
    path: ':service/details',
    name: 'ServiceDetails',
  },
  serviceEdit: {
    path: ':service/edit',
    name: 'ServiceEdit',
  },
  serviceCreate: {
    path: 'create',
    name: 'ServiceCreate',
  },
}

const serviceRoutes = [
  {
    path: '/services',
    component: Module,
    meta: {
      layout: StackedLayout,
      requiresAuth: true,
    },
    children: [
      {
        ...SERVICE_ROUTES.serviceList,
        component: ServiceList,
      },
      {
        ...SERVICE_ROUTES.serviceDetails,
        component: ServiceDetails,
      },
      {
        ...SERVICE_ROUTES.serviceEdit,
        component: ServiceEdit,
      },
      {
        ...SERVICE_ROUTES.serviceCreate,
        component: ServiceCreate,
      },
    ],
  },
]

export default serviceRoutes
