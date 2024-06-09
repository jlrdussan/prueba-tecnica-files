import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  //createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';
import { getCookie } from 'src/utils/cookies';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory:createWebHistory
    //: (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });


  Router.beforeEach(async (to) => {
  const publicPages = ['/','signUp'];
  const authRequired = !publicPages.includes(to.path);
  const auth = getCookie('accessToken');
  if (authRequired && !auth) {
      return '/';
  }
  if (!authRequired && auth) {
    return '/folder';
}
});

  return Router;
});
