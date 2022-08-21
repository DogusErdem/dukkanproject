import React,{useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';

const Product = ({navigation}) =>{
    const {loading,error,data}= useFetch(Config.API_URL)

    const handleProductSelect = (id) =>{
        navigation.navigate('DetailsScreen',{id})
    }

    const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/> 
    
    if(error){
        return <Error/>
    }

    if(loading){
        return <Loading/>
    }

    return(
            <FlatList
            data={data}
            renderItem={renderProduct}
            />
    )
}

export default Product;