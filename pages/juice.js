import React, { Component } from 'react';
import TopTabBarJuice from '../components/tabs/topTabBarJuice';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
console.disableYellowBox = true;
export default class Juice extends Component {

 static navigationOptions = {
     //To hide the NavigationBar from current Screen
     header: null
   };


  render() {

    return (



        <TopTabBarJuice/>

    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },

  text: {

    color: '#fff'
  }

});
