import React from "react";
import { SafeAreaView,Text, TextInput, View } from "react-native";
import style from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Input = ({placeholder, onType, value,iconName,isSecure}) => {
    return(
        <SafeAreaView style={style.container}>
            <TextInput 
            style={style.input}
            placeholder={placeholder} 
            onChangeText={onType} 
            value={value}
            secureTextEntry={isSecure}
            />
            <Icon name={iconName} size={20} color='black' style={{alignSelf:'center',marginRight:10}}/> 
        </SafeAreaView>
    )
}
export default Input;