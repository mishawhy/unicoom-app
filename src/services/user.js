import axios from 'axios';

export async function getUser() {
  return axios.get(`${process.env.API_ENDPOINT}/api/user/get`);
}
