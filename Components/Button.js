
import React from 'react';
import { TouchableOpacity,View, Image, StyleSheet, Text, TextInput, } from 'react-native';
import Colors from '../Utils/Colors';
import Images from '../Utils/Icons'
import Fonts from '../Utils/CustomFont';
import { commonStyles } from '../Utils/CommanStyles';
import StarRating from 'react-native-star-rating';
import { ReviewRating } from './ReviewRating';
import { color } from 'react-native-reanimated';
import { IS_ANDROID, SCREEN_HEIGHT } from '../Utils/CommanFunctions';
export const CustomButton = (props) => {
  const { title, titleTextStyle, onPressBtn, containerStyle } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.buttonView, containerStyle]}
      onPress={onPressBtn}>
      <Text style={[styles.customBtnTextStyle,titleTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};


export const LogOutButton = (props)=>{
  const { onPress } = props;
  return(
    <TouchableOpacity 
    onPress={onPress}
    activeOpacity={0.8}
    style={{
      height:30,
      marginVertical:20,
      marginLeft:22,
      width:'50%',
      alignItems:"center",
      flexDirection:'row',
      // backgroundColor:'red'
    }}>
              <Image
                        style={{
                          height:28,
                          width:28
                        }}
                        resizeMode={'contain'}
                        source={Images.logout}
                      />

              <Text
                style={{
                  marginHorizontal:15,
                  fontSize:15,                 
                  fontFamily:Fonts.RobotoMedium,                 
                  color:Colors.orange
              }}
              
              >{'Logout'}</Text>      
    </TouchableOpacity>
  )
}

export const ImageButton = (props)=>{
  const {iconStyle, icon,onPress,containerStyle } = props
  return(
    <TouchableOpacity 
    onPress={onPress}
    activeOpacity={0.9}
    style={[{     
      justifyContent:"center",
      alignItems:'center',
      backgroundColor:Colors.white,     
      height:45,
      borderRadius:30,
      width:45
    },containerStyle]}>
        <Image
          resizeMode={'contain'}
          source={icon}
          style={[{height:25,width:25},iconStyle]}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({


    buttonView: {
      height: 50,
      width: '90%',
      borderRadius: 30,
      marginVertical:30,
      alignSelf: 'center', 
      backgroundColor: Colors.darkOrange,
      justifyContent: 'center',
      alignItems: 'center'
    },
 

    customBtnTextStyle:{ 
      fontSize: 17,
      color: Colors.white, 
      fontFamily: Fonts.RobotoBold 
    },
  
  })
  