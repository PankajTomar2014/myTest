import React from 'react';
import { View,Image,StyleSheet,Text,Animated, TouchableOpacity } from 'react-native';
import Images from "../Utils/Icons";
import Colors from "../Utils/Colors";
import Fonts from '../Utils/CustomFont';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default HidePassword = ( props) => {
      const {
            onPressEye,
            isHide,
            requireTimer,
            onCompleteTimer,
            requireText,
            onPressText,
            requireEye 
      } = props;
return(
<View style={{ 
      // height:40,width:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center'
      }}>    
      {requireEye &&       
      <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressEye}
            style={{
                  height:35,
                  width:35,                
                  justifyContent:"center",
                  alignItems:"flex-end",                 
            }}
      >
            <Image 
            resizeMode='contain'
            source={isHide ? Images.eyeClose : Images.eyeOpen}            
            style={styles.iconStyle}
      />      
      </TouchableOpacity>
      }

      {requireText&& 
      <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressText}
            style={{
                  height:30,
                  position:"absolute",                 
                  justifyContent:"center",
                  alignItems:"center",
                  paddingHorizontal:5,                 
                  right:-10,
            }}
            >
            <Text 
        
            style={{                  
                  fontFamily:Fonts.RobotoBlack,
                  fontSize:15,
                  color:Colors.darkOrange
            }}>{requireText}</Text>
      </TouchableOpacity>}

                  {requireTimer && 
                  <View style={{
                         alignSelf:"center",
                         position:"absolute",  
                         right:-10,
                  }}>
                     <CountdownCircleTimer
                        isPlaying
                        size={35}
                        duration={60}
                        strokeWidth={3}          
                        colors={[Colors.linkBlue]}
                        
                        trailColor={Colors.darkOrange}
                        onComplete={onCompleteTimer}>
                        {({remainingTime}) => (
                            <View style={{alignItems: 'center'}}>                 
                            <Animated.Text
                                style={{...styles.remainingTime, color: Colors.darkOrange}}>
                                {remainingTime}
                            </Animated.Text>                 
                            </View>
                        )}
                    </CountdownCircleTimer>              
            </View>}
        
    </View>
)
 
}

const styles = StyleSheet.create({
iconStyle:{
      height:25,
      width:25
},
remainingTime: {
      fontFamily:Fonts.RobotoMedium,
      fontSize: 12,
    },
})

    

