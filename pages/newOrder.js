import React, { Component } from 'react';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler,Button } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class NewOrder extends Component{
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
   super(props);
   this.state = {

   }

 }


 render(){

  return(
   <View style={styles. MainContainer}>
<Text> This is th new order Page</Text>
    </View>
 );
}
}
export default NewOrder;



const styles = StyleSheet.create({

MainContainer: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
backgroundColor: '#f2f2f2',
 flexDirection:'column',
 resizeMode: 'contain',
},
navTitle:{
width:width,
height:hp('10%'),
justifyContent:'center',
alignItems:'center',
backgroundColor:'#fff',
resizeMode: 'contain',
shadowColor: '#000',
shadowOffset: { width: 0, height:hp('0.5%') },
shadowOpacity: 2,
shadowRadius: 2,
elevation: hp('0.5%'),
flexDirection:'row',
position:'absolute',
top:hp('0%'),
},
requestButton:{
 paddingLeft:90,
},
request:{
 backgroundColor:'gray',
 width:wp('16%'),
 height:hp('2.5%'),
 borderRadius:10,
 alignItems:'center',
 justifyContent:'center',
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),

},
navCaption:{
fontSize:20,
justifyContent:'center',
alignItems:'center',
color:'black',
},
list:{
position:'absolute',
flexDirection:'column',
width:wp('99%'),
height:hp('30%'),
top:hp('0%'),
},
listSponsore:{
position:'absolute',
flexDirection:'column',
width:wp('98.5%'),
height:hp('30%'),
top:hp('33.5%'),
},
listSuggestion:{
position:'absolute',
flexDirection:'column',
width:wp('98.5%'),
height:hp('30%'),
top:hp('66.5%'),
},
titleSponsore:{
  position:'absolute',
 top:hp('31 %'),
 left:wp('8%')

},
titleSuggestion:{
  position:'absolute',
 top:hp('64 %'),
 left:wp('8%')

},
cardsList:{
width: wp('98.5%'),
height:hp('13%'),
resizeMode: 'contain',
borderWidth: 0,
borderRadius: 1.5,
shadowColor: '#000',
shadowOffset: { width: 0, height:hp('0.5%') },
shadowOpacity: 2,
shadowRadius: 2,
elevation: hp('0.5%'),
marginTop: 5,
flexDirection:'row',
backgroundColor:'#fff',
},
listAvatar:{
width:wp('17%'),
height:hp('10%'),
backgroundColor:'#f2f2f2',
borderRadius:50,
margin:10,
},
listContent:{
flexDirection:'column',
},
driverName:{
padding:5,
marginTop:hp('2%'),
},

driverNameCaption:{
fontSize:13,
fontWeight:'bold',
textAlign:'left',
marginLeft:wp('5%')

},

buttonContainer:{
width:wp('18%'),
height:hp('10%'),
top:hp('68%'),
right:wp('5%'),
position:'absolute',
flexDirection:'row',
shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('2%') },
 shadowOpacity: 2,
 shadowRadius: 2,
  elevation: hp('2%'),
  backgroundColor:'transparent',
  alignItems:'center',
  justifyContent:'center',
  zIndex:20,

},

plusButton:{
 backgroundColor:'transparent',
 padding: 10,
 margin:18,
 height:hp('5%'),
 width:wp('5%'),
 alignItems:'center',
 justifyContent:'center',
 resizeMode: 'contain',
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
},


detail:{
width:width,
height:hp('40%'),
justifyContent:'center',
alignItems:'center',
backgroundColor:'#fff',
resizeMode: 'contain',
borderStyle:'solid',
borderWidth:0.3,
borderColor:'gray',
},
DetailContent:{
flexDirection:'column',
justifyContent:'space-between',
backgroundColor:'transparent',
},

backgroundImage:{
width:hp('100%'),
height: hp('90%'),
alignSelf: 'center',
resizeMode: 'contain',
position:'relative',
zIndex:0,
},

welcomeMessage:{
marginLeft:20,
},
welcomeMessageText:{
fontSize:18,
fontWeight:'bold',
},
scrollContainer:{
flex: 1,
flexDirection: 'row',
marginLeft:20,
},

});
