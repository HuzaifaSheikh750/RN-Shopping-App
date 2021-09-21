import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Input, TouchableOpacity, Alert } from 'react-native'
// import {Product} from '../screen/Products'

import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Products');

const AddProducts = () => {
    const [ProductName, setProductName] = useState();
    const [price, setprice] = useState();
    // const [getdata, setgetdata] = useState([])

// const AddData=()=>{
//     usersCollection.add({
//         Name:ProductName,
//         Position:price
//     });
// };

// const fetchData=()=>{
//     usersCollection.get().then(snapshot =>{
//         snapshot.forEach(documentsnapshot =>{
//             console.log(documentsnapshot.data())
//         });
//     });
// };

// const deleteData=()=>{
//     usersCollection
//     .doc('ov9f1rUcY48tEHSDXGtS')
//     .delete()
//     .then (()=>{})
//     .catch(err=>{});
// }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Products</Text>
            <TextInput
                placeholder="Product Name"
                value={ProductName}
                onChangeText={e=> setProductName(e)}
            />
             <TextInput
                placeholder="Product Price"
                value={price}
                onChangeText={e=>setprice(e)}
            />
            {/* <TouchableOpacity onPress={AddData}>
                <Text>Add Product</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={fetchData}>
                <Text>get Product</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default AddProducts

const styles = StyleSheet.create({})
