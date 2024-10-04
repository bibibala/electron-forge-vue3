import routes from './routes';
import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
