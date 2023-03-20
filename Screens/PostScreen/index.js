import React, {useState,useRef} from 'react';
import {ScrollView,SafeAreaView,FlatList,} from 'react-native';
import { AppHeader } from '../../Components/Hearders';
import { EmptyMessage, Postcard } from '../../Components/Card'
import { 
  checkInternetConnected, 
  internetErrorMessage, 
  position, 
} from '../../Utils/CommanFunctions';
import { postAction } from '../../Redux/Action/postActions'
import Toast from 'react-native-easy-toast';
import { Loader } from '../../Components/Loading';
import { commonStyles } from '../../Utils/CommanStyles';
import { connect } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostScreen = (props) => {
  console.log("000000000-------->",props)
  const toast = useRef(null);
  const [isLoading, setLoading] = useState(false);
  const [isLogin,setIsLogin] = useState(false);
  const [postlist, setPostlist] = useState([]);


useFocusEffect(
  React.useCallback(async() => {
    const isConnected = await checkInternetConnected();
    if(isConnected){
      initData();
    }else{
      toast.current.show(internetErrorMessage, 2000, () => {});
    };
  }, []),
);

  const initData = async()=>{
    const isConnected = await checkInternetConnected();             
    if(isConnected){
        checkUserLogin();


        fetchPostAPI();
    }else{
      toast.current.show(internetErrorMessage, 3000, () => {});
    }
  };

  const checkUserLogin = async( )=>{
    const isLogin =  await AsyncStorage.getItem('logIn');
    const parseData = JSON.parse(isLogin);
    setIsLogin(parseData);
  }



  const fetchPostAPI =async( )=>{
    try{ 
     setLoading(true);

     const api = "https://jsonplaceholder.typicode.com/posts";

     axios.get(api).then((response) => {
      console.log("reponse---------",response);
      if(response.status == 200){
        const data = response.data;
        props.postAction(data);
        setLoading(false);
        setPostlist(data);
      }else{
        setLoading(false);
        toast.current.show("API error : try again", 1000, () => {});
      }
     
    }, (error) => {
      console.log(error);
    });     
   }
   catch (error){
     setLoading(false);
   
     toast.current.show(error.message, 3000, () => {});
    }
 
   }



  const renderPostList = (item,index)=>{
   return(
        <Postcard
            title={item.title}
            body={item.body}
            username={"Pankaj Tomar"}
        />
   )
  };


  const logOutUser = async(type)=>{   
    if(type =="logout"){
      if(isLogin){
       AsyncStorage.removeItem('logIn');
       props.navigation.goBack();          
      }else{
        props.navigation.goBack();  
       }
    }else{
      if(isLogin){
        alert("Please logout first");              
       }else{
        props.navigation.goBack();  
       }
    }
   

    

   }

  return (
    <SafeAreaView
    style={styles.container}>

      <AppHeader
        headerTitle={'Post'}   
        onPressLogout={()=>logOutUser("logout")}
        onPressMenu={()=>  logOutUser("back")}
        backIcon={isLogin}
        isNeedTitle
      />
     
      <ScrollView showsVerticalScrollIndicator={false}>
     
        <FlatList
                data={postlist}               
                scrollEnabled={false}    
                showsVerticalScrollIndicator={false}
                renderItem={({item,index})=>renderPostList(item,index)}
                ListEmptyComponent={()=>isLoading? null : <EmptyMessage message={'No post added'}/>}
            />   
      </ScrollView>



     
    


     {isLoading ? <Loader/> : null}
                <Toast
                    ref={toast}
                    position={position}
                    style={commonStyles.toastStyle}
                    textStyle={commonStyles.toastTextStyle}
                />
 


  
  </SafeAreaView>
  );
};

export default connect((post)=>(post), {postAction })(PostScreen);
