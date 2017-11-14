import _ from 'lodash';

const Filtering = (repos, filterBy, type) => {
  if(type === 'language'){
    return _.filter(repos, {'language': filterBy})
  }

  if(filterBy === 'open_issues'){
    return _.filter(repos, (item) =>  item.open_issues > 0)
  }

  return _.filter(repos, [filterBy, true])
};

export default Filtering;