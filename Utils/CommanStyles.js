import {StyleSheet, I18nManager, Platform, Dimensions} from 'react-native';
import Colors from './Colors';
import Fonts from './CustomFont';
const {width:SCREEN_WIDTH ,height:SCREEN_HEIGHT} = Dimensions.get('screen')
const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';


// common styles which can be used anywhere
export const commonStyles = StyleSheet.create({


  toastStyle: {
    backgroundColor: Colors.black,
    paddingLeft: 15,
    paddingRight: 15,
  },
  toastTextStyle: {
    fontSize:15,
    fontFamily: Fonts.RobotoRegular,
    color: Colors.white,
  },
  errText:{
    fontSize:12,
    textAlign:"right",
    paddingRight:20,
    color:Colors.red
},
resultMessageText:{
    textAlign:"right",
    paddingRight:50,
    marginVertical:10,
    color:Colors.lightGrayVoilet,
    opacity:0.5
},
//=======================Title Text==========================================
titleTextContainer:{
  alignSelf:"center",
  width:'90%',
  marginTop:25,
 
},

titleText:{
  fontFamily:Fonts.RobotoBold,
  fontSize:26,
  color:Colors.darkGray,
},
decText:{
  fontFamily:Fonts.RobotoRegular,
  fontSize:14,
  lineHeight:19,
  color:Colors.darkGray,
  marginVertical:10,
},
changeText:{
  fontFamily:Fonts.RobotoMedium,
  fontSize:15,
  color:Colors.linkBlue,
},


// ====================SEARCH VIEW=============================================
iconStyle:{
  height:30,
  width:30,      
},
searchViewStyle:{
  marginVertical:10,
  height:50,
  borderRadius:5,
  flexDirection:'row',
  borderWidth:0.5,
  borderColor:Colors.darkGray,
  width:'90%',
  alignSelf:"center",
  alignItems:'center',  
  backgroundColor:Colors.white,
},
// ====================SEARCH VIEW=============================================
becomeSellerContainer:{
  marginVertical:10,
  height:70,
  borderRadius:8,
  flexDirection:'row', 
  width:'90%',
  alignSelf:"center",
  alignItems:'center',
  backgroundColor:Colors.voilet,
},


imageSliderStyle: {
  // opacity: 0.8,
  height: '100%',
  width: '100%',
  // backgroundColor:Colors.red,
  // borderRadius:10,
  // overflow: 'hidden',
  // alignSelf: 'center',
  // borderRadius:35,
  // overflow:"hidden"   

},

checkTExt:{
  
},
// =================ORDER STATUS STYLE=========================================

checkoutMainContainer: {
  height: 55,
  width: '100%',
  alignSelf: 'center',
  backgroundColor: Colors.white,
  justifyContent: 'center',
  alignItems: 'center',
},
subContainer: {
  flexDirection: 'row',
  height: 60,
  width: IS_IOS ? '95%' : '100%',    
  justifyContent: 'center',
  alignItems: 'center',
},
imageStyleCenter: {
  width: IS_IOS ? 15 : 18,
  height: IS_IOS ? 15 : 18, 
},
dashSelected: {
  fontSize: 15,
  color: Colors.orange,
},
dashNotSelected: {
  fontSize: 15,
  color: Colors.black,
},
// =================RADIO BUTTON STYLE=========================================
radioContainer: {
  height: 30,
  flexDirection:"row",
  width: '82%',   
  alignItems:"center",
  // alignSelf: 'center',
  marginVertical:20,
},
radioText:{
  paddingLeft: 7,
  fontSize: 15,
  fontFamily:Fonts.RobotoRegular,
  color: Colors.black
},
radioBtnTouch: {
  marginLeft: 30,
  fontFamily:Fonts.RobotoMedium,
  height: 30,
  alignItems:"center",  
  flexDirection: 'row', 
},
radioTitleTxt: {
  marginLeft: 5, 
  fontSize: 14, 
  color: Colors.black, 
  fontFamily: Fonts.RobotoMedium
},
// ======================TWO Drop dwon style==============================
twoRNPickerSelectStyle:{
  width: '100%', 
  backgroundColor:"red", 
  paddingLeft:11,
  fontFamily: Fonts.RobotoRegular,
  fontSize: 12,
  // marginLeft:10,
  color: Colors.darkblack,
},
twoPickerContainer: {  
  marginVertical:10,
  fontSize: 17,
  color: Colors.darkGray,
  fontFamily:Fonts.RobotoRegular,
  paddingLeft:15,
  width:SCREEN_WIDTH/2.3,
  borderWidth:1,
  borderColor:Colors.dimGray,
  height:60,
  borderRadius:10,
  backgroundColor:Colors.lightGray,
},
twoRowIconStyle: {
  height: 20,
  width: 20,
  top: 30,
  end:IS_ANDROID ? 25 : 15,       
},

// ======================Drop dwon style==============================
rnPickerSelectStyle: {   
  width: '100%',  
  paddingLeft:11,
  fontFamily: Fonts.RobotoRegular,
  fontSize: 12,
  color: Colors.darkblack,
},
pickerContainer: {  
  marginVertical:10,
  fontSize: 17,
  color: Colors.darkGray,
  fontFamily:Fonts.RobotoRegular,
  paddingLeft:15,
  width:SCREEN_WIDTH-40,
  borderWidth:1,
  borderColor:Colors.dimGray,
  height:60,
  borderRadius:8,
  backgroundColor:Colors.lightGray,  
},
rowIconStyle: {
  height: 18,
  width: 18,
  top: 30,
  end:IS_ANDROID ? 30 : 20,       
},

// ======================InputWithDropDown style==============================


inputWithDropDownPickerStyle: {   
  width: '30%',  
  paddingLeft:11,
  fontFamily: Fonts.RobotoRegular,
  fontSize: 12,
  color: Colors.darkblack,
},
inputPickerContainer: {  
  marginVertical:10,
  fontSize: 17,
  color: Colors.darkGray,
  fontFamily:Fonts.RobotoRegular,
  paddingLeft:15,
  width:SCREEN_WIDTH/3,
  borderWidth:1,
  borderColor:Colors.dimGray,
  height:60,
  borderRadius:8,
  backgroundColor:Colors.lightGray,  
},




// ===========User profile Image View=======================



containerViewProfile:{
  height:100,
  width:"100%",
  flexDirection:"row",
  backgroundColor:Colors.white,  
},
userImageContainer:{
  height:100,
  alignItems:"center",
  width:"20%",
  justifyContent:"center",   

  // backgroundColor:'red'
  },
  userImage:{
    borderWidth:1,
    borderColor:Colors.lightBlue,
    height:45,
    borderRadius:30,
    width:45
  },
  userNameText:{
    fontSize:17,
    fontFamily:Fonts.RobotoBold,        
    color:Colors.darkGray
  },
  userPhoneNumberText:{
    fontSize:14,
    marginVertical:5,
    fontFamily:Fonts.RobotoRegular,        
    color:Colors.smoothGray
  },
  userDetailContainer:{
    height:100,
    // alignItems:"center",
    width:"57%",
    justifyContent:"center",            
    // backgroundColor:'gray'
    },
    editProfileTextContainer:{
      height:100,
      alignItems:"center",
      width:"20%",
      justifyContent:"center",            
    },
    editText:{
      fontSize:15,
      marginHorizontal:5,
      fontFamily:Fonts.RobotoMedium,    
      color:Colors.darkGray
    },
    editTouchContainer:{
      borderWidth:1,
      borderColor:Colors.dimGray,
      flexDirection:'row',
      width:"90%",
      justifyContent:"center",
      alignItems:'center',
      borderRadius:20,
      height:35,
    },
    pencileImage:{
      height:15,
      width:15
    },

// =======================================
    titleTextStyle:{
      marginLeft:25,
      marginVertical:15,
      fontFamily:Fonts.RobotoBold,
      color:Colors.darkGray,
      fontSize:16
    },

//==============Categories style============================
categoryContainer:{
  paddingHorizontal:15,
  paddingVertical:IS_ANDROID ? 10 : 15,
  borderRadius:25,
  marginHorizontal:10
  },
//=================Bottom Tab Style==================================
tabBarItemStyle:{
  paddingVertical:5,   
},
selletinTabView:{
  height:50,
  width:50,
  justifyContent:"center",
  alignItems:"center",               
  borderRadius:30,
  bottom:15,
  backgroundColor:Colors.orange
},
homeIconStyle : {
  height: 18, 
  width: 18,
},
categoryIconStyle : {
  height: 16, 
  width: 16,
},
chatIconStyle : {
  height: 23, 
  width: 23,
},
profileIconStyle : {
  height: 23,
  top:4, 
  width: 23, 
},
// ===============Header Icon Style=============================
headerIconStyle :{
  height:20,
  width:20,  
},
//===================seller blue card

listCountText:{                         
  fontFamily:Fonts.RobotoRegular,
  color:Colors.white,
  fontSize:15,
},
countStyle:{                         
  fontFamily:Fonts.RobotoBold,
  color:Colors.white,
  fontSize:20,
},

bankTitleText:{
  marginVertical:2,
  color:Colors.darkGray,
  fontSize:16,
  fontFamily:Fonts.RobotoMedium
},
bankDecriptionText:{
  color:Colors.darkGray,
  fontSize:15,
  fontFamily:Fonts.RobotoRegular
},
// =============slider Txt=================================

countText:{
  fontFamily:Fonts.RobotoMedium,
  fontSize:15,
  color:Colors.darkGray
 },
// ----------------Address seller----------------------------
basicText:{
  marginLeft:25,
  marginVertical:15,
  color: Colors.darkGray,
  fontSize: 26,
  fontFamily: Fonts.RobotoBold,
}


});

