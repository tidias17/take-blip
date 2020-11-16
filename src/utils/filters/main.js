import Vue from 'vue';
import * as moment from 'moment';

Vue.filter('formatDate', (value) => moment(value).format('DD/MM/YYYY'));
