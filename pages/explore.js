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


class Explore extends React.Component <Props> {
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
     <Image source={require('../assets/flowerC.png')} style={styles.flowerSize}/>
     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center', justifyContent:'center', top:hp('3%')}}>


     </View>
     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('1%') }}>
     <View style={{ backgroundColor:'#000',borderRadius:100}}>
    <Image source={require('../assets/logo.png')} style={styles.imageSize} />
    </View>
   </View>


 <View style={styles.content}>
 <ScrollView vertical={true}
 style={styles.scroll}
  ref={(scrollView) => {scrollView = scrollView; }}
 showsVerticalScrollIndicator={false}>
 <View style={{width:width,alignItems:'center' }}><Text style={{fontSize:20,fontFamily:'serif',margin:10, color:'#006600',alignItems:'center', fontWeight:'bold'}}> Tanadi </Text></View>
<View style={styles.aboutComapny}>
<Text style={{fontSize:17,fontFamily:'serif',lineHeight: 25, }}> Tanadi is an agricultural business focused on processing and marketing agricultural products. {'\n'} Our farms in North-central and North-West regions of Nigeria focuses on creating more values to food consumables by improving the quality and quantity of food processes and distributed worldwide.{'\n'} To ensure that health standards are maintained all our products have been approved by The National Agency for Food and Drug Administration and Control in Nigeria.{'\n'} </Text>
</View>
<View style={{width:width, height:50,alignItems:'center',}}><Text style={{fontSize:20,fontFamily:'serif', color:'#006600',alignItems:'center', fontWeight:'bold'}}> Our Products </Text></View>
<View style={styles.waterContainer}>
<Image source={require('../assets/web.png')} style={styles.bigWaterSize} />
</View>
<View style={{width:width, }}><Text style={{fontSize:20,fontFamily:'serif', color:'#006600',alignItems:'center', fontWeight:'bold'}}> Purified water</Text></View>
<View style={styles.aboutWater}>
<Text style={{fontSize:17,fontFamily:'serif',lineHeight: 25,  }}> <Text>Our water is sourced from a natural spring and filtered appropriately. {"    "}Tanadi water is unique because our source is safeguarded from any form of contamination. We produce Sachet, bottled and dispenser water. Our bottled water is in various sizes (25cl, 50cl, 75cl, 1ltr).</Text></Text>
</View>
<View style={styles.juiceContainer}>
<Image source={require('../assets/webb.jpeg')} style={styles.bigJuiceSize} />
</View>
<View style={{width:width, }}><Text style={{fontSize:20,fontFamily:'serif',margin:10, color:'#006600',alignItems:'center', fontWeight:'bold'}}> Organic Noni Fruit</Text></View>
<View style={styles.aboutJuice}>
<Text style={{fontSize:17,fontFamily:'serif', flexDirection:'column',lineHeight: 25,}}> <Text>This is a small evergreen tree in originated from the Pacific Island of Asia. Noni fruits and leaves are taken to boost the immune system. For instance, it was found to have compounds that can prevent, diabetes, high blood pressure, and cancer. It also an antioxidant, that may protect your cells against free radicals, which may play a role in heart disease, cancer, and other diseases. Free radicals are molecules produced when your body breaks down food or when you're exposed to tobacco smoke or radiation. The concentrated Noni drink is extracted from the fruit through its natural fermentation processes.</Text></Text>
</View>


<View style={{width:width,alignItems:'center' }}><Text style={{fontSize:20,fontFamily:'serif',margin:10, color:'#006600',alignItems:'center', fontWeight:'bold'}}> Offices & Factory</Text></View>

<View style={styles.officeContainer}>
     <View style={styles.abujaOffice}>
               <View style={styles.abujaTitile}><Text style={styles.abujaTitleText}>Abuja Office</Text></View>
         <View style={styles.abujaInfo}>
              <View style={styles.loc}>
                  <Image source={require('../assets/pin.png')} style={styles.locImg} />
              </View>
              <View style={styles.addressInfo}>
                       <Text style={styles.addressInfoText}> suite D 16, Emab Plaza, Wuse II Abuja</Text>
              </View>
         </View>

         <View style={styles.abujaTitile}><Text style={styles.abujaTitleText}>Kaduna Office</Text></View>
           <View style={styles.abujaInfo}>
                   <View style={styles.loc}>
                     <Image source={require('../assets/pin.png')} style={styles.locImg} />
                 </View>
              <View style={styles.addressInfoK}>
                    <Text style={styles.addressInfoTextK}>  Suite 8 NNDC mall, Mohammed Buhari way, Kaduna</Text>
              </View>
         </View>
         <View style={styles.abujaTitile}><Text style={styles.abujaTitleText}>Factory</Text></View>
           <View style={styles.abujaInfo}>
                   <View style={styles.loc}>
                     <Image source={require('../assets/pin.png')} style={styles.locImg} />
                 </View>
              <View style={styles.addressInfoF}>
                    <Text style={styles.addressInfoTextF}>Tanadi investment limited Km22, Kaduna - Abuja Express Road, Dutse, Kaduna State.</Text>
              </View>
         </View>


       </View>
</View>
 </ScrollView>
     </View>

   </View>



    );
  }
}
export default Explore;

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
 width: 90,
 height:90,
 alignSelf: 'center',
 resizeMode: 'contain',
  },
 content:{
position:'absolute',
 justifyContent:'center',
top:hp('17%'),
width:wp('100%'),
 height:hp('81%'),
alignItems:'center',
flexDirection:'column',
backgroundColor:'#fff',
 },

flowerSize:{
 position:'absolute',
 width:300,
 height:300,
 left:250,
 backgroundColor:'#fff',
 zIndex:6,
 top:-100,
 opacity:0.4
},
aboutComapny:{
 width:wp('100%'),
height:370,
borderStyle:'solid',
borderWidth:0,
padding:10,

},

aboutWater:{
 width:wp('100%'),
height:220,
borderStyle:'solid',
borderWidth:0,
padding:10,

},
waterContainer:{
 width:390,
 height:180,
 borderStyle:'solid',
 borderWidth:0,
 borderColor:'red',
 flexDirection:'column',
 borderWidth:0,
 borderStyle:'solid',
 margin:10,


},
juiceContainer:{
 width:390,
 height:200,
 borderStyle:'solid',
 borderWidth:0,
 borderColor:'red',
 flexDirection:'column',
 borderWidth:0,
 borderStyle:'solid',
 marginRight:10,
 alignItems:'center'
},
aboutJuice:{
 width:wp('100%'),
height:hp('60%'),
borderStyle:'solid',
borderWidth:0,
padding:10,
},
bigWaterSize:{
 width:390,
 height:190,
 resizeMode:'cover',
 alignSelf:'center'
},
bigJuiceSize:{
 width:380,
 height:190,
 resizeMode:'contain',
 alignItems:'center',
  marginRight:30,
},
officeContainer:{
 width:wp('100%'),
height:hp('60%'),
borderStyle:'solid',
borderWidth:0,
alignItems:'center'
},
abujaOffice:{
 width:400,
 height:280,
 borderWidth:0,
 borderStyle:'solid',
 borderColor:'red',
 marginBottom:10,
 flexDirection:'column',
 alignItems:'center',


},
kadunaOffice:{
 width:400,
 height:150,
 borderWidth:1,
 borderStyle:'solid',
 borderColor:'red',
},
abujaTitile:{
 width:380,
 height:35,
},
abujaTitleText:{
fontSize:15,
fontWeight:'bold',
fontFamily:'serif',
padding:10,
marginLeft:20
},
abujaInfo:{
 width:380,
 height:65,
 borderBottomWidth:0,
 borderStyle:'solid',
 borderBottomColor:'gray',
 flexDirection:'row',
  backgroundColor:'#f4f4f4',
  opacity:0.8,



},
loc:{
 width:40,
 height:20,
 alignItems:'center',
  marginLeft:20
},
locImg:{
 width:25,
 height:30,
 resizeMode:'contain',
 marginTop:4,


},
addressInfo:{
 width:330,
 height:70,
alignItems:'center',
marginRight:20

},
addressInfoK:{
 width:300,
 height:90,
alignItems:'center',
 marginRight:40
},
addressInfoText:{
fontSize:15,
fontWeight:'bold',
fontFamily:'serif',
alignItems:'center',
paddingTop:5,
textAlign:'center',
marginRight:15,
},
addressInfoTextK:{
fontSize:14,
fontWeight:'bold',
fontFamily:'serif',
justifyContent:'center',
textAlign:'center',
paddingTop:5,
},
addressInfoF:{
 width:300,
 height:100,
alignItems:'center',
 marginRight:20
},
addressInfoTextF:{
fontSize:14,
fontWeight:'bold',
fontFamily:'serif',
justifyContent:'center',
textAlign:'center',
marginRight:10,
},
})
