import React, { Component } from 'react';
import { Alert, View, StyleSheet, Image, Text, KeyboardAvoidingView, TouchableOpacity, ImageBackground  } from 'react-native';
import LoginForm from './LoginForm';

 export default class Login extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <ImageBackground source={require('./assets/loginBgImage.png')} style={{width: '100%', height: '100%'}}>
       <View style={styles.container}>
            
            <KeyboardAvoidingView behavior="padding" style={styles.container}> 
              <View style={styles.imageContainer}>
                          
              </View>

                  <View style={styles.formContainer}>
                        <LoginForm />
                  </View>   
              </KeyboardAvoidingView>
               
       </View>  
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    imageContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    formContainer: {
        flex: 2,           
    },
    buttonText: {
     marginTop: 20,
     color: '#fff',
     textAlign: 'center',
     fontWeight: '700'
    },
    buttonContainer: {
       padding: 0
    },
    signUpViewStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 0.3,
    }

    });