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


class Profile extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  constructor(props) {
   super(props);
   this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
   this.state = {
      quantity: '',
      address: '',
      description:'',
     selectedOption: null,
    };

  }

  componentWillMount() {
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
  this.props.navigation.navigate('Home');
  return true;
  }
  saveData = ()=>{
         const {email,password} = this.state;

         //save data with asyncstorage
         let loginDetails={
             email: email,
             password: password
         }

         if(email=='harrison' && password == 'admin')
         {

             alert("Successful Login!. Welcome to Abide In My Word Daily Devotional")
            this.props.navigation.navigate('Home')}

         else if (email !='harrison' && password != 'admin'){
           alert("Sorry Editing Profile has been Disabled! Please Contact Your Admin On  08062585929")
           this.props.navigation.navigate('')}



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
    <Image source={require('../assets/segun.jpeg')} style={styles.imageSize} />

    </View>
   </View>


 <View style={styles.content}>
           <View style={styles.username}>
                <View  style={styles.input1}>
                   <View style={styles.icon}><Image source={require('../assets/user.png')} style={styles.iconSize}/></View>
                   <View style={styles.info}><Text style = {styles.infoText}>Ebube Harrison</Text></View>
               </View>
               <View  style={styles.input1}>
                  <View style={styles.icon}><Image source={require('../assets/email.png')} style={styles.iconSize}/></View>
                  <View style={styles.info}><Text style = {styles.infoText}>harrison.o.ebube@gmail.com</Text></View>
              </View>
              <View  style={styles.input1}>
                 <View style={styles.icon}><Image source={require('../assets/loc.png')} style={styles.iconSize}/></View>
                 <View style={styles.info}><Text style = {styles.infoText}>Abuja Nigeria</Text></View>
             </View>
             <View  style={styles.input1}>
                <View style={styles.icon}><Image source={require('../assets/phone.png')} style={styles.iconSize}/></View>
                <View style={styles.info}><Text style = {styles.infoText}>+234 806 2585 929</Text></View>
             </View>
             <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Welcome')}>
             <View  style={styles.input1}>
                <View style={styles.icon}><Image source={require('../assets/logout.png')} style={styles.iconSize}/></View>
                <View style={styles.info}><Text style = {styles.infoText}>Log Out</Text></View>
             </View>
              </TouchableOpacity>
          </View>

            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
          <TouchableOpacity
              style = {styles.signButton}
               onPress={this.saveData}>

              <Text style = {styles.submitButtonText}>Edit Profile</Text>
           </TouchableOpacity>
           </View>
           <View style={{alignItems:'center',}}>




            </View>

     </View>
   </View>



    );
  }
}
export default Profile;

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
 width:150,
 height:150,
 alignItems:'center',
 flexDirection:'row',
  justifyContent:'center',
  borderWidth:9,
  borderStyle:'solid',
  borderColor:'#666699',

 },
 imageSize:{
 width: 130,
 height:130,
 alignSelf: 'center',
 resizeMode: 'cover',
 borderRadius:200,
  },
 content:{
position:'absolute',
 justifyContent:'center',

top:hp('35%'),
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
      width: 300,
      height: 50,
      padding: 8,
      color: 'black',
      borderStyle:'solid',
      borderBottomColor:'gray',
      fontSize: 14,
       justifyContent:'center',
       marginLeft:wp('30%'),
       marginRight:wp('15%'),
       flexDirection:'row'
    },

signButton: {
backgroundColor:'#666699',
width:wp('60%'),
height:hp('7%'),
alignItems:'center',
justifyContent:'center',
borderTopRightRadius:30,
borderBottomRightRadius:30,
borderBottomLeftRadius:30,
marginRight:50,
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
 width:280,
height:50,

},
infoText:{
 fontSize:15,
 alignItems:'center',

}
})
