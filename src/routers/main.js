import Vue from 'vue';
import VueRouter from 'vue-router';

const lazy = (name) => () => Promise.resolve(Vue.component(name));

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      redirect: '/listing',
    },
    {
      path: '/listing',
      name: 'linting',
      component: lazy('listing-view'),
      props: true,
      meta: {
        title: 'Listing | Take Blip - Contatos Inteligentes',
      },
    },
    {
      path: '/profile/',
      name: 'profile',
      component: lazy('profile-view'),
      props: true,
      meta: {
        title: 'Profile | Take Blip - Contatos Inteligentes',
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
