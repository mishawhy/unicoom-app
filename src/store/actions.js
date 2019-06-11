/* ============
 * Actions for the general module
 * ============
 *
 */
import {
  SET_INITIAL_STATE,
  LOADING_TRUE,
  LOADING_FALSE,
  RESET_INITIAL_STATE,
} from './mutation-types';
import { getUser } from '@/services/user';

export default {
  async getUser({ commit, state }) {
    commit(LOADING_TRUE);
    getUser()
      .then(response => {
        console.log(response);
        sessionStorage.setItem('user', JSON.stringify(response.data));
        commit(SET_INITIAL_STATE, {
          key: 'user',
          value: response.data,
        });

        commit(LOADING_FALSE);
      })
      .catch(error => {
        commit(LOADING_FALSE);
      });
  },
  async logout({ commit, state }) {
    if (state.user !== null) {
      sessionStorage.removeItem('user');
      commit(RESET_INITIAL_STATE, {
        key: 'user',
      });
    }
  },
};
