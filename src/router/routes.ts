import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/folder',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/profile', component: () => import('pages/ProfilePage.vue') },
      { path: '', component: () => import('pages/FolderPage.vue') },
      
    ],
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      { path: '/signUp', component: () => import('pages/SignUpPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
