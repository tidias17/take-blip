import Vue from 'vue';
import NotificationComponent from '../components/notification.vue';

export default class Notifications {
  static open(messageDisplay, type) {
    const ComponentClass = Vue.extend(NotificationComponent);
    const instance = new ComponentClass({
      propsData: {
        message: messageDisplay,
        styleNotification: type,
      },
    });
    instance.$mount();
    const parent = document.querySelector('body');
    parent.appendChild(instance.$el);
  }

  static close() {
    const notification = document.querySelector('.global-notification');
    notification.remove();
  }
}
