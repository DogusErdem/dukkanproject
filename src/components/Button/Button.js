import React from "react";
import { ActivityIndicator, SafeAreaView,Text, TouchableOpacity } from "react-native";
import style from './Button.style'
const Button = ({text,onPress,loading}) => {
    return(

            <TouchableOpacity style={style.container} onPress={onPress} disabled={loading}>
                {loading ?( <ActivityIndicator color={'blue'}/>)  
                :
                <Text style={style.text}> {text}</Text>
                }
            </TouchableOpacity>
       
    
    )
}
export default Button;