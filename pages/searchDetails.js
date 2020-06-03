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
  Modal
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
import Hr from 'react-native-hr-component';
import Spinner from './spinner'
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


class SearchDetails extends React.Component <Props> {
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
          isVisibleSpinner:false,
          mobile_no: '',
          msg: '',
          isVisible:false,
       }



}
dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${this.state.seller_number}'; 
    }
    else {
      phoneNumber = 'telprompt:${08062585929}';
    }

    Linking.openURL(phoneNumber);
  };

sendOnWhatsApp=() => {
    let msg = this.state.msg;
    let mobile = this.state.seller_number;
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


            componentDidMount() {
               this.searchDetails();
             }


   searchDetails = ()=>{

          const {id} = this.state;
             this.setState({ isVisibleSpinner:true})
          const requestOptions = {

              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
               id: this.props.navigation.getParam('id'),

               //id:this.props.navigation.state.params.va.id

                })
          };
          fetch('http://0886d79e2291.ngrok.io/getSparePartsById', requestOptions)
          .then(async response => {
              const data = await response.json();
                 console.log('this is for the details', data);
                 this.setState({ isVisibleSpinner:false})
                 this.setState({
                   id: data && data.user.id,
                   parts_name:data && data.user.parts_name,
                   // email: data.user.email,
                   parts_number:data && data.user.parts_number,
                 description:data && data.user.description,
                   seller_state:data && data.user.seller_state,
                   seller_address:data && data.user.seller_address,
                   price:data && data.user.price,
                   parts_status:data && data.user.parts_status,
                  })
                 console.log('just to harry2', this.state.check.user);
                  // let id = data && data.user.id;
                  // let parts_name =  data && data.user.parts_name;
                  // let description =  data && data.user.description;


                        if  (response.status === 200){
                         // console.log('odi look',id);
                         // try {
                         //   this.setState({ isVisibleSpinner: false});
                         //   await AsyncStorage.setItem('Parts_id', okk)
                         //   alert(id + " " + 'Data successfully saved')
                         //   this.props.RBSheet.close();
                         //   this.props.navigation.navigate('SearchPartsList',{car_type: this.state.value , parts_name1: this.state.parts,})
                         //
                         //    console.log('odi next',description);
                         // } catch (e) {
                         //  this.setState({ errorMessage: error.toString() });
                         //  this.setState({ isVisible: false});
                         //  // alert(error)
                         //   alert( error, 'Failed to save the data to the storage')
                         // }
                                 this.setState({ isVisibleSpinner: false});
                               // this.props.navigation.navigate('Home')
                        } else{
                            // this.setState({loader: false});
                            // this.setState({code: 'Error'});
                            // this.setState({resp: userInfo});
                            // this.setState({dialogVisible: true});
                            // this.setState({ errorMessage: error.toString() });
                            this.setState({ isVisible: false});
                             alert(error)

                        }
                 })


   }









  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <Image source={require('../assets/worker.jpg')} style={styles.flowerSize}/>

     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('3%')}}>
              <SmallLogo />
   </View>

    <View  style={styles.scrollContainer}>


  <View style={styles.content}>
  <ScrollView vertical={true}

   ref={(scrollView) => {scrollView = scrollView; }}
  showsVerticalScrollIndicator={false}>
           <View style={styles.username}>
                <View  style={styles.input1}>
                   <View style={styles.title}><Text style = {styles.titleText}>Parts Name:</Text></View>
                   <View style={styles.info}><Text style = {styles.infoText}>{this.state.parts_name}</Text></View>
               </View>
               <View  style={styles.input1}>
                  <View style={styles.title}><Text style = {styles.titleText}>Parts Number:</Text></View>
                  <View style={styles.info}><Text style = {styles.infoText}>{this.state.parts_number}</Text></View>
              </View>
              <View  style={styles.input1}>
                 <View style={styles.title}><Text style = {styles.titleText}>Price:</Text></View>
                 <View style={styles.info}><Text style = {styles.infoText}>{this.state.price}</Text></View>
             </View>
             <View  style={styles.input1}>
                <View style={styles.title}><Text style = {styles.titleText}>Condition:</Text></View>
                <View style={styles.info}><Text style = {styles.infoText}>{this.state.parts_status}</Text></View>
            </View>
             <View  style={styles.input1}>
                <View style={styles.title}><Text style = {styles.titleText}>Description:</Text></View>
                <View style={styles.info}><Text style = {styles.infoText}>{this.state.description} </Text></View>
            </View>



           <View  style={styles.input11}>

              <TouchableOpacity
                  style={styles.phoneContainer}
                    //onPress={this.saveData}>
                  onPress={this.dialCall} activeOpacity={0.7}>

                  <Image source={require('../assets/phoneColor.png')} style={styles.phoneSize}/>
               </TouchableOpacity>



              <TouchableOpacity
                 style={styles.phoneContainer1}
                   // onPress={this.saveData}>
                   onPress = {() =>  this.setState({ isVisible:!this.state.isVisible})}>

                  <Image source={require('../assets/whatsapp.png')} style={styles.phoneSize}/>
               </TouchableOpacity>

          </View>


          </View>

           <View style={styles.imageContainer}>
           <Image source={require('../assets/brakePad.jpg')} style={styles.photoSize}/>
           </View>



           <View style={{alignItems:'center',}}>




            </View>
</ScrollView>
<View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
<TouchableOpacity
  style = {styles.signButton}
   // onPress={this.saveData}>
    onPress={() => this.props.navigation.navigate('SearchPartsList')}>
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
       <Modal
          animationType = {"fade"}
          transparent = {true}
          visible = {this.state.isVisibleSpinner}
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

              <View style ={styles.modalSpinner} >

              <Spinner />
              <Text style={{color:'gray'}}>Processing ...</Text>
                  </View>




        </Modal>
       </View>




    );
  }
}
export default SearchDetails;

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
top:hp('13%'),
alignItems:'center',
height:470,
width:wp('100%'),

 },
 username:{
 // backgroundColor:'#e4a26f',
 width:wp('100%'),
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
   phoneContainer:{
    width:80,
    height:80,
    borderColor:'#666699',
    borderStyle:'solid',
    borderWidth: 1,
    borderRadius:50,
  alignItems:'center',
  justifyContent:'center',
  zIndex:6,
  marginTop:50,
  marginBottom:50,
   },
   modalSpinner: {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor : "transparent",
     height: 400 ,
     width: '80%',
     borderRadius:10,
     borderWidth: 0,
     borderColor: '#fff',
     marginTop: 100,
     marginLeft: 40,

      },
   phoneContainer1:{
    width:80,
    height:80,
    borderColor:'#666699',
    borderStyle:'solid',
    borderWidth: 1,
    borderRadius:50,
  alignItems:'center',
  justifyContent:'center',
  zIndex:6,
  margin:50,
  marginRight:100,
   },
   phoneSize:{
    width:40,
    height:40,
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
       marginLeft:wp('25%'),
       marginRight:wp('15%'),
       flexDirection:'row',
       alignItems:'center'

    },

    input11: {
       width: 340,
       height: 50,
       padding: 8,
       color: 'black',
       borderStyle:'solid',
       borderBottomColor:'gray',
       fontSize: 14,
        justifyContent:'center',
        marginLeft:wp('20%'),
        marginRight:wp('15%'),
        marginBottom:30,
        marginTop:30,
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
backgroundColor:'#666699',
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
 width:700,
 height:hp('100%'),
 marginLeft:700,
 backgroundColor:'#fff',
 opacity:0.2
},
whatsappSize:{
 width:30,
 height:30,

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
 top:40,
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
