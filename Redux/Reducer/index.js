import {combineReducers} from 'redux';
import { postReducer } from './postReducer';
import UserReducer from './UserReducer';

const appReducer = combineReducers({
  user: UserReducer, 
  post:postReducer

});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;