

export const type = {
    GET_POST:'GET_POST',
   };


export const postAction = (payload = {}) => async(dispatch) => {
    dispatch({type: type.GET_POST, payload: payload});
};