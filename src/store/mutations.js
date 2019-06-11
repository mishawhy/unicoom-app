/* ============
 * Mutations for the general state
 * ============
 *
 * The mutations that are available on the
 * general state.
 */

import {
  SET_INITIAL_STATE,
  LOADING_TRUE,
  LOADING_FALSE,
  RESET_INITIAL_STATE,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SET_INITIAL_STATE](state, { key, value = null }) {
    state[key] = value;
  },
  [RESET_INITIAL_STATE](state, { key }) {
    state[key] = null;
  },
  [LOADING_TRUE](state, payload) {
    state.loading = true;
  },
  [LOADING_FALSE](state, payload) {
    state.loading = false;
  },
};
