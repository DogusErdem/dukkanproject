import React, { useState } from 'react';
import {SafeAreaView, Text, View, Image, Alert} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import style from './Login.style';
import {Formik} from 'formik';
import * as yup from 'yup';
import Config from 'react-native-config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import usePost from '../../hooks/usePost'
import Error from '../../components/Error';
import { useDispatch } from 'react-redux';

const Login = ({navigation}) => {

  const {data,error,loading,post}=usePost ();
  const dispatch = useDispatch();



  const handleLogin =(values) => {
    post(`${Config.API_AUTH_URL}`,values)
  }

  if(error){
    return <Error/>
  }
  if(data){
    if(data.status=== 'Error'){
      return alert('HATA')
    }
    else{
      dispatch({type:'SET_USER',payload:{user}}) 
    }
    console.log(data)
  }
  // const validationSchema = yup.object().shape({
  //   username : yup.string()
  //   .min(4,'Too Short!')
  //   .max(9,"Too Long!")
  //   .required('Required'),
  //   password: yup.string()
  //   .min(4,'Too Short!')
  //   .max(9,"Too Long!")
  //   .required('Required'),
  // })
  
    return (
    <SafeAreaView style={style.container}>
      <View >
        <Image
          style={style.logo}
          source={require('../../assets/shopping.png')}
        />
      </View>
      <Formik
        initialValues={{username:'',password:''}}
        onSubmit={handleLogin}
       // validationSchema={validationSchema}
      >
        { ({handleSubmit,handleChange,values,errors}) => (
      <View style={style.body_container}>
        <Input 
        placeholder="Kullanıcı adını giriniz." 
        value={values.username} 
        onType={handleChange('username')}  
        iconName={'account'}
        />
        {errors ? <Text style={style.error_text}>{errors.username}</Text> : null}
        <Input 
        placeholder="Şifrenizi giriniz." 
        value={values.password}
        onType={handleChange('password')}
        iconName={'key'}
        isSecure
        
        />
        {errors ? <Text style={style.error_text}>{errors.username}</Text> : null}

        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
      </View>
      )}
      </Formik>
    </SafeAreaView>
  );
};
export default Login;

const user =  [
  {
      id:1,
      email:'John@gmail.com',
      username:'johnd',
      password:'m38rmF$',
      name:{
          firstname:'John',
          lastname:'Doe'
      },
      address:{
          city:'kilcoole',
          street:'7835 new road',
          number:3,
          zipcode:'12926-3874',
          geolocation:{
              lat:'-37.3159',
              long:'81.1496'
          }
      },
      phone:'1-570-236-7033'
  },
  /*...*/
  {
      id:20,
      email:'...',
      username:'...',
      password:'...',
      name:{
          firstname:'...',
          lastname:'...'
      },
      address:{
          city:'...',
          street:'...',
          number:'',
          zipcode:'...',
          geolocation:{
              lat:'...',
              long:'...'
          }
      },
      phone:'...'
  }
]