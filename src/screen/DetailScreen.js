import React,{useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../const/Color';


import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Products');


function DetailScreen({ navigation, route }) {
    const [count, setcount] = useState(0)

    const AddData=()=>{
    usersCollection.add({
        Name:categories.name,
        Position:categories.price
    });
};


    const increment=()=>{
        setcount(count+1)
    }
    const deccrement=()=>{
        setcount(count-1)
    }
    const categories = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
                <Icon name="shopping-cart" size={28} />
            </View>
            <View style={styles.imageConatainer}>
                <Image source={categories.img} style={{ resizeMode: 'contain', flex: 1 }} />
            </View>
            <View style={styles.detailContainer}>
                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'flex-end' }}>
                    <View style={styles.line} />
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>Best Choice</Text>
                </View>
                <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{categories.name}</Text>
                    <View style={styles.priceTag}>
                        <Text style={{ marginLeft: 15, color: COLORS.white, fontWeight: 'bold', fontSize: 16 }}>{categories.price}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                    <Text style={{ marginTop: 10, color: 'grey', lineHeight: 20, fontSize: 16 }}>{categories.about}</Text>

                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <View style={styles.borderBtn}>
                                <Text style={styles.borderBtnText} onPress={deccrement}>-</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginHorizontal: 10,
                                    fontWeight: 'bold',
                                }}>
                                {count}
                            </Text>
                            <View style={styles.borderBtn}>
                                <Text style={styles.borderBtnText} onPress={increment}>+</Text>
                            </View>
                        </View>

                        <View style={styles.buyBtn} >
                            <Text onPress={AddData}
                                style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                Add to cart
                            </Text>
                        </View>
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageConatainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 30,
        marginTop: 30,
        paddingTop: 30,
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3
    },
    priceTag: {
        backgroundColor:'orange',
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center'
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
    },
    borderBtnText: { fontWeight: 'bold', fontSize: 28 },
    buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    }
})