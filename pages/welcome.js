import  React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Animated,
  BackHandler,
  Easing,
  Image,
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
import Carousel from 'react-native-looped-carousel-improved';
import VSmallLogo from '../components/logo/vSmallLogo'
import RBSheet from "react-native-raw-bottom-sheet";
import Search from './search';
import SearchWorker from './searchWorker'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


 class Welcome extends React.Component <Props> {
  constructor(props) {
      super(props);

      this.state = {
        size: { width, height },
      };
    }
   static navigationOptions = {
       //To hide the NavigationBar from current Screen
       header: null,
     };
     _onLayoutDidChange = (e) => {
       const layout = e.nativeEvent.layout;
       this.setState({ size: { width: layout.width, height: layout.height,borderTopRightRadius:50,borderBottomRightRadius:50,left:2 } });
     }


   render() {
    const {navigate} = this.props.navigation;

    return (
     <View style={styles.container}>
     <View style={{width:width, }}>
  <VSmallLogo />
  </View>
     <View style={styles.contain}>
     <View style={styles.leftContainer}>
     <View style={styles.cover} onLayout={this._onLayoutDidChange}>
             <Carousel
               delay={5000}
               style={this.state.size}
               autoplay
               // pageInfo
               isLooped
               // onAnimateNextPage={(p) => console.log(p)}
             >
               <View style={[{borderTopRightRadius:50,borderBottomRightRadius:50, alignItems:'center',zIndex:330, justifyContent:'center' }, this.state.size]}><Text style={{color:'#666699',fontSize:30, fontWeight:'bold'}}><Text style={{color:'#ff6600'}}>Find</Text> Spare Parts @ Best Prices</Text></View>
               <View style={[{borderTopRightRadius:50,borderBottomRightRadius:50, alignItems:'center',zIndex:330, justifyContent:'center' }, this.state.size]}><Text style={{color:'#666699',fontSize:37, fontWeight:'bold'}}><Text style={{color:'#ff6600'}}>Get</Text> Mechanic Close to You</Text></View>
               <View style={[{borderTopRightRadius:50,borderBottomRightRadius:50, alignItems:'center',zIndex:330, justifyContent:'center'}, this.state.size]}><Text style={{color:'#666699',fontSize:35, fontWeight:'bold'}}><Text style={{color:'#ff6600'}}>Get</Text> Car Electrician Anywhere You are</Text></View>
               <View style={[{borderTopRightRadius:50,borderBottomRightRadius:50, alignItems:'center',zIndex:330, justifyContent:'center' }, this.state.size]}><Text style={{color:'#666699',fontSize:37, fontWeight:'bold'}}><Text style={{color:'#ff6600'}}>Find</Text> Nearest Panel Beater</Text></View>
             </Carousel>
           </View>
     </View>
     <View style={styles.rightContainer}><Image source={require('../assets/worker.jpg')} style={styles.workerSize}/></View>



     </View>
    <View style={styles.bottomButton}>

              <TouchableOpacity
                  style={styles.circle}
                  onPress={() => this.props.navigation.navigate('Login')}>
              <View  >
              <Image source={require('../assets/login.png')} style={styles.iconSize}  />
              <Text style={styles.buttonText}>Login</Text>
              </View>
</TouchableOpacity>
                        <TouchableOpacity
                            style={styles.circleMid}
                            onPress={() => this.RBSheet.open()}>

                        <View  >
                        <Image source={require('../assets/spaner.png')} style={styles.iconParts}  />
                        <Text style={styles.buttonText}>Find Spare Parts</Text>
                        </View>
                    </TouchableOpacity>

                              <TouchableOpacity
                                  style={styles.circle}
                                  onPress={() => this.RBSheetWorker.open()}>
                              <View  >
                              <Image source={require('../assets/female.png')} style={styles.iconWorker}  />
                              <Text style={styles.buttonTextWorker}>Find Worker</Text>
                              </View>
                          </TouchableOpacity>
    </View>
    <RBSheet
      ref={ref => {
        this.RBSheet = ref;
       const {navigate,} = this.props.navigation;

      }}
      height={300}
      duration={250}
      customStyles={{
        container: {
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius:30,
          borderTopLeftRadius:30,
        }
      }}
    >


                 <Search
                 navigation={this.props.navigation}



                 />




    </RBSheet>

    <RBSheet
      ref={ref => {
        this.RBSheetWorker = ref;
       const {navigate,} = this.props.navigation;

      }}
      height={300}
      duration={250}
      customStyles={{
        container: {
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius:30,
          borderTopLeftRadius:30,
        }
      }}
    >


                 <SearchWorker
                 navigation={this.props.navigation}



                 />




    </RBSheet>
   </View>

  );
 }
 }
 export default Welcome;



const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
 position:'absolute',
 flex:1,
 alignItems:'center',
},
title:{
position:'absolute',
flexDirection:'row',
top:15,
zIndex:50,
justifyContent:'flex-start',
width:wp('100%'),
left:30,
},
titleText:{
 fontSize:25,
 color:'#666699',
 fontWeight:'bold'
},
contain:{
flexDirection:'row',
 width :width,
 height:height,
position:'absolute',
flex:1,
 zIndex:1,
 alignItems:'center',
  backgroundColor:'#ffffff',
},
leftContainer:{
 width:wp('100%'),
 height:hp('80%'),
 backgroundColor:'#fff',
 flexDirection:'column',
marginTop:hp('10%'),
 zIndex:4,
 position:'absolute',
 left:-170,
 borderTopRightRadius:2000,
 borderBottomRightRadius:2000,
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'row',
 opacity:0.9,
 zIndex:8,

},

rightContainer:{
 width:wp('50%'),
 height:hp('100%'),
backgroundColor:'#fff',
 position:'absolute',
 right:0,
 flexDirection:'column',
 zIndex:1,

},

circle:{
 width:80,
 height:80,
  backgroundColor:'#fff',
 borderRadius:100,
  alignItems:'center',
  justifyContent:'center',
  resizeMode: 'contain',
   shadowColor: '#000',
   shadowOffset: { width: 0, height:hp('0.5%') },
   shadowOpacity: 2,
   shadowRadius: 2,
   elevation: hp('0.5%'),
   flexDirection:'row',
   opacity:0.9,
   zIndex:2000,
},
circleMid:{
 width:120,
 height:120,
 backgroundColor:'#fff',
 borderRadius:100,
  alignItems:'center',
  justifyContent:'center',
  resizeMode: 'contain',
   shadowColor: '#000',
   shadowOffset: { width: 0, height:hp('0.5%') },
   shadowOpacity: 2,
   shadowRadius: 2,
   elevation: hp('0.5%'),
   flexDirection:'row',
   opacity:0.8,
     zIndex:8,
     marginBottom:90,
     marginLeft:20,
     marginRight:20

},

circleDown:{
 width:100,
 height:100,
 backgroundColor:'#fff',
 borderRadius:100,
  position:'absolute',
  top:hp('60%'),
   left:wp('18%'),
  alignItems:'center',
  justifyContent:'center',
  resizeMode: 'contain',
   shadowColor: '#000',
   shadowOffset: { width: 0, height:hp('0.5%') },
   shadowOpacity: 2,
   shadowRadius: 2,
   elevation: hp('0.5%'),
   flexDirection:'column',
opacity:0.9,
  zIndex:8,
},
iconSize:{
width:20,
height:20,
marginBottom:5,
marginLeft:20,
marginRight:20,
justifyContent:'center',
alignItems:'center',
},
iconWorker:{
width:45,
height:45,
marginBottom:-5,
marginLeft:20,
marginRight:20,
justifyContent:'center',
alignItems:'center',
},
iconParts:{
width:70,
height:70,
marginLeft:25,
marginRight:25,
marginBottom:-5,
justifyContent:'center',
alignItems:'center',
},
iconSizeD:{
width:50,
height:50,
marginLeft:25,
},
buttonText:{
 fontSize:10,
 color:'#666699',
 textAlign:'center'
},
buttonTextWorker:{
 fontSize:10,
 color:'#666699',
 textAlign:'center'
},
companyName:{
 position:'absolute',
 width:wp('30%'),
 height:hp('100%'),
 right:10,
 flexDirection:'column',
 alignItems:'center',
 justifyContent:'space-between',
 zIndex:8,
},
letterContainer:{
 width:wp('30%'),
 height:hp('60%'),
flexDirection:'column',
 position:'absolute',
alignItems:'center',
top:10,
justifyContent:'space-around',
marginTop:70,

},
companyLetter:{
 fontSize:63,
 fontWeight:'bold',
 fontFamily:'serif',
 color:'#e4a26f',

},
logoContainer:{
 width:110,
 height:110,
  position:'absolute',
 top:hp('76%'),
 alignItems:'center',
 backgroundColor:'#000',
 borderRadius:100,
 justifyContent:'center',
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'column',
 opacity:0.9,
},
logoSize:{
 width:150,
 height:150,
 alignSelf:'center',
resizeMode: 'contain',
},
workerSize:{
 width:450,
 height:hp('100%'),
 marginRight:1500,
 backgroundColor:'#fff'
},
contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover:{
   width:wp('50%'),
   height:hp('45%'),
   zIndex:300,
borderRadius:20,
position:'absolute',
top:hp('15%'),
left:wp('50%'),
},
bottomButton:{
 width:wp('80%'),
position:'absolute',
top:hp('75%'),
flexDirection:'row',
zIndex:1000,
justifyContent:'space-around'
}


})
