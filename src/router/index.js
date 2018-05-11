import Vue from 'vue'
import Router from 'vue-router'

import FirstRunChecker from '@/components/FirstRunChecker'
import InitWizard from '@/components/InitWizard/InitWizard'
import LoginScreen from '@/components/LoginScreen'
import Dashboard from '@/components/Dashboard/Dashboard'
import Settings from '@/components/Dashboard/Settings'
import PostEditor from '@/components/Dashboard/PostManagement/PostEditor'
import PostList from '@/components/Dashboard/PostManagement/PostList'

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
    },
    { 
      path: '/dashboard/post/list/:type', 
      name: 'PostList',
      component: PostList
    },
    { 
      path: '/dashboard/post/edit/:type', 
      name: 'EditPost',
      component: PostEditor
    },
    { 
      path: '/dashboard/post/new/:type', 
      name: 'AddPost',
      component: PostEditor
    }
  ]
})
