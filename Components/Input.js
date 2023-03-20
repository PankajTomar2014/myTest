import React from 'react';
import { Text,View,TextInput,StyleSheet,Image ,TouchableOpacity, Dimensions, Platform, KeyboardAvoidingView, Keyboard} from 'react-native';
import Colors from '../Utils/Colors';
import HidePassword from './HidePassword';
// import { commonStyles } from '../Utils/CommanStyles';
// import Fonts from '../Utils/CustomFont';
// import Images from '../Utils/Icons';
// import { CustomButton, ImageButton } from './Button';
// import { IS_IOS } from '../Utils/CommanFunctions';
// import RNPickerSelect from "react-native-picker-select";
// import { commonStyles } from '../Utils/CommanStyles';
// import { deliveryTypeArry } from '../Utils/StaticData';

const {width : SCREEN_WIDTH,height:SCREEN_HEIGHT} = Dimensions.get('screen');



export const CustomTextInput = (props) => {
    const {requireEye,isHide,onPressEye } = props
 
    return(
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputStyle}
                {...props}            
            />
            <HidePassword
                isHide={isHide}
                onPressEye={onPressEye}
                requireEye={requireEye}
            />
        </View>
    )
};












const styles = StyleSheet.create({
    inputContainer:{
        marginVertical:10,
        flexDirection:'row',
        borderRadius:15,
        height:55,
        alignItems:'center',
        width:"85%",
        justifyContent:'center',
        borderWidth:1,
        borderColor:Colors.lightBlue,
        alignSelf:'center',
        backgroundColor:Colors.lessLightBlue
    },
    inputStyle:{
        paddingHorizontal:10,
        height:55,
        fontSize:15,
        color:Colors.black,
        // backgroundColor:Colors.white,
        width:"85%",
    }
})