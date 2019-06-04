import * as ROUTE from '@/constant/routes';

export default [
  {
    path: ROUTE.MAIN_PATH,
    component: () => import('@/screens/Main.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: ROUTE.ENTER_PATH,
    component: () => import('@/screens/Enter.vue'),
  },
  {
    path: ROUTE.START_PATH,
    component: () => import('@/screens/Start.vue'),
    meta: {
      auth: true,
    },
    props: true,
  },
  {
    path: ROUTE.CENTER_PATH,
    component: () => import('@/screens/MainCenter.vue'),
    meta: {
      auth: true,
    },
    props: true,
  },
];
