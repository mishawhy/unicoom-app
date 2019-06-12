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
import { getUser, logout } from '@/services/user';
import { getFeed } from '@/services/feed';

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
  async getFeed({ commit, state }) {
    commit(LOADING_TRUE);
    getFeed()
      .then(response => {
        console.log(response);

        commit(SET_INITIAL_STATE, {
          key: 'feed',
          value: response,
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
      try {
        await logout();
        commit(RESET_INITIAL_STATE, {
          key: 'user',
        });
      } catch (e) {
        commit(RESET_INITIAL_STATE, {
          key: 'user',
        });
      }
    }
  },
};
