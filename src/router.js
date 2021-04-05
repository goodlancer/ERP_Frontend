import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        {
          name: 'Mainboard',
          path: '',
          component: () => import('@/views/dashboard/Mainboard'),
        },
        {
          name: 'PandL',
          path: 'pandl',
          component: () => import('@/views/dashboard/PandL'),
        },
        {
          name: 'Orgenization',
          path: 'orgenization',
          component: () => import('@/views/dashboard/Orgenization'),
        },
        {
          name: 'Content',
          path: 'content',
          component: () => import('@/views/dashboard/Content'),
        },
        {
          name: 'Report',
          path: 'report',
          component: () => import('@/views/dashboard/Report'),
        },
        {
          name: 'Tutorial',
          path: 'tutorial',
          component: () => import('@/views/dashboard/Tutorial'),
        },
        {
          name: 'Message',
          path: 'message',
          component: () => import('@/views/dashboard/Message'),
        },
        // Dashboard
        {
          name: 'Dashboard',
          path: 'restboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
    {
      path: '/Auth',
      component: () => import('@/views/Login'),
    },
  ],
})
