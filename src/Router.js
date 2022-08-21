import React from 'react';
import { SafeAreaView ,Text,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products'
import Details from './pages/Details'
const Stack = createNativeStackNavigator();

const Router = () =>{
    return(
        <NavigationContainer>
            <StatusBar backgroundColor={'#64b5f6'} />
            <Stack.Navigator>
                <Stack.Screen name="ProductsScreen" component={Products} options={{
                    title:'DÜKKAN',
                    headerStyle:{backgroundColor:'#64b5f6'},
                    headerTitleStyle:{color:'white'},
                    headerTitleAlign:'center'
                }}/>
                <Stack.Screen name="DetailsScreen" component={Details} options={{
                    title:'DETAY',
                    headerStyle:{backgroundColor:'#64b5f6'},
                    headerTitleStyle:{color:'white'},
                    headerTitleAlign:'center' }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;