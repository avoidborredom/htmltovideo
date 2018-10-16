import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Overall from '../views/Overall';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/overall',
      name: 'Overall',
      component: Overall,
    },
  ],
});
