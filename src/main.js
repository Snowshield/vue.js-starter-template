import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Navigation from 'components/Navigation/navigation';

import routes from 'src/routes';
import 'src/style.scss';

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active'
});

router.map(routes);

const App = Vue.extend({
  components: { Navigation }
});

router.start(App, '#app');

export { router };
