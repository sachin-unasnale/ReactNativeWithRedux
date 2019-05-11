import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../Actions';
import LinearGradient from 'react-native-linear-gradient';

class LoginForm extends Component {

    
  onEmailChange(text)
  {
    this.props.emailChanged(text);
  }

  onPasswordChange(text)
  {
    this.props.passwordChanged(text);
  }



  render()
  {
    return(
     <View style={styles.container}>
       <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='User Name' 
               placeholderTextColor='rgba(0,0,0,0.6)'
               underlineColorAndroid='rgba(0,0,0,0)'
               onChangeText={this.onEmailChange.bind(this)}
               value={this.props.email}
               />

    <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgba(0,0,0,0.6)' 
               underlineColorAndroid='rgba(0,0,0,0)'
               onChangeText={this.onPasswordChange.bind(this)}
               value={this.props.password}
              secureTextEntry />

   <View style={styles.buttonContainer} >
        <TouchableOpacity  onPress={() => {
                                   if(this.props.email === 'prashant@gmail.com' || this.props.email === 'Prashant@gmail.com')
                                   {
                                     if(this.props.password === 'prashant123' || this.props.password === 'Prashant123')
                                     {
                                        Actions.employeeList()     
                                     }  
                                     else
                                     {
                                        Alert.alert('invalid password')
                                     }
                                   } 
                                   else 
                                   {
                                        Alert.alert('invalid username')
                                   }
                                
                                }}>
                           <Text style={styles.buttonText}>
                             Sign In
                           </Text>
        </TouchableOpacity> 
        </View>
  

</View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 50,
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 10,
        color: '#000',
        borderRadius: 20,
        textAlign: 'center',
       
    },
    buttonContainer:{
        backgroundColor: '#3ACCE1',
        paddingVertical: 15,
        borderRadius: 20,
        marginTop: 30
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    }
    });


const mapStateToProps = state => {
    return { 
              email: state.userCred.email,
              password: state.userCred.password
           };
  };

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);
