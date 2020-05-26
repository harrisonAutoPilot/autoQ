import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Dimensions, Image } from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RBSheet from "react-native-raw-bottom-sheet";
import Carousel from 'react-native-looped-carousel-improved';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class VSmallLogo extends Component {




  render() {

    return (
     <View style={styles.logoCover}>
         <Image source={require('../../assets/autoQlogo.png')} style={styles.imageSize} />
         <Text style={{fontSize:20,marginTop:0, color:'#666699', fontWeight:'bold'}}>Auto<Text style={{color:'#ff6600'}}>Q</Text>.ng</Text>

    </View>
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

  imageSize:{
  width: 40,
  height:40,
  alignSelf: 'center',
  resizeMode: 'contain',
  marginLeft:45,
  marginRight:5,
   },
   logoCover:{
    width:300,
    height:100,
    alignItems:'center',
   flexDirection:'row',
   borderRadius:100,
   borderWidth:0,
   borderStyle:'solid',
  borderColor:'gray',
  resizeMode: 'contain',
  zIndex:50,
   opacity:0.9,
 },

});
