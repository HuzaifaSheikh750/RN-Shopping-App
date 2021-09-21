import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import Signout from './Signout';


const Profile = ({ navigation }) => {

    const signout = ({ navigate }) => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
            // navigation.navigate('Signin')
    }
    return (
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={signout}>
                <View style={{ flexDirection: 'row', marginTop: 600 }}>
                    <Ionicons name="log-in-outline" size={40} color="red" />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>SignOut</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
