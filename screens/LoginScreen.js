import React, {Component} FormData, 'react';
import { 
    View,
    StylSheet,
    Platform,
    StatusBar,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import * as Font from 'expo-font';

import{RFValue} from 'react-native-responsive-fontsize';
import * as  Splashscreen from  'expo-splash-screen';

SplashScreen.preventAutoHideAysnc();

let customFons = {
    'Bublegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

const appIcon = require ('../assets/logo.png');

export default class LoginScreen extends component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fonstloaded: false,
            userSignedIn: false,
        };
    }
    aysnc_loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setstate({fontsLoaded: true}),
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    signIn = async (email,password) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            this.props.navigation.replace('Dashboard');
        }) 
        .catch((error) =>{
            Alert.alert(eror.message);
        });
        const {email, password} = this.state;

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>

                <Text style={styles.appTitleText}>StoryTelling</Text>
                <Image source = {appIcon} style={styles.appIcon} />

                <TextInput
                style={styles.textinput}
                onCHangeText={(text)=> this.setstate({ email: text})}
                placeholder={'Enter Email'}
                placeholderTextColor={'#F0FFFF'}
                autoFocus
            </View>
        )
    }
}