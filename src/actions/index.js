export const getDataRepos = (owner) =>({
  type: 'GET_DATA_REPOS',
  owner
});

export const succesSfulFetch = (user, repos) =>({
  type: 'SUCCESS_FETCH',
  user,
  repos
});