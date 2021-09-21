import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ScrollView,
    AsyncStorage
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Signin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = async ({ navigate }) => {
        try {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    AsyncStorage.setItem('token', email)
                    console.log('Login in');
                    navigation.navigate('HomePage')
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
                    console.error(error);
                });
        } catch (error) {
            console.log(error)
        }
    }

    const tokenLogin = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                navigation.navigate('HomePage')
                console.log('connected')
            } else {

            }
        } catch (error) {
            console.log(error)
        }
    }
    tokenLogin();
    return (
        <ScrollView>
            <View style={styles.container}>

                <StatusBar barStyle='light-content'></StatusBar>

                <View style={styles.header}>
                    <Image style={styles.facebookLogo} source={require('../assets/daraz.png')} />
                </View>

                <View style={styles.login}>
                    <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#ff6900' }}>Login</Text>
                </View>

                <View style={styles.field}>
                    <TextInput onChangeText={(text) => setEmail(text)} keyboardType={'email-address'} style={{ width: '80%', borderWidth: 2, borderColor: "grey", borderRadius: 100, paddingLeft: 15 }} placeholder="Email" />
                </View>

                <View style={styles.field}>
                    <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={{ width: '80%', borderWidth: 2, borderColor: "grey", borderRadius: 100, paddingLeft: 15 }} placeholder="Password" />
                </View>

                <View style={styles.field}>
                    <TouchableOpacity onPress={Login} style={[styles.btn, { backgroundColor: '#ff6900', width: '80%', padding: 15, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.field}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: 'white', width: '80%', padding: 15, borderRadius: 100, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }]}>
                        <Icon name="google" size={20} color="red" />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.field}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: '#4267B2', width: '80%', padding: 15, borderRadius: 100, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }]}>
                        <Icon name="facebook" size={20} color="white" />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Continue With Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.field}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ color: '#6c8eed' }}>Dont Have an account ? SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Signin

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginBottom:50,
        width: '100%'
    },
    facebookLogo: {
        // width: height_logo,
        // height: height_logo
        width:300,
        height:90
    },
    login: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 15
    },
    field: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 20
    },
    btn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }
})
