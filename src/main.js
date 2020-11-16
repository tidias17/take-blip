import Vue from 'vue';
import VueRouter from 'vue-router';
import { Vuelidate } from 'vuelidate';
import VueTheMask from 'vue-the-mask';
import * as moment from 'moment';
import App from './App.vue';

import router from './routers/main';
import store from './store/main';
import i18n from './i18n/main';
import services from './services/main';
import Class from './utils/class/main';
import './utils/filters/main';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueTheMask);

// Load all Components
const requireComponents = require.context('./', true, /.vue$/);
requireComponents.keys().forEach((fileName) => {
  const component = requireComponents(fileName);
  const componentName = component.default.name;
  Vue.component(componentName, component.default || component);
});

const EventBus = new Vue();

Vue.prototype.$moment = moment;
Vue.prototype.$Services = services;
Vue.prototype.$Class = Class;
Vue.prototype.$bus = EventBus;

let app = '';
if (!app) {
  app = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
  }).$mount('#appWeb');
}
