import { StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1
    },
    inner_container:{
        padding:15
    },
    image:{
        width: Dimensions.get('window').width,
        height:  Dimensions.get('window').height/3,
        resizeMode:'contain',
        backgroundColor:'white'
    }, title:{
        fontWeight:'bold',
        fontSize:25,
    }, desc:{
        fontStyle:'italic',
        marginVertical:5
    }, price:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'right'
    }
})