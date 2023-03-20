import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/Splash';
import SignIn from '../Screens/SignIn';
import PostScreen from '../Screens/PostScreen';

const RootStack = createNativeStackNavigator();

function MainStack(props) {
    return (
      <RootStack.Navigator initialRouteName={'Splash'}
      screenOptions={{    
        animation: "slide_from_right",    
        headerShown: false
        }}      
      >
        <RootStack.Screen name="Splash" component={SplashScreen}/>
        <RootStack.Screen name="SignIn" component={SignIn} />        
        <RootStack.Screen name="PostScreen" component={PostScreen} />     
              
      </RootStack.Navigator>
    )
}
export default MainStack;