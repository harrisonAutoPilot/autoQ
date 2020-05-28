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
  Modal,
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
import Select from 'react-native-select-plus';

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
          isVisible: false,
          isVisibleSuccess:false,
          location1: '',
          location2: '',
          location3: '',
          location4: '',
          location5: '',
          value: null,
       items: [
     { key: 1, label: "Abia" },
     { key: 2, label: "Adamawa" },
     { key: 3, label: "Akwa Ibom" },
     { key: 4, label: "Anambra" },
     { key: 5, label: "Magic" },
     { key: 6, label: "Fashion" },
     { key: 7, label: "Building" },
     { key: 8, label: "Art" },
     { key: 9, label: "Academics" },

   ],
 };

 this.onSelectedItemsChange = (key, value) => {
   this.setState({ value: value });
 };

}

saveData2 = ()=>{
      this.setState({
       isVisible:false,
       isVisibleSuccess:true,
      });


}


componentWillMount() {
BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
this.props.navigation.navigate('love');
return true;
}




  render() {
    const {navigate} = this.props.navigation;
    const { value, items } = this.state;
    return (
     <View style={styles.container}>
         <Image source={require('../assets/worker.jpg')} style={styles.flowerSize}/>
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
         onPress = {() => {
         this.setState({ isVisible:!this.state.isVisible})}}>
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
          <TouchableOpacity >

                <View style={styles.waterDown}>
                    <Image source={require('../assets/google-pin1.png')} style={styles.waterSize} />
                    <Text style={{fontSize:12,color:'#666699'}}>Update Location</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity >

                <View style={styles.juiceDown}>
                      <Image source={require('../assets/maintenanceColor.png')} style={styles.waterSizeFund} />
                      <Text style={{fontSize:15,color:'#666699'}}>Get Tools</Text>
                </View>
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
                     <Text style={styles.titleText}>Register Operating State & Locations</Text>
                      <View style={styles.ModalFormContainer}>
                            <Select
                                data={items}
                                style={styles.select}
                                placeholder="Select State"
                                onSelect={this.onSelectedItemsChange.bind(this)}
                                search={true}
                                width={230}
                              />
                            <TextInput
                                style={styles.input1}
                                placeholder='Location One'
                                autoCapitalize="none"
                                placeholderTextColor='gray'
                                onChangeText={(location1Val) =>{
                                this.setState({
                                location1:location1Val,
                                  });
                                  }}
                              value={this.state.location1}
                              />
                              <TextInput
                                  style={styles.input1}
                                  placeholder='Location Two'
                                  autoCapitalize="none"
                                  placeholderTextColor='gray'
                                  onChangeText={(location2Val) =>{
                                  this.setState({
                                  location2:location2Val,
                                    });
                                    }}
                                value={this.state.location2}
                                />
                                <TextInput
                                    style={styles.input1}
                                    placeholder='Location Three'
                                    autoCapitalize="none"
                                    placeholderTextColor='gray'
                                    onChangeText={(location3Val) =>{
                                    this.setState({
                                    location3:location3Val,
                                      });
                                      }}
                                  value={this.state.location3}
                                  />
                                  <TextInput
                                      style={styles.input1}
                                      placeholder='Location Four'
                                      autoCapitalize="none"
                                      placeholderTextColor='gray'
                                      onChangeText={(location4Val) =>{
                                      this.setState({
                                      location4:location4Val,
                                        });
                                        }}
                                    value={this.state.location4}
                                    />
                                    <TextInput
                                        style={styles.input1}
                                        placeholder='Location Five'
                                        autoCapitalize="none"
                                        placeholderTextColor='gray'
                                        onChangeText={(location5Val) =>{
                                        this.setState({
                                        location5:location5Val,
                                          });
                                          }}
                                      value={this.state.location5}
                                      />
                                      <View style={styles.btnContainerPay}>


                                                          <View style={styles.otherServiceBtn}>
                                                          <TouchableOpacity style={styles.bckBtn} onPress = {() => {
                                                              this.setState({ isVisible:false})}}>
                                                          <Text style={{color:'gray', fontSize:10,}}>CANCEL</Text>
                                                          </TouchableOpacity>
                                                          <TouchableOpacity style={styles.bckBtn}  onPress={this.saveData2}>
                                                          <Text style={{color:'gray', fontSize:10,}}>PROCEED</Text>
                                                          </TouchableOpacity>
                                                          </View>



                                      </View>
                      </View>
                </View>
            </View>




      </Modal>

      <Modal
         animationType = {"fade"}
         transparent = {true}
         visible = {this.state.isVisibleSuccess}
         onRequestClose = {() =>{ console.log("Modal has been closed.") } }>


             <View style ={styles.modal} >

                 <View style={styles.selectContainer}>
                     <Image source={require('../assets/smile.png')} style={styles.smileSize}/>
                     <Text style={{alignItems:'center',fontSize:25, color:'#666699', textAlign:'center', fontWeight:'bold', marginTop:20}}>Congratulations!</Text>
                     <Text style={{alignItems:'center',fontSize:15, color:'#666699', textAlign:'center', fontWeight:'bold', marginTop:5, marginBottom:40}}>Registration Completed</Text>
                 </View>
                 <View style={styles.btnContainerPay}>


                                     <View style={styles.otherServiceBtn}>

                                     <TouchableOpacity style={styles.bckBtnClose} onPress = {() => {
                                         this.setState({ isVisibleSuccess:false})}}>
                                     <Text style={{color:'gray', fontSize:13,}}>CLOSE</Text>
                                     </TouchableOpacity>
                                     </View>



                 </View>
             </View>




       </Modal>

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
  input1: {
     width: 230,
     height: 37,
     marginTop:10,
     padding: 3,
     paddingLeft:20,
     color: '#e6e6e6',
     borderStyle:'solid',
     borderColor:'grey',
     fontSize: 15,
     borderWidth:0.7,
     justifyContent:'center',
     borderRadius:3,
     marginLeft:30,
     marginRight:30,
   },
   select:{
   borderRadius:3,
   marginLeft:30,
   marginRight:30,
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
    width:wp('80%'),
    height:hp('13%'),
    position:'absolute',
    top:165,
    justifyContent:'space-around',
    zIndex:14,
    borderRadius:10,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'gray',
    marginRight:30,

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
 width:650,
 height:hp('100%'),
 marginTop:-20,
 marginLeft:750,
 backgroundColor:'#fff',
 zIndex:1,
 opacity:0.1
},
smileSize:{
 width:200,
 height:200,
 marginTop:10,
 resizeMode:'contain',
 alignItems:'center',
 marginLeft:45,
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
 zIndex:12,

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
 width:wp('29%'),
 height:hp('16%'),
borderRadius:10,
borderWidth:1,
borderStyle:'solid',
borderColor:'#666699',
marginLeft:65,
marginRight:10,
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
 width:wp('29%'),
 height:hp('16%'),
borderRadius:10,
borderWidth:1,
borderStyle:'solid',
borderColor:'#666699',
marginLeft:65,
marginRight:10,
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
 width:wp('29%'),
 height:hp('16%'),
 borderRadius:10,
borderWidth:1,
 borderStyle:'solid',
borderColor:'#666699',
marginRight:70,
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
 width:wp('29%'),
 height:hp('16%'),
 borderRadius:10,
borderWidth:1,
 borderStyle:'solid',
borderColor:'#666699',
marginLeft:20,
 alignItems:'center',
 resizeMode: 'contain',
  zIndex:8,
  marginTop:20,
  marginRight:70,
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
titleText:{
 fontSize:18,
 color:'#ff6600',
alignItems:'center',
textAlign:'center',
fontFamily:'roboto',
margin:20,
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
 width:40,
 height:40,
 margin:15,
},

waterSizeLoc:{
 width:40,
 height:40,
 margin:15,
 resizeMode:'contain'
},
waterSizeFund:{
 width:35,
 height:35,
 margin:15,
},
waterSizeFundTingg:{
 width:50,
 height:50,
 margin:10,

},
juiceSize:{
 width:80,
 height:80,
 margin:40
},
modal: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor : "#fff",
  height: 450 ,
  width: '80%',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  marginTop: 105,
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
buttonContainer: {
flexDirection:'row',
width:300,
marginTop:50,
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
color:'#ff6600',
marginTop:-15,
fontSize:10
},
ModalFormContainer:{
flexDirection:'column',
alignItems:'center',
},
btnContainerPay:{
 width:320,
 height:50,
 borderWidth:0,
 borderStyle:'solid',
 borderColor:'#f6f6f6',
 position:'absolute',
 top:300,
 alignItems:'center',
},
otherServiceBtn:{
 width:320,
 height:40,
 alignItems:'center',
 flexDirection:'row',
 justifyContent:'space-evenly'
},
otherServiceBtn1:{
 width:320,
 height:90,
 alignItems:'center',
 flexDirection:'column',


},
otherServiceBtnSer:{
 width:320,
 height:40,
 alignItems:'center',
 flexDirection:'row',
 justifyContent:'space-evenly'

},
bckBtn:{
 width:120,
 height:35,
 backgroundColor:'#fff',
 alignItems:'center',
 justifyContent:'center',
 shadowColor: '#fff',
shadowOffset: { width: 0, height:hp('1.5%') },
shadowOpacity: 2,
shadowRadius: 1,
 elevation: hp('0.8%'),
 alignItems:'center',
 borderRadius:50,
},
bckBtnClose:{
 width:230,
 height:40,
 backgroundColor:'#fff',
 alignItems:'center',
 justifyContent:'center',
 shadowColor: '#fff',
shadowOffset: { width: 0, height:hp('1.5%') },
shadowOpacity: 2,
shadowRadius: 1,
 elevation: hp('0.8%'),
 alignItems:'center',
 borderRadius:50,
 marginTop:30
},

bckBtnP:{
 width:280,
 height:40,
 backgroundColor:'#fff',
 alignItems:'center',
 justifyContent:'center',
 shadowColor: '#fff',
shadowOffset: { width: 0, height:hp('1.5%') },
shadowOpacity: 2,
shadowRadius: 1,
 elevation: hp('0.8%'),
 alignItems:'center',
 borderRadius:50,
 borderColor:'gray',
 flexDirection:'row',
 marginTop:10,
},
})
