import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';

const App = StackNavigator({
  SignIn: { 
    screen: SignIn,
    navigationOptions: {
      header: null,
    }, 
  },
  SignUp: { 
    screen: SignUp, 
    navigationOptions: {
      header: null,
    },
  },
  Dashboard: { 
    screen: Dashboard,
    navigationOptions: {
      header: null,
    },
  },
  Profile: { 
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
});

export default App;




