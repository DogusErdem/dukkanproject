import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Details from './pages/Details';
import Login from './pages/Login';
import {useSelector,useDispatch} from 'react-redux';
import Loading from './components/Loading';
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();

const Router = () => {
  const useSession = useSelector(s => s.user);
  const isLoading = useSelector(l => l.authLoading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#64b5f6'} />
      {isLoading ? (
        <Loading />
      ) : !useSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{
              title: 'Login',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'white'},
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="ProductsScreen"
              component={Products}
              options={{
                title: 'DÜKKAN',
                headerStyle: {backgroundColor: '#64b5f6'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
                headerRight:(()=><Icon name='logout' size={30} color='white' onPress={()=> dispatch({type:'USER_LOGOUT'})}/>)
              }}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={Details}
              options={{
                title: 'DETAY',
                headerStyle: {backgroundColor: '#64b5f6'},
                headerTitleStyle: {color: 'white'},
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default Router;
