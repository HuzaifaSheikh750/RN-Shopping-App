import React, { useState } from 'react';
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
    Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = ({ navigate }) => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((cred) => {
                const {uid}=cred.user;
                auth().currentUser.updateProfile({
                    displayName: userName
                })
                // return  uid
                console.log('User account created & signed in!');

                navigation.navigate('Signin')
            })
            // .then(uid => createUserInDB(uid, userName, email)) 
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            });
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <StatusBar barStyle='light-content'></StatusBar>

                <View style={styles.header}>
                    <Image style={styles.facebookLogo} source={require('../assets/daraz.png')} />
                </View>

                <View style={styles.login}>
                    <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#ff6900' }}>Register</Text>
                </View>

                <View style={styles.field}>
                    <TextInput onChangeText={(text) => setUserName(userName)} keyboardType={'email-address'} style={{ width: '80%', borderWidth: 2, borderColor: "grey", borderRadius: 100, paddingLeft: 15 }} placeholder="Username" />
                </View>

                <View style={styles.field}>
                    <TextInput onChangeText={(text) => setEmail(text)} keyboardType={'email-address'} style={{ width: '80%', borderWidth: 2, borderColor: "grey", borderRadius: 100, paddingLeft: 15 }} placeholder="Username" />
                </View>

                <View style={styles.field}>
                    <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={{ width: '80%', borderWidth: 2, borderColor: "grey", borderRadius: 100, paddingLeft: 15 }} placeholder="Password" />
                </View>

                <View style={styles.field}>
                    <TouchableOpacity onPress={register} style={[styles.btn, { backgroundColor: '#ff6900', width: '80%', padding: 15, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.field}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signin')}>
                            
                        <Text style={{ color: '#6c8eed' }}>Have an Account? Signin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

// const { height } = Dimensions.get("screen")
// const height_logo = height * 0.4 * 0.4;

export default Signup

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
     
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginBottom:50,
        width: '100%',
    },
    facebookLogo: {
        // width: height_logo,
        // height: height_logo
        width:250,
        height:90
    },
    login: {
        width: '100%',
        alignItems: 'center',
        marginTop:2
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
