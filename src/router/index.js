import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Board from '@/components/Board'
import ContentDetail from '@/components/ContentDetail'
import Create from '@/components/Create'
import Scheduler from '@/components/Scheduler'
import Opencv from '@/components/Opencv'
import DataAnalysis from '@/components/DataAnalysis'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
    {
      path: '/board/free/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      path: '/scheduler/free',
      name: 'Scheduler',
      component: Scheduler
    },
    {
      path: '/opencv/free',
      name: 'Opencv',
      component: Opencv
    },
    {
      path: '/dataAnalysis/free',
      name: 'DataAnalysis',
      component: DataAnalysis
    },
    {
      path: '/login/free',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup/free',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
