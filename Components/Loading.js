import React from 'react';
import { Modal,View, Image,Dimensions, StyleSheet, Text, ActivityIndicator, } from 'react-native';
import Colors from '../Utils/Colors';
import Fonts from '../Utils/CustomFont';
import Images from '../Utils/Icons';
import { BarIndicator } from 'react-native-indicators';

const {height,width } =    Dimensions.get('window');

export const Loader = (props) => {
  return (
    
        <Modal         
        transparent={true}>
            <View style={styles.container}>                
                <BarIndicator count={5} color={Colors.linkBlue} />
            
            </View>
            
        </Modal>
    
  );
};
export const TextLoader = (props) => {
    const { message } = props
    return (
      
          <Modal         
          transparent={true}
         
          >
              <View style={[styles.container,{flexDirection:"row"}]}>                 
                  <Text style={styles.loadingText}>
                      {message}
                  </Text>
                  <ActivityIndicator size={'large'} color={Colors.linkBlue}/>
              
              </View>
              
          </Modal>
      
    );
  };
export const ChatLoader = (props) => {
    return (
        <View style={{
            position:'absolute',
            zIndex:1000,
            alignSelf:'flex-end',
            top:10,
            right:5,
            height:20,
            width:20,
            justifyContent:"center",
            alignItems:"center"
        }}>                  
                 <ActivityIndicator size={'small'} color={Colors.darkOrange} />              
        </View>         
      
    );
  };

export const DataLoading = (props) => {
    return (
      
        <View style={{
            height:50,
            width:"100%",            
            justifyContent:"center",
            alignItems:"center"
        }}>                  
                 <ActivityIndicator size={'large'} color={Colors.darkOrange} />              
        </View>
      
    );
  };

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.modalLightBackground,
        },
    loaderStyle:{ 
        height: 50,
        width: 50,
    },
    loadingText:{ 
        // marginVertical:10,
        fontFamily:Fonts.RobotoBold,
        fontSize:18,
        color:Colors.black
    }
});