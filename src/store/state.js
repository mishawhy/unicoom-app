/* ============
 * State of the general state
 * ============
 *
 * The initial state of the general state
 */

export default {
  notifications: [],
  feed: [],
  loading: false,
  user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
};
