import React, { useRef,useEffect } from 'react';
import { SafeAreaView, } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-easy-toast';
import FastImage from 'react-native-fast-image';
import { position } from '../../Utils/CommanFunctions';
import { commonStyles } from '../../Utils/CommanStyles';


const Splash = (props) => {
  const toast = useRef(null);

    useEffect(() => {
      init();
    }, []);

    const init = async( )=>{
      setTimeout(async() => {
        const isLogin =  await AsyncStorage.getItem('logIn');
        console.log("isLogin======>",JSON.parse(isLogin));
        if(JSON.parse(isLogin)){
         AsyncStorage.removeItem('logIn');
         props.navigation.navigate('PostScreen');       
        }else{
          props.navigation.navigate('SignIn');
        };

    }, 1000);
    
  };



 

    return (
        <SafeAreaView style={styles.container}>
          <FastImage
            style={styles.splash}
            resizeMode={'contain'}
            source={{uri:"https://www.dmifinance.in/images/logo1.png"}}
          />

           <Toast
                    ref={toast}
                    position={position}
                    style={commonStyles.toastStyle}
                    textStyle={commonStyles.toastTextStyle}
                />            
        </SafeAreaView>              
    )
};

export default Splash;


