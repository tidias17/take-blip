import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ptBr from './translate/pt_BR/main';
import enUs from './translate/en_US/main';

Vue.use(VueI18n);

const messages = {
  ptBr,
  enUs,
};
const i18n = new VueI18n({
  locale: 'ptBr',
  fallbackLocale: 'ptBr',
  messages,
});

export default i18n;
