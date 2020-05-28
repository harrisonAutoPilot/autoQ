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
import MediumLogo from '../components/logo/mediumLogo'

class Login extends React.Component <Props> {
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
       }


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


         saveData = ()=>{
                const {email,password} = this.state;

                //save data with asyncstorage
                let loginDetails={
                    email: email,
                    password: password
                }

                if(email=='08062585929' && password == '1122')
                {

                    alert("Successful Login!. Welcome Segun " )
                   this.props.navigation.navigate('Home')}

                // else if (email !='harrison' && password != 'admin'){
                //   alert("Wrong Username or Password. Please Contact Your Admin On  08062585929")
                //   this.props.navigation.navigate('')}



       }





         render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <Image source={require('../assets/wokerr.jpg')} style={styles.flowerSize}/>
     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center', justifyContent:'center', top:hp('3%')}}>


     </View>
     <View style={{ flexDirection:'column',  position:'absolute',top:hp('5%') }}>
     <MediumLogo />

   </View>


 <View style={styles.content}>
           <View style={styles.username}>

            <TextInput
                    style={styles.input1}
                    placeholder='Phone Number'
                     keyboardType='numeric'
                    autoCapitalize="none"
                     maxLength={11}
                    placeholderTextColor='gray'
                    onChangeText={(emailVal) =>{
                     this.setState({
                      email:emailVal,
                     });
                    }}
                    value={this.state.email}
                  />

                  <TextInput
                  style={styles.input1}
                  placeholder='4 Digit Pin'
                  autoCapitalize="none"
                  keyboardType='numeric'
                  secureTextEntry={true}
                  maxLength={4}  //setting limit of input
                  placeholderTextColor='gray'
                  onChangeText={(passwordVal) =>{
                   this.setState({
                    password:passwordVal,
                   });
                  }}

                  value={this.state.password}
                  />
          </View>

            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
          <TouchableOpacity
              style = {styles.signButton}
               // onPress={this.saveData}>
                 onPress={this.saveData}>
              <Text style = {styles.submitButtonText}  > SIGN IN</Text>
           </TouchableOpacity>
           </View>
           <View style={{alignItems:'center',}}>

           <View style={styles.regWith}>
        <View><Text style={styles.line}> ____ </Text></View>
        <View><Text style={styles.Te}>Forgot your Pin? click here to reset</Text></View>
        <View><Text style={styles.line}> ____</Text></View>
           </View>

<View>
<TouchableOpacity

     onPress={() => this.props.navigation.navigate('SignUp')}>
<Text style={{color:'#003300',fontWeight:'bold'}}>Dont have an account. Signup</Text>
</TouchableOpacity>
</View>
            </View>

     </View>
   </View>



    );
  }
}
export default Login;

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
   width:160,
   height:160,
   alignItems:'center',
  flexDirection:'column',
  backgroundColor:'#fff',
  borderRadius:100,
  borderWidth:0,
  borderStyle:'solid',
 borderColor:'gray',
 resizeMode: 'contain',
  shadowColor: '#000',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 2,
  elevation: hp('0.5%'),
  opacity:0.9,
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
      width: 210,
      height: 35,
      margin: 20,
      padding: 8,
      color: 'black',
      borderStyle:'solid',
      borderBottomColor:'gray',
      fontSize: 14,
      borderBottomWidth:1,
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
    },

signButton: {
backgroundColor:'#666699',
width:wp('40%'),
height:hp('7%'),
alignItems:'center',
justifyContent:'center',
borderTopRightRadius:30,
borderBottomRightRadius:30,
borderBottomLeftRadius:30,
marginRight:100,
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
  margin:10,

 },
 userTest:{
  marginLeft:30,
  fontSize: 15,
  fontWeight: '500',
  color:'black',
  height:15,
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

}
})
