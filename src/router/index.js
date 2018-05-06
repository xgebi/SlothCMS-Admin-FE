import Vue from 'vue'
import Router from 'vue-router'

import FirstRunChecker from '@/components/FirstRunChecker'
import InitWizard from '@/components/InitWizard/InitWizard'
import LoginScreen from '@/components/LoginScreen'
import Dashboard from '@/components/Dashboard/Dashboard'
import Settings from '@/components/Dashboard/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstRunChecker',
      component: FirstRunChecker
    },
    {
      path: '/init-wizard/',
      name: 'InitWizard',
      component: InitWizard,
      props: true
    },
    {
      path: '/login-screen/',
      name: 'LoginScreen',
      component: LoginScreen
    },
    {
      path: '/dashboard/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/settings/',
      name: 'Settings',
      component: Settings
    }
  ]
})
