
const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action){
  console.log(action);
  switch (action.type){
    case 'SUCCESS_FETCH':
      return {
        ...state,
        ...action
      };
    default:
      return state
  }}
