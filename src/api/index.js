import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export const getData = action => axios.get(`${ROOT_URL}/${action}`)
  .then(response => response.data);