import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setUserAPI } from '../../Services/ApiRequest';

export const types = {
  USER_LOGIN: 'USER/LOGIN',
  USER_SETUP: 'USER/SETUP',
  USER_UPDATE: 'USER/UPDATE',
  ASSIGNED_USER_ROLE: 'ASSIGNED_USER_ROLE',    
  CHECK_USER_ROLE: 'CHECK_USER_ROLE',
};

export const userUpdate = updatedUser => (dispatch, getState) => {
  const user = getState().user;
  dispatch(
    userLogin({
      ...user,
      ...updatedUser,
    }),
  );
};

export const userLogin = user => dispatch => {
  return AsyncStorage.setItem('User', JSON.stringify(user)).then(() => {
    dispatch(setupUser(user));
  });
};

export const setupUser = user => async dispatch => {
 
  if (user) {
   
    setUserAPI(user);
    return dispatch({
      type: types.USER_SETUP,
      user,
    });
  } else {
   
    return AsyncStorage.getItem('User').then(user => {
      if (user) {
        user = JSON.parse(user);
        setUserAPI(user);
        dispatch({
          type: types.USER_SETUP,
          user,
        });
      }
    });
  }
};

export const userLogout = param => async dispatch => {
      AsyncStorage.removeItem('PushToken');
      await AsyncStorage.removeItem('User');
      dispatch(setupUser({}));
      dispatch({type: 'RESET'});  
};
