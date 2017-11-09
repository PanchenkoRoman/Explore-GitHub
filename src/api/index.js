import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export const getData = action => axios.get(`${ROOT_URL}/${action.owner}`)
  .then(response => response.data);

export const getRepos = action => axios.get(`${ROOT_URL}/${action.owner}/repos`)
  .then(response => response.data);