import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  // Persistência de dados em refresh navegador
  plugins: [createPersistedState()],
});
