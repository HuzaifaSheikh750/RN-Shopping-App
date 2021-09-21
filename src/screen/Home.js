import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome5'
import COLORS from '../const/Color'
import { filterData, Category, CarCategory } from '../const/Data.js'
const width = Dimensions.get('window').width / 2 - 30;
// onPress={()=>navigation.navigate('DetailsScreen', Category)}
const Home = ({ navigation }) => {
    // 
    const Card = ({ Categories }) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', Categories)}>
                <View style={styles.Cards}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Categories.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0, 0, 0, 0.2)'
                        }}>
                            <Icon name="heart"
                                size={18}
                                color={Categories.like ? COLORS.red : COLORS.dark}
                            />
                        </View>
                    </View>
                    <View style={{ height: 100, alignItems: 'center' }}>
                        <Image style={{ flex: 1, resizeMode: 'contain' }} source={Categories.img} />
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
                        {Categories.name}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5
                    }}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 19, marginTop: 5 }}>{Categories.price}</Text>
                        <View style={{ height: 30, width: 28, backgroundColor: COLORS.green, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>+</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };


    return (


        <ScrollView>
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={{ marginTop: 20, flexDirection: "row", marginLeft: 40 }}>
                    {/* <Icon name="menu-outline" size={20} style={{paddingLeft:-20}}/> */}
                    <View style={styles.searchcontainer}>
                        <Icon name="search-sharp" size={25} style={{ marginLeft: 20 }} />
                        <TextInput placeholder="Search" style={styles.input} />
                    </View>
                    <View>
                        <Icon name="wallet-outline" size={30} style={styles.sortbtn} />
                    </View>
                </View>
            </View>

            {/* <View style={styles.footer}>
                <Icon name="home-outline" size={20} onPress={()=>navigation.navigate('Home')}/>
                <Icon name="home-outline" size={20} onPress={()=>navigation.navigate('Brands')}/>

            </View> */}
            <View style={{ paddingHorizontal: 10 }}>
                <Image style={{ width: '100%', marginTop: 5 }} source={require('../assets/download.jpg')} />
            </View>

            <View>
                <View style={styles.category}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10, color: 'orange' }}>Category</Text>
                </View>
                {/* <ScrollView> */}
                    <View>
                        <FlatList
                            style={{ marginTop: 20, marginBottom: 10, paddingHorizontal: 20, }}
                            horizontal={true}
                            data={filterData}
                            keyExtractor={(item) => item.id}

                            renderItem={({ item }) => (
                                <View style={{ padding: 15, borderColor: "grey", borderWidth: 2, paddingHorizontal: 30 }}>
                                    <Image
                                        style={{ height: 60, width: 60, borderRadius: 30 }}
                                        source={item.image}
                                    />
                                    <Text style={{ fontSize: 20, color: 'black' }}>{item.name}</Text>
                                </View>
                            )}

                        />
                    </View>
                {/* </ScrollView> */}


                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'orange' }}>Mobile Phones</Text>
                </View>

                <View>
                    <FlatList
                        // columnWrapperStyle={{ justifyContent: 'space-between' }}
                        // showsVerticalScrollIndicator={true}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{
                            marginTop: 20,
                            paddingHorizontal: 15,
                            paddingBottom: 0
                        }}
                        // numColumns={3}
                        data={Category}
                        renderItem={({ item }) =>
                            <Card Categories={item} />
                        }
                    />
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'orange' }}>Cars</Text>
                </View>

                <View>
                    <FlatList
                        // columnWrapperStyle={{ justifyContent: 'space-between' }}
                        // showsVerticalScrollIndicator={true}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{
                            marginTop: 20,
                            paddingHorizontal: 15,
                            paddingBottom: 0,
                            
                        }}
                        // numColumns={3}
                        data={CarCategory}
                        renderItem={({ item }) =>
                            <Card Categories={item} />
                        }
                    />
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: 'orange',
        height: 80
    },
    searchcontainer: {
        height: 40,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
    },
    input: {
        fontWeight: 'bold',
        fontSize: 18,
        color: COLORS.dark,
        flex: 1
    },
    sortbtn: {
        padding: 8,
        color: COLORS.dark
    },
    footer: {
        width: '100%',
        height: 60,
        backgroundColor: 'pink',
        marginTop: 580,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    Cards: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    }
})
