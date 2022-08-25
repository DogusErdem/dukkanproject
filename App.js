import React,{useState,useEffect} from 'react';
import {View ,Text, Button} from 'react-native';
import Router from './src/Router';
import { legacy_createStore as CreateStore } from 'redux';
import { Provider,useSelector,useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Primary from './src/pages/Primary/Primary';
import Secondary from './src/pages/Secondary/Secondary';
import UserProvider from './src/context/ExampleProvider/Provider'
import Wrapper from './src/Wrapper';
const Tab = createBottomTabNavigator();

export default function App () {

  return(
    <Wrapper/>
  );
}




// return(
//   <UserProvider>
//   <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Primary" component={Primary}/>
//       <Tab.Screen name="Secondary" component={Secondary}/>
//     </Tab.Navigator>
//   </NavigationContainer>
//   </UserProvider>
// );