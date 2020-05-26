import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Image,
   BackHandler,
  TouchableOpacity,
} from 'react-native';

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
import Hr from 'react-native-hr-component'
const width = Dimensions.get('window').width;


class JuiceDetails extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.state = {
          email: '',
          password: '',
           name: '',
           phone: '',
       }


}


  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <Image source={require('../assets/flowerC.png')} style={styles.flowerSize}/>
     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center', justifyContent:'center', top:hp('3%')}}>


     </View>
     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('5%')}}>
     <View style={styles.avatarContainer}>
    <Image source={require('../assets/logo.png')} style={styles.imageSize} />

    </View>
   </View>


 <View style={styles.content}>
           <View style={styles.username}>
                <View  style={styles.input1}>
                   <View style={styles.title}><Text style = {styles.titleText}>Product Name:</Text></View>
                   <View style={styles.info}><Text style = {styles.infoText}>Noni Vitae</Text></View>
               </View>
               <View  style={styles.input1}>
                  <View style={styles.title}><Text style = {styles.titleText}>Quantity:</Text></View>
                  <View style={styles.info}><Text style = {styles.infoText}>18 Packs</Text></View>
              </View>
              <View  style={styles.input1}>
                 <View style={styles.title}><Text style = {styles.titleText}>Delivery Address:</Text></View>
                 <View style={styles.info}><Text style = {styles.infoText}>House 4 Mabushi Distric Fct Abuja.</Text></View>
             </View>
             <View  style={styles.input1}>
                <View style={styles.title}><Text style = {styles.titleText}>Description:</Text></View>
                <View style={styles.info}><Text style = {styles.infoText}>My Shop Is Beside H-MEDIX Mabushi</Text></View>
            </View>
            <View  style={styles.input1}>
               <View style={styles.title}><Text style = {styles.titleText}>Transaction Code:</Text></View>
               <View style={styles.info}><Text style = {styles.infoTextC}>#TAN/ABJ/01635</Text></View>
           </View>
           <View  style={styles.input1}>
              <View style={styles.title}><Text style = {styles.titleText}>Date:</Text></View>
              <View style={styles.info}><Text style = {styles.infoText}>14/04/2020</Text></View>
          </View>
          <View  style={styles.input1}>
             <View style={styles.title}><Text style = {styles.titleText}>Transaction Status:</Text></View>
             <View style={styles.info}><Text style = {styles.infoTextS}>INTRANSIT</Text></View>
         </View>

          </View>

            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
          <TouchableOpacity
              style = {styles.signButton}
               // onPress={this.saveData}>
                onPress={() => this.props.navigation.navigate('JuiceOrderHistory')}>
              <Text style = {styles.submitButtonText}  >CLOSE</Text>
           </TouchableOpacity>
           </View>
           <View style={{alignItems:'center',}}>




            </View>

     </View>
   </View>



    );
  }
}
export default JuiceDetails;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },

 avatarContainer:{
 borderRadius:100,
 width:120,
 height:120,
 alignItems:'center',
 flexDirection:'row',
  justifyContent:'center',
  borderWidth:0,
  borderStyle:'solid',
  backgroundColor:'#000'
 },
 imageSize:{
 width: 100,
 height:100,
 alignSelf: 'center',
 resizeMode: 'contain',
 borderRadius:200,
  },
 content:{
position:'absolute',
 justifyContent:'center',
top:hp('28%'),
alignItems:'center'
 },
 username:{
 // backgroundColor:'#e4a26f',
 width:380,
 alignItems:'center'
 },
  input: {
     width: 350,
     height: 55,
     margin: 10,
     padding: 8,
     color: 'black',
     borderRadius: 20,
     borderColor:'gray',
     borderStyle:'solid',
      borderWidth: 1,
     fontSize: 18,
     fontWeight: '500',
 justifyContent:'center',
 marginLeft:wp('12%'),
 marginRight:wp('12%'),
   },
   input1: {
      width: 340,
      height: 50,
      padding: 8,
      color: 'black',
      borderStyle:'solid',
      borderBottomColor:'gray',
      fontSize: 14,
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
       flexDirection:'row',
       alignItems:'center'
    },

signButton: {
backgroundColor:'#009900',
width:wp('60%'),
height:hp('7%'),
alignItems:'center',
justifyContent:'center',
borderTopRightRadius:30,
borderBottomRightRadius:30,
borderBottomLeftRadius:30,
marginTop:20,
       },
    submitButtonText:{
    color: 'white'
    },
    profileImage:{
     width:100,
     height:100,
     backgroundColor:'#00b300',
     borderRadius:10,
    },
    imageLogin:{
     width:200,
     height:200,
     alignItems:'center',
    },
submitButton: {
 backgroundColor:'rgb(255,165,0)',
 padding: 10,
 margin: 15,
 height: 50,
 alignItems:'center',
 justifyContent:'center',
   },
   submitButtonText:{
   color: 'white'
   },
   profileImage:{
    width:100,
    height:100,
    backgroundColor:'#00b300',
    borderRadius:10,
   },
flowerSize:{
 width:450,
 height:480,
 marginTop:150,
 marginLeft:500,
 backgroundColor:'#fff',
 opacity:0.2

},
icon:{
 width:60,
 height:50,
},
iconSize:{
 width:35,
 height:35,
},
info:{
 width:200,
height:50,
paddingLeft:1,

},
infoText:{
 fontSize:15,
 alignItems:'center',
 fontWeight:'bold',
},
infoTextC:{
 fontSize:19,
 alignItems:'center',
 fontWeight:'bold',
 color:'#006600',
 paddingTop:10,
},
infoTextS:{
 fontSize:19,
 alignItems:'center',
 fontWeight:'bold',
 color:'#e4a26f',
 paddingTop:10,
},
title:{
 width:130,
height:50,


},
titleText:{
 fontSize:17,
 alignItems:'center',

}
})
