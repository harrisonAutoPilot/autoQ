import React, { Component } from 'react';
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
  Animated, Easing,
  Modal,
} from 'react-native';

import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
 import AsyncStorage from '@react-native-community/async-storage';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Select from 'react-native-select-plus';
import Ionicons from '../node_modules/react-native-vector-icons/Ionicons';
import Hr from 'react-native-hr-component'
const width = Dimensions.get('window').width;
import MediumLogo from '../components/logo/mediumLogo'
import CarButtons from './carButton'
 import RBSheet from "react-native-raw-bottom-sheet";
 import toyota from '../assets/toyota.png';
 import benz from '../assets/benz.png';
 import hyundai from '../assets/hyundai.png';
 import kia from '../assets/kia.jpeg';
 import honda from '../assets/honda.png';
 import lexus from '../assets/lexus.png';
 import bmw from '../assets/BMW.jpg';
 import peugeot from '../assets/Peugeot.jpg';
import Spinner from './spinner'


class Search extends React.Component <Props> {

static navigationOptions = {
   //To hide the NavigationBar from current Screen
   header: null
 };
 constructor(props) {
     super(props)

     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);


     this.state = {
          email: '',
          password: '',
          name: '',
          phone: '',
          visible: false,
          isVisible: false,
          isVisibleSpinner:false,
          parts:'',
          spinAnim: new Animated.Value(0),
          value: null,
          options: [
           {
          		key: 'toyota',
          		text: 'TOYOTA',
            img:toyota
          	},
          	{
          		key: 'mercedes',
          		text: 'MERCEDES',
            img:benz,
          	},
          	{
          		key: 'honda',
          		text: 'HONDA',
             img:honda
          	},
          	{
          		key: 'hyundai',
          		text: 'HYUNDAI',
             img:hyundai
          	},
           {
          		key: 'kia',
          		text: 'KIA',
             img:kia
          	},
           {
          		key: 'lexus',
          		text: 'LEXUS',
             img:lexus

          	},
           {
            key: 'bmw',
            text: 'BMW',
             img:bmw

           },
           {
            key: 'peugeot',
            text: 'PEUGEOT',
             img:peugeot

           },

      ],


};

this.onSelectedItemsChange = (key, value) => {
  this.setState({ selectedValue: value });
  console.log('Ada this is the Value is Selected', value);
};

}

                componentDidMount(){
                 Animated.loop(Animated.timing(
                    this.state.spinAnim,
                  {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.linear,
                    useNativeDriver: true
                  }
                )).start();
                 }

                componentWillMount() {
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                handleBackButtonClick() {
                this.props.navigation.navigate('Welcome');
                return true;

                }

                saveData2 = async () => {
                   try {
                     await AsyncStorage.setItem(name, JSON.stringify(data && data.user.name))
                     alert(name + 'Data successfully saved')
                      this.props.navigation.navigate('Home')
                   } catch (e) {
                    this.setState({ errorMessage: error.toString() });
                    this.setState({ isVisible: false});
                    // alert(error)
                     alert( error, 'Failed to save the data to the storage')
                   }
                 }





         saveData = ()=>{
                const {value,parts} = this.state;
                   this.setState({ isVisibleSpinner:true})
                //save data with asyncstorage
                let loginDetails={
                    value: value,
                    parts_name: parts
                }

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      car_type: value,
                      parts_name: parts
                      })
                };
                fetch('http://0886d79e2291.ngrok.io/getSpareParts', requestOptions)
                .then(async response => {
                    const data = await response.json();
                       console.log(data);
                       this.setState({
                         id: data && data.user.id,

                         parts_name:data && data.user.parts_name,
                         description:data && data.user.description,


                        })
                        let okk = JSON.stringify (response.status);
                        let id = JSON.stringify (data.user.id);
                        let parts_name =  data && data.user.parts_name;
                        let description =  data && data.user.description;


                              if  (response.status === 200){
                               this.props.RBSheet.close();
                               this.setState({ isVisibleSpinner: false});
                               this.props.navigation.navigate('SearchPartsList',{car_type: this.state.value , parts_name1: this.state.parts,})
                                     console.log('odi look',id);
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

    const { value, items,options } = this.state;
    const { selectedValue } = this.state;
    const { name,email, password,distance,price } = this.props;
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '0deg']
    });


    return (


<View style={styles.container}>

 <View style={styles.content}>
 <View style={{ height:70, justifyContent:'center', alignItems:'center', marginTop:30}}>
         <Animated.Image
         style={{height:70,marginBottom:10,marginTop:15, width: 150,transform: [{rotate: spin}] }}
        source={require('../assets/toolss.png')} />
             <Text style={{fontWeight:'bold', color:'#666699', fontSize:12}}>SEARCH FOR SPARE PARTS</Text>
       </View>

           <View style={styles.username}>
             <View style={{alignItems:'center'}}><Text style={{color:'#006600', fontSize:18,marginTop:15, textTransform:'capitalize', fontFamily:'roboto'}}>{this.state.value}</Text></View>
           <TouchableOpacity style={styles.input1}  onPress = {() => {
               this.setState({ isVisible:!this.state.isVisible})}}>
           <Text style={{color:'gray', fontSize:12,}}>SELECT CAR</Text>
           </TouchableOpacity>

                          <TextInput
                          style={styles.input1}
                          placeholder='Enter Parts Name / Number'
                          autoCapitalize="none"

                          placeholderTextColor='gray'
                          onChangeText={(partsVal) =>{
                           this.setState({
                            parts:partsVal,
                           });
                          }}

                          value={this.state.parts}
                          />
 </View>
            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly', marginTop:10, marginBottom:20}}>
          <TouchableOpacity
              style = {styles.signButton}
               onPress={this.saveData}>
              <Text style = {styles.submitButtonText}> SEARCH</Text>
           </TouchableOpacity>
           </View>


     </View>
     <Modal
        animationType = {"fade"}
        transparent = {true}
        visible = {this.state.isVisible}
        onRequestClose = {() =>{ console.log("Modal has been closed.") } }>


            <View style ={styles.modal} >

 <View style={styles.selectContainer}>
 <ScrollView vertical={true}
  ref={(scrollView) => {scrollView = scrollView; }}
 showsVerticalScrollIndicator={false}>
  <View style={styles.buttonContainer}>
 {
                options && options.length > 0 && options.map(item => {
                 return (



                    <TouchableOpacity
                    key={item.key}
                     style={styles.circle}
                     onPress={() => {
                      this.setState({
                       value: item.key,
                       isVisible:!this.state.isVisible
                      });

                      console.log(value);
                     }}
                    >
                    <Image source={item.img} style={styles.selectImg}/>
                    <Text style={styles.selectText}>{item.text}</Text>
                     {value === item.key}


                    </TouchableOpacity>



                  );

                 })}
                    </View>
                   </ScrollView >
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
          </View>




       </Modal>
</View>


    );
  }
}
export default Search;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 caption:{
  color:'	rgb(255,165,0)',
  margin:10,
  fontSize:25,
 },
 imageSize:{
 width: 40,
 height:40,
 alignSelf: 'center',
 resizeMode: 'contain',
 margin:50,
  },
  logoCover:{
   width:100,
   height:100,
   alignItems:'center',
  flexDirection:'column',
  backgroundColor:'#fff',
  borderRadius:100,
  borderWidth:1,
  borderStyle:'solid',
 borderColor:'gray',
 resizeMode: 'contain',
  // shadowColor: '#000',
  // shadowOffset: { width: 0, height:hp('0.5%') },
  // shadowOpacity: 2,
  // shadowRadius: 2,
  // elevation: hp('0.5%'),
  // opacity:0.9,
},
 content:{
position:'absolute',
 justifyContent:'center',
 flexDirection:'column',

flex:1,
 },

   input1: {
      width: 300,
      height: 45,
      marginTop:7,
      padding: 8,
      color: '#666699',
      borderStyle:'solid',
      borderColor:'gray',
      fontSize: 14,
      borderWidth:1,
      alignItems:'center',
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
       borderRadius:4,
       textTransform:'capitalize',
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : "#fff",
      height: 500 ,
      width: '80%',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      marginTop: 80,
      marginLeft: 40,
      shadowColor: '#fff',
     shadowOffset: { width: 0, height:hp('1.5%') },
     shadowOpacity: 2,
     shadowRadius: 1,
      elevation: hp('0.8%'),
       },
selectContainer:{
 flexDirection:'column',
 width:300,
height:450,
position:'absolute'
 // flexWrap: 'wrap',
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
buttonContainer: {
flexDirection:'row',
 width:300,
alignItems:'center',
justifyContent:'center',
   flexWrap: 'wrap',

},
selectImg:{
 height: 70,
 width: 70,
 resizeMode:'contain',
 marginBottom:15
},
selectText:{
color:'gray',
marginTop:-15,
},
signButton: {
backgroundColor:'#666699',
width:wp('70%'),
height:hp('7%'),
alignItems:'center',
justifyContent:'center',
borderRadius:30,
shadowColor: '#000',
shadowOffset: { width: 0, height:hp('0.5%') },
shadowOpacity: 2,
shadowRadius: 2,
elevation: hp('0.5%'),
opacity:0.9,
marginBottom:15,
       },

 welcomeMessage:{
  color:'#00b300',
  margin:10,
  fontSize:20,
 },
 captionBB:{
 justifyContent:'center',
 alignItems:'center',
 margin:5,
 },
 captionB:{
  color:'black',
  fontSize:15,

 },
 username:{
  margin:2,

 },
 userTest:{
  marginLeft:30,
  fontSize: 15,
  fontWeight: '500',
  color:'black',
  height:15,
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
   color: '#fff'
   },

   imageLogin:{
    width:200,
    height:200,
    alignItems:'center',
   },
   regWith:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   },
   Te:{
    color:'gray',
    fontSize:10,
   },
   line:{
    color:'#663300',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:13,
    fontSize:15,
   },
   regSelect:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
   },
googleButton:{
 width:130,
 height:50,
 borderWidth:1,
 borderColor:'rgb(255, 70, 6)',
 borderStyle:'solid',
 margin:4,
justifyContent:'center',
backgroundColor:'rgb(255, 70, 6)',
borderRadius:2,
},
faceBookButton:{
 width:130,
 height:50,
 borderWidth:1,
 borderColor:'rgb(30, 149, 255)',
 borderStyle:'solid',
 margin:4,
 justifyContent:'center',
 backgroundColor:'rgb(30, 149, 255)',
 borderRadius:2,

},
button1:{
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
},
imagefaceB:{
 width:30,
 height:30,
 alignItems:'flex-end',
 marginLeft:-10,
 marginRight:10,
},

imagegoogB:{
 width:30,
 height:30,
 alignItems:'flex-end',
 marginLeft:-10,
 marginRight:13,
},
flowerSize:{
 width:500,
 height:hp('100%'),
 marginLeft:400,
 backgroundColor:'#fff',

},welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },


circle: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('0.5%') },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: hp('0.5%'),
    opacity:0.9,
    backgroundColor:'#fff',
    alignItems:'center',
},
checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
},
})
