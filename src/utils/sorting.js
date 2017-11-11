import _ from 'lodash';

const Sorting = (repos, sorting, order) => {
  const orderBy = order ? 'desc' : 'asc';
  return _.orderBy(repos, sorting, orderBy)
};

export default Sorting;