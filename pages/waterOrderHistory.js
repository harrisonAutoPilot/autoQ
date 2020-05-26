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
import {waterData} from '../utils/water/waterCardData';

class WaterOrderHistory extends React.Component <Props> {
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
     <Image source={require('../assets/flowerB.png')} style={styles.flowerSize}/>
     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center', justifyContent:'center', top:hp('3%')}}>
     </View>

 <View style={styles.content}>
 <ScrollView vertical={true}
 style={styles.scroll}
  ref={(scrollView) => {scrollView = scrollView; }}
 showsVerticalScrollIndicator={false}>
 {
  waterData && waterData.length > 0 && waterData.map(val => {
   return (
    <TouchableOpacity
         onPress={() => this.props.navigation.navigate('WaterDetails')}>
     <View style={styles.listContainer} key={val.id}>
          <View style={styles.avatar}>
                 <Text style={styles.avatarLetter}>{val.ProductInitial}</Text>
          </View>
           <View style={styles.listContent}>
           <View style={styles.firstRow}>
           <Text style={styles.quantityText}>{val.quantity}</Text>
           <Text style={styles.dateText}>{val.date}</Text>
           </View>
               <View style={styles.secondRow}>
                 <Text style={styles.secondRowText}>{val.transCode}</Text>
               </View>
           <View style={styles.thirdRow}>
              <View style={styles.locImg}>
           <Image source={require('../assets/loc.png')} style={styles.locSize}/>
              </View>
              <View style={styles.locText}>
           <Text style={styles.locTextMessage}>{val.deliveryAddress}</Text>
               </View>
           </View>
           </View>

     </View>
     </TouchableOpacity>

    )
      })
    }
 </ScrollView>
     </View>

   </View>



    );
  }
}
export default WaterOrderHistory;

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
top:hp('1%'),
width:wp('100%'),
 height:hp('90%'),
alignItems:'center',
flexDirection:'column'
 },

flowerSize:{
 width:450,
 height:480,
 marginTop:150,
 marginLeft:500,
 backgroundColor:'#fff',
},
listContainer:{
 width:wp('98%'),
height:hp('15%'),
borderStyle:'solid',
borderWidth:0,
borderColor:'gray',
flexDirection:'row',
alignItems:'center'
},
avatar:{
 width:70,
 height:70,
 borderWidth:0,
 borderStyle:'solid',
borderColor:'gray',
margin:2,
borderRadius:100,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#000',
},
listContent:{
 width:wp('74%'),
 height:90,
 borderBottomWidth:0.5,
 borderStyle:'solid',
borderColor:'gray',
margin:1,
},
avatarLetter:{
 fontSize:40,
 alignSelf:'center',
 color:'#e4a26f',
 justifyContent:'center',
 textTransform:'capitalize'
},
firstRow:{
width:wp('70%'),
flexDirection:'row',
justifyContent:'space-around',
margin:1
},
quantityText:{
 fontSize:16,
 fontWeight:'bold',
 color:'#000',
 fontFamily:'serif'
},
dateText:{
fontSize:16,
fontWeight:'bold',
color:'#000',
fontFamily:'serif'

},
secondRow:{
 width:wp('70%'),
 alignItems:'center',
 justifyContent:'center'
},
secondRowText:{
color:'#003300',
fontSize:18,
fontWeight:'bold',

},
thirdRow:{
flexDirection:'row',
width:wp('72%'),
justifyContent:'space-around'
},
locImg:{
 width:10,
},
locSize:{
width:20,
height:20,
},
locText:{
 width:wp('54%'),

},
locTextMessage:{
fontSize:10,
fontWeight:'bold',
fontFamily:'serif'
}
})
