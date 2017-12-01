/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  View
} from 'react-native';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator
} from 'react-native-indicators';


var{width,height}=Dimensions.get('window');

export default class SplashScreen extends Component {
  
 constructor(props){
    super(props);
    this.state =({
      email : '',
      password : '',
    });

    AsyncStorage.multiGet(['email', 'password', 'userId']).then((data) => {
      const { navigate } = this.props.navigation;
          let email = data[0][1];
          // let email = 12;
          let password = data[1][1];
          let userId = data[2][1];

          if(email!=null){
            login(this.state.email, this.state.password).then(() => {
              navigate('Dashboard');
            }).catch((error) => {
            alert("error " + error.message );
            });
          }
          else{
           navigate('SignIn');
          }
    });
    
}

  render() {
    return (
      <View style={styles.container}>
           <Image style={styles.logo}
              source={require('./logo.png')}
            />
            <DotIndicator  style={{ marginBottom: 250}} color='white' size= {5} count= {5}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313541',
    width: width,
    height: height,
  },
  logo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    marginTop: 200,
  },

  });