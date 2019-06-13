import * as ROUTE from '@/constant/routes';

export default [
  {
    path: ROUTE.SELECT_PATH,
    component: () => import('@/screens/Select.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: ROUTE.MEET_PATH,
    component: () => import('@/screens/Meet.vue'),
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
