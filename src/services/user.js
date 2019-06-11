import axios from 'axios';

export async function getUser() {
  return axios.get(`${process.env.VUE_APP_ENDPOINT}/api/user/get`);
}
