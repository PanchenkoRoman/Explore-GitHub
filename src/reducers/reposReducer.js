
const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action){
  switch (action.type){
    case 'GET_DATA_REPOS':
      return { ...state, ...action.owner};
    default:
      return state
  }}
