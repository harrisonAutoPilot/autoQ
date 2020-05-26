import React, { useCallback } from "react";
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
  Linking,
  Modal,
   Platform
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
import SmallLogo from '../components/logo/smallLogo'
const width = Dimensions.get('window').width;

const supportedURL = "https://api.whatsapp.com/send?phone=+2348062585929&text=I%20want%20to%20find%20out%20about%20your%20products";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title= "Whatsapp" onPress={handlePress} />;
};


class WorkerDetails extends React.Component <Props> {
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
          mobile_no: '8035780380',
          msg: '',
          isVisible:false,
       }



}

dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${08035780380}';
    }
    else {
      phoneNumber = 'telprompt:${08062585929}';
    }

    Linking.openURL(phoneNumber);
  };

sendOnWhatsApp=() => {
    let msg = this.state.msg;
    let mobile = this.state.mobile_no;
    if(mobile){
      if(msg){
        let url = 'whatsapp://send?text=' + this.state.msg + '&phone=+234' + this.state.mobile_no;
        Linking.openURL(url).then((data) => {
          console.log('WhatsApp Opened');
        }).catch(() => {
          alert('Make sure Whatsapp installed on your device');
        });
      }else{
        alert('Please insert message to send');
      }
    }else{
      alert('Please insert mobile no');
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>

     <View style={{position:'absolute',flexDirection:'column', width:wp('100%'),   height:hp('48%'), alignItems:'center', justifyContent:'center', top:hp('-1%')}}>
            <Image source={require('../assets/gradient.jpeg')} style={styles.gradientSize}/>
             <View style={styles.profileAvatar}>
                          <Image source={require('../assets/sam.jpeg')} style={styles.youSize}/>
                          <Text style={{color:'#fff', fontSize:25,width:width, marginTop:15}}>Ifeanyi Ilodigwe</Text>
                          <Text style={{color:'#FF6600', fontSize:15,width:width,alignItems:'center',paddingLeft:35,fontWeight:'bold', marginTop:2}}>MECHANIC</Text>
             </View>
          <View style={styles.contactContainer}>

               <View style={styles.phoneContainer}>
               <TouchableOpacity
                  // style={styles.info1}
                     //onPress={this.saveData}>
                   onPress={this.dialCall} activeOpacity={0.7}>

                   <Image source={require('../assets/phoneWhite.png')} style={styles.phoneSize}/>
                </TouchableOpacity>
               </View>

               <TouchableOpacity
               style={styles.phoneContainer}
                  // style={styles.info1}
                    // onPress={this.saveData}>
                     onPress = {() =>  this.setState({ isVisible:!this.state.isVisible})}>

                   <Image source={require('../assets/whatsapp.png')} style={styles.whatsappSize}/>
                </TouchableOpacity>


         </View>
     </View>


    <View  style={styles.scrollContainer}>


  <View style={styles.content}>
  <ScrollView vertical={true}

   ref={(scrollView) => {scrollView = scrollView; }}
  showsVerticalScrollIndicator={false}>
           <View style={styles.username}>
                <View  style={styles.input1}>
                   <View style={styles.title}><Text style = {styles.titleText}>Specialization:</Text></View>
                   <View style={styles.info}><Text style = {styles.infoText}>Toyota, Lexus, Mazda, Acura, Honda</Text></View>
               </View>
               <View  style={styles.input1}>
                  <View style={styles.title}><Text style = {styles.titleText}>Locations:</Text></View>
                  <View style={styles.info}><Text style = {styles.infoText}>Abuja, Suleja, Mpape, Deidei, Kubwa, Dutse</Text></View>
              </View>
              <View  style={styles.input1}>
                 <View style={styles.title}><Text style = {styles.titleText}>Experience:</Text></View>
                 <View style={styles.info}><Text style = {styles.infoText}>5 Years</Text></View>
             </View>


          </View>

</ScrollView>
<View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
<TouchableOpacity
  style = {styles.signButton}
   // onPress={this.saveData}>
    onPress={() => this.props.navigation.navigate('SearchWorkerList')}>
  <Text style = {styles.submitButtonText}  >CLOSE</Text>
</TouchableOpacity>
</View>
     </View>

 </View>
     <Modal
        animationType = {"fade"}
        transparent = {true}
        visible = {this.state.isVisible}
        onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

            <View style = {styles.modal1}  >


             </View>

      </Modal>

      <Modal
         animationType = {"fade"}
         transparent = {true}
         visible = {this.state.isVisible}
         onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

             <View style = {styles.modal}  >
             <TouchableOpacity
                 style = {styles.closeButton}
                  // onPress={this.saveData}>
                    onPress = {() =>  this.setState({ isVisible:false})}>
                  <Image source={require('../assets/close.png')} style={styles.closeSize}/>

              </TouchableOpacity>
                <View style={styles.modalinputContainer}>

                         <TextInput
                                 style={styles.inputModal}
                                 placeholder='Leave a Whatsapp Chat'
                                 autoCapitalize="none"
                                 placeholderTextColor='gray'
                                 value={this.state.msg}
                                 onChangeText={msg => this.setState({ msg })}
                               />

                               <TouchableOpacity
                                   style = {styles.whatsappButton}
                                    // onPress={this.saveData}>
                                      onPress={this.sendOnWhatsApp}>
                                   <Text style = {styles.submitButtonText}  >SEND WHATSAPP</Text>
                                </TouchableOpacity>
            </View>

         </View>

       </Modal>
   </View>



    );
  }
}
export default WorkerDetails;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#221e1f'
 },
profileAvatar:{
 width:150,
 height:150,
 borderWidth:1,
 borderColor:'gray',
borderStyle:'solid',
borderRadius:100,
position:'absolute',
top:45,
flexDirection:'column'
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
top:hp('44%'),
alignItems:'center',
height:230,
width:wp('100%'),
 },
 gradientSize:{
  width:width,
  height:200,
  resizeMode:'cover',
  alignItems:'center',
  justifyContent:'center',
 },
 youSize:{
  width:135,
  height:135,
  borderRadius:100,
  margin:5,
 },
 contactContainer:{
 flexDirection:'row',
 width:width,
 height:90,
 borderColor:'#fff',
 borderStyle:'solid',
  borderWidth: 0,
  top:50,
  justifyContent:'space-around',
  zIndex:50,
 },
 phoneContainer:{
  width:80,
  height:80,
  borderColor:'gray',
  borderStyle:'solid',
  borderWidth: 1,
  borderRadius:50,
alignItems:'center',
justifyContent:'center',
zIndex:6,
 },
 username:{
 // backgroundColor:'#e4a26f',
 width:wp('100%'),
 alignItems:'center',
 marginLeft:10

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
      color: '#fff',
      borderBottomWidth:0,
      borderStyle:'solid',
      borderBottomColor:'#fff',
      fontSize: 14,
       justifyContent:'center',
       marginLeft:wp('20%'),
       marginRight:wp('15%'),
       flexDirection:'row',
       alignItems:'center'
    },
    modalinputContainer:{
     flexDirection:'column',
     alignItems:'center',
     justifyContent:'center',
    },
    inputModal: {
       width: 230,
       height: 48,
       padding: 8,
       color: 'black',
       borderStyle:'solid',
       borderWidth:1,
       borderColor:'#00b300',
       fontSize: 14,
        justifyContent:'center',
       borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        marginTop:30,

     },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : "#fff",
      height: 200 ,
      width: '80%',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      marginTop: 150,
      marginLeft: 40,
      shadowColor: '#fff',
     shadowOffset: { width: 0, height:hp('1.5%') },
     shadowOpacity: 2,
     shadowRadius: 1,
      elevation: hp('0.8%'),
     },
     closeButton:{
      justifyContent:'flex-end',
      marginLeft:250,
     },
signButton: {
backgroundColor:'#ff6600',
width:wp('70%'),
height:hp('8%'),
alignItems:'center',
justifyContent:'center',
borderRadius:30,
marginTop:20,
       },
       whatsappButton: {
       backgroundColor:'#00b33c',
       width:wp('50%'),
       height:hp('7%'),
       alignItems:'center',
       justifyContent:'center',
       borderRadius:30,
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
 height:hp('100%'),
 marginLeft:500,
 backgroundColor:'#fff',
 opacity:0.2
},
whatsappSize:{
 width:50,
 height:50,
},
phoneSize:{
 width:40,
 height:40,
},
closeSize:{
 width:15,
 height:15,
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
info1:{
 width:200,
height:50,

paddingLeft:40,


},
infoText:{
 fontSize:15,
 alignItems:'center',
  color:'#fff',
},
infoTextC:{
 fontSize:15,
 alignItems:'center',
 fontWeight:'bold',
 color:'#fff',
 paddingTop:10,
},
infoTextS:{
 fontSize:15,
 alignItems:'center',
 fontWeight:'bold',
 color:'#fff',
 paddingTop:10,
},
title:{
 width:130,
height:50,

},
titleText:{
 fontSize:15,
 alignItems:'center',
 color:'#fff'
},
imageContainer:{
 width:wp('80%'),
 height:200,
 borderRadius:10,
 borderWidth: 1,
 borderColor: 'gray',
 borderStyle:'solid',
alignItems:'center',
justifyContent:'center',
marginLeft:wp('10%'),
marginRight:wp('10%'),
backgroundColor:'#fff'
},
scrollContainer:{
 position:'absolute',
 width:width,
 height:700,
 top:60,
 zIndex:40,
 alignItems:'center',
 justifyContent:'center',
},
photoSize:{
 width:300,
 height:180,
 resizeMode:'contain',
}
})
