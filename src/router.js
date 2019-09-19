import Vue from 'vue';
import Router from 'vue-router';

/**
 * Layouts.
 */
import Main from '@/layouts/Main';
import Detail from '@/layouts/Detail';
import c404 from '@/layouts/404';

/**
 * Views.
 */
import Home from '@/views/Home';
import About from '@/views/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'sobre',
          component: About
        },
        {
          path: 'detail/:slug',
          name: 'detail',
          component: Detail
        },
        {
          path: '404',
          name: '404',
          component: c404
        },
      ]
    },
    {
      path: '*',
      redirect: '/404',
    }
  ]
});
