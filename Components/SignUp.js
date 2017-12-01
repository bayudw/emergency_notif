import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Text,
  View,
  Alert,
  Picker,
  StatusBar,
} from 'react-native';
import * as firebase from 'firebase';
import DatePicker from 'react-native-datepicker';
import { Content, Container } from 'native-base';
import { auth } from './auth';

var{width,height}=Dimensions.get('window');

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      fullname: '',
      date: '',
      gender: '',
      email: '',
      password: '',
      repassword: '',
      signUpText: 'Sign Up', 
    };
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  handlePress() {
    if (this.state.email=='' || this.state.fullname=='' || this.state.password=='' || this.state.repassword=='') {
       alert("Please fill all field!");
    }
    else{
          if(this.state.password!= this.state.repassword ){
          alert("Make sure your repassword is correct.");
          }
          else{
          this.setState({signUpText: 'Loading..'})
          const { navigate } = this.props.navigation;
          auth(this.state.email, this.state.password)
            .then(() => this.setState({signUpText: 'Sign Up'})) 
            .then(() => {

                   let today = new Date();
                   let Times = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
           
                   var user = firebase.auth().currentUser.uid;
                   var database = firebase.database().ref("users/"+user);
                   database.set({
                      birthDate : this.state.date,
                      created_at : Times,
                      email : this.state.email,
                      full_name : this.state.fullname,
                      gender : this.state.gender,
                      locationUpdateLatitude : "-8.800",
                      locationUpdateLongitude :"115.17779",
                      updated_at : Times
                })
                .then(() => navigate('SignIn'))
             })
            .catch((error) => Alert.alert(
              'Alert',
              'Error: ' + error.message,
              [
                {text: 'OK', onPress: () => this.setState({signUpText: 'Sign Up'})},
              ],
              { cancelable: false }
            ));  
          }  
        }
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Content>
           <Text style={styles.signup1}>
             Sign up
           </Text>
          
            {/*Full name*/}
            <TextInput style={styles.fullname}
              placeholder='Full name'
              placeholderTextColor= '#757982'
              underlineColorAndroid= 'transparent'
              onChangeText={(text) => this.setState({fullname: text})} />


            <DatePicker
              style={styles.datebirth}
              date={this.state.date}
              mode="date"
              placeholder="Select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />

            <Picker style={styles.gender}
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>

            {/*E-mail address*/}
            <TextInput style={styles.email}
              placeholder='E-mail address'
              placeholderTextColor= '#757982'
              underlineColorAndroid= 'transparent'
              onChangeText={(text) => this.setState({email: text})} />
            
            {/*Password*/}
            <TextInput style={styles.password}
              placeholder='Password'
              placeholderTextColor= '#757982'
              secureTextEntry= {true}
              underlineColorAndroid= 'transparent'
              onChangeText={(text) => this.setState({password: text})} />

            {/*Repeat Password*/}
            <TextInput style={styles.repassword}
              placeholder='Repeat your password'
              placeholderTextColor= '#757982'
              secureTextEntry= {true}
              underlineColorAndroid= 'transparent'
              onChangeText={(text) => this.setState({repassword: text})} />

            <Text 
              style={styles.button} 
              onPress={() => this.handlePress()}>
              {this.state.signUpText}
            </Text>

            <Text style={styles.signin} onPress={() => navigate('SignIn')}>
              Already have an account? Sign in.
            </Text>
         </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#313541',
    width: width,
    height: height,
  },
  signup1: {
    color: '#fcfcfd',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 35,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  fullname: {
    backgroundColor: '#464a53',
    alignSelf: 'center',
    width: 320,
    marginTop: 15,
    paddingVertical: 10,
    color: '#757982',
    textAlign: 'left',
    paddingLeft: 10,
  },
  datebirth: {
    backgroundColor: '#464a53',
    alignSelf: 'center',
    width: 320,
    marginTop: 16,
    paddingVertical: 10,
    color: '#757982',
    textAlign: 'left',
    paddingLeft: 10,
  },
  gender: {
    backgroundColor: '#464a53',
    alignSelf: 'center',
    width: 320,
    fontSize: 10                ,
    marginTop: 16,
    paddingVertical: 10,
    color: '#757982',
    textAlign: 'left',
    paddingLeft: 10,
  },

  email: {
    backgroundColor: '#464a53',
    alignSelf: 'center',
    width: 320,
    marginTop: 17,
    paddingVertical: 10,
    color: '#757982',
    textAlign: 'left',
    paddingLeft: 10,
  },
  password: {
    backgroundColor: '#464a53',
    alignSelf: 'center',
    width: 320,
    marginTop: 18,
    paddingVertical: 10,
    color: '#757982',
    textAlign: 'left',
    paddingLeft: 10,
  },
  repassword: {
    backgroundColor: '#464a53',
    alignSelf: 'center',
    width: 320,
    marginTop: 19,
    paddingVertical: 10,
    color: '#757982',
    textAlign: 'left',
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#08d68b',
    alignSelf: 'center',
    width: 320,
    marginTop: 25,
    color: '#fdfdfe',
    textAlign: 'center',
    paddingVertical: 10,
  },
  signin: {
    color: '#fcfcfd',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 50,
  },
  


});
