import { StyleSheet,Dimensions} from "react-native";
const Size = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#64b5f6'
    },
    logo:{
        height:Size.height/3,
        width:Size.width,
        alignSelf:'center',
        resizeMode:'contain',
        tintColor:'white'
        
    },
    body_container:{
       
    },
    error_text:{
        fontSize:13,
        fontWeight:'400',
        color:'red',
        textAlign:'left',
        marginHorizontal:13,
        
    }
})