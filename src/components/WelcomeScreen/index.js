import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExitAppAlertComponent from "../exit-component/ExitAppAlertComponent";

export default function WelcomeScreen(props) {
    const [name, setName] = React.useState('Dipte');
    useEffect(()=>{
        ExitAppAlertComponent(); // App Exit alert
    },[])
    AsyncStorage.setItem("name", 'Dipte')
    const setNameAsync = async (text) => {
        await AsyncStorage.setItem("name", text)
        setName(text)
    }
    return (<View style={styles.container}>
        <Text style={styles.welcome}>ইফতি দীপ্তি গেমে আপনাকে স্বাগতম!</Text>
        <Text style={styles.label}>শুভ স্যারের সঙ্গে কে খেলতে চায় ?</Text>
        <TextInput style={styles.input} onChangeText={text => setNameAsync(text)} value={name}
                   placeholder="আপনার নাম লিখুন"/>
        <Button onPress={() => props.navigation.navigate('Game')} style={styles.instructions}
                title={'খেলা শুরু করতে ক্লিক করুন'}></Button>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }, welcome: {
        fontSize: 21, marginBottom: 54, textAlign: 'center', color: '#66d4cf', fontWeight: 'bold',
    }, label: {
        fontSize: 16, marginBottom: 5, textAlign: 'center',
    }, input: {
        height: 35, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 36, padding: 8, borderRadius: 4,
    }, instructions: {
        textAlign: 'center', color: 'grey',
    },
});
