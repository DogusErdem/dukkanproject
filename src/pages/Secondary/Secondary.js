import React from "react";
import { View,Text,FlatList} from "react-native";
import { useSelector } from "react-redux";
const Secondary = () => {
    const list = useSelector(s=> s.nameList)
    const userList = useSelector(u=>u.userName)
    return(
        <View>
            <Text>{userList}</Text>
            <FlatList
            data={list}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(_,index)=>index.toString()}
            />
        </View>
    )
}

export default Secondary