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
   Linking,
   BackHandler,
  TouchableOpacity,
} from 'react-native';

import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {  Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import VSmallLogo from '../components/logo/vSmallLogo'
import Hr from 'react-native-hr-component'
const width = Dimensions.get('window').width;


class Home extends React.Component <Props> {
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




  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>

     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center',top:hp('3%')}}>

     </View>
     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('1%') ,width:wp('100%'),justifyContent:'space-between',flexDirection:'row'}}>
    <View style={{marginLeft:15,}}>

    </View>
    <View style={{borderRadius:100,marginRight:20, zIndex:5}}>
    <TouchableOpacity
        style={styles.circleTop}
        onPress={() => this.props.navigation.navigate('Profile')}>
   <Image source={require('../assets/logout.png')} style={styles.imageSizeLogout} />
   <Text style={{fontSize:8, textAlign:'center', fontWeight:'bold'}}>Logout</Text>
    </TouchableOpacity>
   </View>
   </View>


 <View style={styles.content}>


<View style={styles.aboutComapny}>
      <View style={{borderRadius:100,alignItems:'center', justifyContent:'center',borderWidth:5, borderColor:'#e4a26f',width:150, height:150, borderStyle:'solid', zIndex:8}}>
      <Image source={require('../assets/segun.jpeg')} style={styles.profileImg} />
      </View>
      <View style={{marginTop:10, alignItems:'center'}}>
      <Text style={{fontSize:25, textAlign:'center', fontWeight:'bold',color:'#ff6600' }}>Segun Bolodeoku</Text>
      <Text style={{fontSize:15, textAlign:'center', fontWeight:'bold',color:'#747474' }}>Mechanic</Text>
      </View>
</View>
              <View style={styles.report}>
                    <View styles={styles.callReport}>
                        <Image source={require('../assets/phoneColor.png')} style={styles.callImg} />
                        <Text style={{textAlign:'center'}}>Call Request</Text>
                        <Text style={{textAlign:'center',fontWeight:'bold', fontSize:16}}>16</Text>
                    </View>

                    <View
                       style={{
                       borderLeftWidth: 1,
                       borderLeftColor: 'red',
                       height:70,
                       alignItems:'center',
                       marginTop:8,
                       }}
                     />
              <View styles={styles.chatReport}>
               <Image source={require('../assets/whatsapp.png')} style={styles.chatImg} />
              <Text style={{textAlign:'center'}}>Chat Request</Text>
                  <Text style={{textAlign:'center',fontWeight:'bold', fontSize:16}}>5</Text>
              </View>
              </View>

     </View>

     <View style={styles.waterContainer}>

     <View style={{flexDirection:'row'}}>
     <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Water')}>
           <View style={styles.water}>
               <Image source={require('../assets/google-pin.png')} style={styles.waterSizeLoc} />
               <Text style={{fontSize:15,color:'#666699'}}>Location</Text>
           </View>
          </TouchableOpacity>

          <TouchableOpacity
                onPress={ ()=>{ Linking.openURL('https://tingg.com.ng')}}>
           <View style={styles.juice}>
                 <Image source={require('../assets/ting.jpeg')} style={styles.waterSizeFundTingg} />
                 <Text style={{fontSize:15,color:'#666699'}}>Payment</Text>
           </View>
           </TouchableOpacity>
       </View>
       <View style={{flexDirection:'row'}}>
          <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Water')}>
                <View style={styles.waterDown}>
                    <Image source={require('../assets/google-pin1.png')} style={styles.waterSize} />
                    <Text style={{fontSize:15,color:'#666699'}}>Update Location</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('Juice')}>
                <View style={styles.juiceDown}>
                      <Image source={require('../assets/maintenanceColor.png')} style={styles.waterSizeFund} />
                      <Text style={{fontSize:15,color:'#666699'}}>Get Tools</Text>
                </View>
                </TouchableOpacity>
                </View>
     </View>
   </View>



    );
  }
}
export default Home;

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
 width: 60,
 height:60,
 alignSelf: 'center',
 resizeMode: 'contain',

  },
  imageSizeLogout:{
  width: 40,
  height:40,
  alignSelf: 'center',
  resizeMode: 'contain',
   },
   profileImg:{
    width: 130,
    height:130,

    resizeMode: 'cover',
    borderRadius:100,
    zIndex:4,
   },
   callImg:{
    width:20,
    height:20,
    margin:10,
    alignSelf: 'center',
    resizeMode: 'contain',
   },
   chatImg:{
    width:20,
    height:20,
     margin:10,
    alignSelf: 'center',
    resizeMode: 'contain',
   },
   report:{
    flexDirection:'row',
    width:wp('85%'),
    height:hp('13%'),
    position:'absolute',
    top:165,
    justifyContent:'space-around',
    zIndex:2,
    borderRadius:10,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'gray',

   },
   callReport:{
   flexDirection:'column',
   width:100,
   alignItems:'center',
   height:70,
   zIndex:3,
   margin:5,
   position:'absolute',
   backgroundColor:'green'
   },
   chatReport:{
    flexDirection:'column',
    width:100,
    alignItems:'center',
    borderLeftWidth: 1,
   borderLeftColor: 'green',
    borderStyle:'solid',
    height:70,
    margin:5
   },

 content:{
position:'absolute',
 justifyContent:'center',
top:hp('17%'),
width:wp('100%'),
 height:hp('31%'),
alignItems:'center',
flexDirection:'column',

 },

flowerSize:{
 width:450,
 height:hp('58%'),
 marginTop:-200,
 marginLeft:550,
 backgroundColor:'#fff',
 zIndex:4,
 opacity:0.5
},
aboutComapny:{
 width:wp('100%'),
 height:hp('20%'),
 borderStyle:'solid',
 position:'absolute',
 borderWidth:0,
 alignItems:'center',
 flexDirection:'column',
 borderTopRightRadius:20,
 borderTopLeftRadius:20,
 top:-59,

},
middle:{
 width:wp('100%'),
 height:hp('30%'),
 borderStyle:'solid',
 position:'absolute',
 borderWidth:0,
 flexDirection:'column',
 justifyContent:'space-around',
 borderBottomLeftRadius:50,
 borderBottomColor:'#1a1a1a',
 backgroundColor:'#ffffff',
 top:180,
 zIndex:2,
},
waterContainer:{
 width:wp('100%'),
 height:hp('45%'),
 borderStyle:'solid',
 position:'absolute',
 bottom:-5,
 flexDirection:'column',
 justifyContent:'center',
 backgroundColor:'#ffffff',
},
juiceContainer:{
 width:wp('100%'),
 height:hp('20%'),
 position:'absolute',
 borderWidth:1,
 flexDirection:'row',
 justifyContent:'center',
 borderTopRightRadius:0,
 borderTopLeftRadius:0,

 bottom:0,
},
water:{
 width:wp('33%'),
 height:hp('17%'),
borderRadius:10,
borderWidth:1,
borderStyle:'solid',
borderColor:'#666699',
marginLeft:50,
marginRight:20,
alignItems:'center',
resizeMode: 'contain',
 zIndex:2,
   backgroundColor:'#ffffff',
 shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
 elevation: hp('0.5%'),
},
waterDown:{
 width:wp('33%'),
 height:hp('17%'),
borderRadius:10,
borderWidth:1,
borderStyle:'solid',
borderColor:'#666699',
marginLeft:50,
marginRight:20,
alignItems:'center',
resizeMode: 'contain',
 zIndex:2,
  marginTop:20,
   backgroundColor:'#ffffff',
  shadowColor: '#fff',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 1,
  elevation: hp('0.5%'),

},
juice:{
 width:wp('33%'),
 height:hp('17%'),
 borderRadius:10,
borderWidth:1,
 borderStyle:'solid',
borderColor:'#666699',
marginRight:50,
marginLeft:20,
 alignItems:'center',
 resizeMode: 'contain',
  marginRight:90,
  zIndex:2,
   backgroundColor:'#ffffff',
  shadowColor: '#fff',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 1,
  elevation: hp('0.5%'),
},
juiceDown:{
 width:wp('33%'),
 height:hp('17%'),
 borderRadius:10,
borderWidth:1,
 borderStyle:'solid',
borderColor:'#666699',
marginLeft:20,
 alignItems:'center',
 resizeMode: 'contain',
  zIndex:8,
  marginTop:20,
  marginRight:50,
  zIndex:2,
   backgroundColor:'#ffffff',
  shadowColor: '#fff',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 1,
  elevation: hp('0.5%'),
},

title:{
width:wp('80%'),
marginLeft:5,
},
reportCover:{
flexDirection:'row',
justifyContent:'space-around'
},
waterReport:{
 width:wp('45%'),
 height:hp('12%'),
 backgroundColor:'#ffffff',
 marginBottom:50,
 borderRadius:20,
 flexDirection:'column',
 justifyContent:'center',
 alignItems:'center',
 opacity:0.8
},
juiceReport:{
 width:wp('45%'),
 height:hp('12%'),
 backgroundColor:'#ffffff',
 marginBottom:50,
 borderRadius:10,
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
opacity:0.8
},
waterSize:{
 width:60,
 height:60,
 margin:15,
},

waterSizeLoc:{
 width:50,
 height:50,
 margin:15,
 resizeMode:'contain'
},
waterSizeFund:{
 width:50,
 height:50,
 margin:20,
},
waterSizeFundTingg:{
 width:70,
 height:70,
 margin:5,
},
juiceSize:{
 width:80,
 height:80,
 margin:40
}
})
