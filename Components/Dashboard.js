import React, { Component } from 'react';
import {AsyncStorage, Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import Drawer from 'react-native-drawer';
import { Container } from 'native-base';
import { MapView } from 'expo';

var{width,height}= Dimensions.get('window');

export default class Dashboard extends Component { 
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<View style={{width: width/1.5, height: height, backgroundColor: '#313541'}}> 
              <View style={styles.container1}>
                <TouchableOpacity onPress=  {() => this.haha()}>
                <View style={{flexDirection: 'row'}}> 
                  <Image style={{width: 35, height: 35}} source={require('./police.png')}/>
                <Text style={{fontSize: 20, color: 'white', marginTop: 5, marginLeft: 10}}> Police</Text>
                </View>
                </TouchableOpacity>
              </View>
              <View style={styles.container2}>
                <TouchableOpacity onPress=  {() => this.haha()}>
                <View style={{flexDirection: 'row'}}> 
                  <Image style={{width: 35, height: 35}} source={require('./fireman.png')}/>
                <Text style={{fontSize: 20, color: 'white', marginTop: 5, marginLeft: 10}}> Fire fighter</Text>
                </View>
                </TouchableOpacity>
              </View>
              <View style={styles.container3}>
                <TouchableOpacity onPress=  {() => this.haha()}>
                <View style={{flexDirection: 'row'}}> 
                  <Image style={{width: 35, height: 35}} source={require('./hospital.png')}/>
                <Text style={{fontSize: 20, color: 'white', marginTop: 5, marginLeft: 10}}> Hospital</Text>
                </View>
                </TouchableOpacity>
              </View>
              <View style={styles.container4}>
                <TouchableOpacity onPress=  {() => this.haha()}>
                <View style={{flexDirection: 'row'}}> 
                  <Image style={{width: 35, height: 35}} source={require('./pln.png')}/>
                <Text style={{fontSize: 20, color: 'white', marginTop: 5, marginLeft: 10}}> Electric company</Text>
                </View>
                </TouchableOpacity>
              </View>
              </View>}
              tapToClose={true}
              openDrawerOffset={0.2} // 20% gap on the right side of drawer
              panCloseMask={0.2}
              closedDrawerOffset={-3}
              styles={drawerStyles}
              tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
              })}
              >
              <View style={styles.header}>
              <TouchableOpacity onPress=  {() => this.openControlPanel()}> 
                <Image style={styles.menu}
                  source={require('./menu.png')}
                 />
              </TouchableOpacity>
              <TextInput style={styles.search}
                placeholder='Search here'
                placeholderTextColor= '#757982'
                underlineColorAndroid= 'transparent'
                onChangeText={(text) => this.setState({text})}> 
              </TextInput>
              <TouchableOpacity onPress={() => navigate('Profile')}> 
                 <Image style={styles.profil}
                  source={require('./profile.png')}
                 />
              </TouchableOpacity>
            </View>
              <Container>
                <MapView style={{width: width, height: height}}
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
                </Container>
                <Container style={{position:'absolute', alignItems:'center', marginLeft: width/2.225, marginTop: height/8 }} >
                 <View style={styles.gps}>
                      <TouchableOpacity onPress=  {() => this.haha()}>
                      <View>
                        <Image style={{width: 45, height: 45, alignSelf: 'center'}} source={require('./gps.png')}/>
                      </View>
                      </TouchableOpacity>
                    </View>     
                </Container>
            </Drawer>
        
    );
  }
}

const styles = StyleSheet.create({
header: {
    backgroundColor: '#313541',
    width: width,
    height: 90,
    flexDirection: 'row',
  },
menu: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginLeft: 10,
  },
profil: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginLeft: 10,
  },
search: {
    backgroundColor: '#464a53',
    alignSelf: 'center',
    width: 260,
    height: 35,
    marginTop: 20,
    paddingVertical: 10,
    color: '#757982',
    textAlign: 'left',
    fontSize: 14,
    marginLeft: 10,
    paddingLeft: 10,
    flexDirection: 'row',
  },
container1: {
   paddingVertical: 20,
   flexDirection: 'row',
   marginTop: 30,
   paddingLeft: 20,
  },
container2: {
   paddingVertical: 20,
   flexDirection: 'row',
   paddingLeft: 20,
  },
container3: {
   paddingTop: 20,
   flexDirection: 'row',
   paddingLeft: 20,
  },
container4: {
   paddingTop: 40,
   flexDirection: 'row',
   paddingLeft: 20,
  },
gps: {
   alignItems: 'center',
   marginTop: 500,
  },


});

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}