import {types} from '../Action/UserAction';
const initialState = {
  userData: null,
};



export default function user(state = null, action) {
  switch (action.type) {
    case types.USER_SETUP:
      return {
        ...state,
        ...action.user,
      };      
    default:
      return state;
  }
}
