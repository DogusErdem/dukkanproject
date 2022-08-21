import React from 'react';
import { Image ,Text, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import style from './Details.style'
import Config from 'react-native-config'
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';


const Details = ({route}) =>{
    const {id} =route.params;
    
    const {loading,error,data} = useFetch(`${Config.API_URL}/${id}`)

   
    if(loading){
        return <Loading/>
    }
    
    if(error){
        return <Error/>
    }

    return(
        <View style={style.container}>
            <Image style={style.image} source={{uri:data.image}}/>
            <View style={style.inner_container}>
            <Text style={style.title}>{data.title}</Text>
            <Text style={style.desc}>{data.description}</Text> 
            <Text style={style.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Details;