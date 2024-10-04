// routes.js
import Home from '../pages/home/index.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    name: 'Home',
    path: '/home',
    component: Home,
  },
];

export default routes;
