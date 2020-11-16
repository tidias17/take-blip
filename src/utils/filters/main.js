import Vue from 'vue';
import * as moment from 'moment';

Vue.filter('formatDate', (value) => moment(value).format('DD/MM/YYYY'));

Vue.filter('formatNumber', (number, options = { locale: 'pt-BR', currency: 'BRL' }) => new Intl.NumberFormat(options.locale, { style: 'decimal', currency: options.currency }).format(number));
