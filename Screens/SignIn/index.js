import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {CustomButton} from '../../Components/Button';
import {CustomTextInput} from '../../Components/Input';
import Colors from '../../Utils/Colors';
import Toast from 'react-native-easy-toast';
import {validateEmail} from '../../Utils/Validation';

import {IS_IOS, position} from '../../Utils/CommanFunctions';
import {Loader} from '../../Components/Loading';
import {connect} from 'react-redux';
import {userLogin} from '../../Redux/Action/UserAction';
import {styles} from './styles';
import {commonStyles} from '../../Utils/CommanStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = props => {
  const toast = useRef(null);

  const [isLoading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [enableByEmail, setEnableByEmail] = useState(false);

  const [password, setPassword] = useState('123456');
  const [email, setEmail] = useState('pankaj.tomar@yopmail.com');

  const [emailError, setEmailError] = useState('');
  const [errorEmailStatus, setErrorEmailStatus] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [errorPasswordStatus, setErrorPasswordStatus] = useState(true);

  const validateEmailFun = email => {
    setEmail(email);
  };

  const validatePasswordFun = password => {
    setPassword(password);
    if (password.length == 0) {
      setErrorPasswordStatus(false);
    } else if (password.length < 6) {
      setErrorPasswordStatus(false);
    } else {
      setErrorPasswordStatus(true);
      setPasswordError('');
    }
  };

  const onContinue = async () => {
    if (email == '' || errorEmailStatus == false) {
      setEmailError('Please enter email');
      toast.current.show('Please enter email', 1000, () => {});
    } else if (
      validateEmail(email).error != '' &&
      !validateEmail(email).status
    ) {
      setEmailError(validateEmail(email).error);
      toast.current.show(validateEmail(email).error, 1000, () => {});
    } else if (password == '') {
      setEmailError('');
      setPasswordError('Please enter password');
      toast.current.show('Please enter password', 1000, () => {});
    } else if (password.length < 6) {
      setEmailError('');
      setPasswordError('Enter at least 8 char password');
      toast.current.show('Enter at least 8 char password', 1000, () => {});
    } else {
      setEmailError('');
      setPasswordError('');
      logInAction();
      
    }
  };



  const logInAction = async( )=>{
    await AsyncStorage.setItem('logIn',JSON.stringify(true));
    props.navigation.navigate('PostScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={IS_IOS ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={[
            styles.container,
            {justifyContent: 'center'},
          ]}>        
            {emailError != '' ? (
              <Text style={commonStyles.errText}>{emailError}</Text>
            ) : null}
            <CustomTextInput
              label={'Email'}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              isFilled={email.length > 0 ? true : false}
              defaultValue={email}
              onChangeText={text => validateEmailFun(text)}
            />
         

          {passwordError != '' ? (
            <Text style={commonStyles.errText}>{passwordError}</Text>
          ) : null}
          <CustomTextInput
            isHide={hidePassword}
            defaultValue={password}
            requireEye
            label={'Password'}
            backgroundColor={
              password.length > 0 ? Colors.lessLightBlue : Colors.lightGray
            }
            borderColor={
              password.length > 0 ? Colors.lightBlue : Colors.lineGray
            }
            secureTextEntry={hidePassword}
            isFilled={password ? true : false}
            onPressEye={() => setHidePassword(!hidePassword)}
            onChangeText={text => validatePasswordFun(text)}
            returnKeyType="done"
            onSubmitEditing={() => onContinue()}
          />
          <CustomButton onPressBtn={() => onContinue()} title={'Continue'} />
        </ScrollView>
      </KeyboardAvoidingView>

      {isLoading ? <Loader /> : null}
      <Toast
        ref={toast}
        position={position}
        style={commonStyles.toastStyle}
        textStyle={commonStyles.toastTextStyle}
      />
    </SafeAreaView>
  );
};
export default connect(({user}) => ({user}), {
  userLogin,
})(SignIn);
