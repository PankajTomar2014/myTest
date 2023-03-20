import {type} from '../Action/postActions';

const initialState = {
    postList:[],   
};

export const postReducer = (state = initialState, action)=> {
    switch (action.type) {
        case type.GET_POST:
          return {...state, postList: action.payload};
        default:
          return state;
      }
};