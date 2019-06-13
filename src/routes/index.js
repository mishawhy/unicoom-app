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
    path: ROUTE.SAY_PATH,
    component: () => import('@/screens/Say.vue'),
    meta: {
      auth: true,
    },
    props: true,
  },
];
