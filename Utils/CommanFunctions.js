import {  Dimensions,  Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export const position = 'bottom';
export const IS_IOS = Platform.OS == 'ios';
export const IS_ANDROID = Platform.OS == 'android';
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const internetErrorMessage = "Please check internet connection"


export const checkInternetConnected = async()=> {
  const internetState = await NetInfo.fetch();
  return internetState.isConnected;
}
export const capitalizeEveryFirstLetter = (letter) => {
  try{
    const arr = letter.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
      const str2 = arr.join(" ");
      return str2;
  }catch(error){
    new Error(error.message);
  }
  
}
export const capitalizeOnlyFirstLetter = (letter) => {
  try{
    return letter.charAt(0).toUpperCase() + letter.slice(1)
  }
catch(error){
  console.log("capitalizeOnlyFirstLetter Error : ",error.message);
}
};

export const smallOnlyFirstLetter = (letter) => {
  return letter.charAt(0).toLowerCase() + letter.slice(1)
}

export const capitalizeAll = (letter) => {
  return letter?.toUpperCase();
}

export const smallLetterAll = (letter) => {
  return letter.toLowerCase();
};

export const timeOut = (promise) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('Server Connection Timeout Error!'));
    }, 20000);
    promise.then(resolve, reject);
  });
}

