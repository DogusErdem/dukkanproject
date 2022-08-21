import React from 'react';
import {Text,Image,View,TouchableWithoutFeedback} from 'react-native'
import style from './ProductCard.styles'
const ProductCard = ({product, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={style.container}>
            <Image style={style.image} source={{uri: product.image}}/>
            <View style={style.body_container}>
                <Text style={style.title}>{product.title}</Text>
                <Text style={style.price}>{product.price} TL</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard;