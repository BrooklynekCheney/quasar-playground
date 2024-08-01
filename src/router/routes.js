const routes = [
  {
    path: '/rampage',
    component: () => import('layouts/RampageLayout.vue'),
    children: [
      {
        path: '',
        name: 'rampage',
        component: () => import('pages/RampagePage.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage/IndexPage.vue')
      },
      {
        path: 'friends',
        name: 'friends',
        component: () => import('pages/FriendsPage.vue')
      },
      {
        path: 'scan',
        name: 'scan',
        component: () => import('pages/ScanPage/ScanPage.vue')
      },
      {
        path: 'geolocation',
        name: 'geolocation',
        component: () => import('pages/GeolocationPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
