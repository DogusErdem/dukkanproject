import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#eeeeee',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection:'row',
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    price:{
        textAlign:'right',
        fontSize:16,
        fontStyle:"italic"
    },
    body_container:{
        flex:1,
        padding:5,
        justifyContent:'space-between'
    },

})