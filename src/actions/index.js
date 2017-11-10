import * as types from '../constants'

export const getDataRepos = (owner) =>({
  type: types.GET_DATA_REPOS,
  owner
});

export const successfulFetch = (user, repos) =>({
  type: types.SUCCESS_FETCH,
  user,
  repos
});