import * as types from '../constants'

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action){
  console.log(action);
  switch (action.type){
    case types.SUCCESS_FETCH:
      return {
        ...state,
        ...action
      };
    default:
      return state
  }}
