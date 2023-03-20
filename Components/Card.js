import React from 'react';
import {
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import Colors from '../Utils/Colors';
import Images from '../Utils/Icons';
import {commonStyles} from '../Utils/CommanStyles';
import {CustomButton, EditButton, IconButton, IconTextButton, ImageButton, ImageButtonTextBottom, LogOutButton, RemoveWishlistButton, WishlistButton} from './Button';
import Swiper from 'react-native-swiper';
import Fonts from '../Utils/CustomFont';
import Swipeable from 'react-native-swipeable';
import { capitalizeAll, capitalizeEveryFirstLetter, capitalizeOnlyFirstLetter, cutTextLengthFirstLetterCapital, IS_ANDROID, IS_IOS, openUrlOnBrowser, priceWithSymbol, removeHtlm } from '../Utils/CommanFunctions';
import FastImage from 'react-native-fast-image';
import moment from 'moment'
import { ReviewRating } from './ReviewRating';
import { ChatLoader, Loader } from './Loading';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');





export const EmptyMessage = (props) => {
  const { message,styles } = props;
  return (
      <View style={[{                 
              // height:SCREEN_HEIGHT-280 ,
              height:SCREEN_HEIGHT-150 , 
              justifyContent: "center",
              alignItems: 'center' 
          },styles]}>              
          <Text
              style={{
                  fontSize: 23,
                  alignSelf: 'center',
                  fontFamily: Fonts.RobotoBold,
                  color: Colors.darkGray,
              }}>
              {message}
          </Text>
      </View>
  )
};

export const SeperetorLine = props => {
  const {lineStyles} = props;
  return (
    <View
      style={[{height: 0.5, backgroundColor: Colors.dimGray}, lineStyles]}
    />
  );
};

export const Postcard = (props)=>{
  const {
    title,
    body,
    username

  } = props
  return(
    <View style={{
      backgroundColor:"lightgray",
      padding:20,
      marginVertical:5,
      }}>
        
          <Text style={{
              fontSize:20
          }}>{'Title'} : {title}</Text>
           <Text>{'Username'} :{username} </Text>
          <Text>{'Body'} : {body}</Text>
         
    </View>
  )
}





