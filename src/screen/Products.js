import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';

const addProduct = (productName, price) => {
    if(!productName && !price){
        Alert.alert('Error', 'please enter all fields')
    }
    return firestore()
    .collection('products')
    .doc()
    .set({
        productName,
        price
    })

         .catch(err => err)
    
}
export default Product = {
    addProduct
}