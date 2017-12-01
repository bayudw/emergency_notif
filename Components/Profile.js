import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
} from 'react-native';
import { logout } from './auth';

var{width,height}=Dimensions.get('window');

export default class Profile extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      logoutText: 'Logout'
    }
  }

  handlePress() {
    const { navigate } = this.props.navigation;
    this.setState({logoutText: 'Loading..'})
    logout()
      .then(() => this.removeSession())
      .then(() => this.setState({logoutText: 'Logout'}))
      .then(() => navigate('SignIn'))
      .catch((error) => alert(error))
  }

  removeSession() {
    AsyncStorage.removeItem('@Email:key')
  }

  getSession() {
    AsyncStorage.getItem('@Email:key').then((jsonData) => {
      let email = JSON.parse(jsonData);
      this.setState({
        email: email
      })
    })
  }

  componentDidMount() {
    this.getSession()
  }

  render() {
  	return (
      <View style={styles.container}>
      	<Text 
      		onPress={() => this.handlePress()}
      		style={styles.button}>
      			{this.state.logoutText}
      	</Text>
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
    marginTop: 20,
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
});
