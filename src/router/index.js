import Vue from 'vue'
import Router from 'vue-router'

import Tag from '@/components/Tag'
import Article from '@/components/Article'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    },
    {
      path: '/tag',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
  ],
  mode: 'history'
})
