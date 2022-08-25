import React, { useState } from "react";
import { View,Text,TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
const Primary = () => {

    const [text,setText] = useState("");
    const [username,setUser] = useState("");
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch({type:'ADD_NAME', payload:{name:text} })

    }
    const handleClean = () => {
        dispatch({type:'CLEAN'})
    }
    const handleuserAdd = () => {
        dispatch({type:'ADD_USER', payload:{username}})
    }
    return(
        <View>
            <Text style={{fontSize:20}}>PRİMARY</Text>
            <TextInput value={text} placeholder='İsim giriniz..' onChangeText={setText}/>
            <TextInput value={username} placeholder='Kullanıcı giriniz..' onChangeText={setUser}/>
            <Button title="Ekle" onPress={handleAdd}/>
            <Button title="Kullanıcı Ekle" onPress={handleuserAdd}/>
            <Button title="Temizle" onPress={handleClean}/>
        </View>
    )
}

export default Primary