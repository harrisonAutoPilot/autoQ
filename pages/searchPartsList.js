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
import {juiceData} from '../utils/juice/juiceCardData';

class SearchPartsList extends React.Component <Props> {

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
     <View style={styles.title}>
     <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Welcome')}>
      <Image source={require('../assets/Back_100.png')} style={styles.backSize}/>
       </TouchableOpacity>
      <Text style={styles.titleText}>Result For Spare Parts</Text>
     </View>
     <Image source={require('../assets/worker.jpg')} style={styles.flowerSize}/>
     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center', justifyContent:'center', top:hp('3%')}}>
     </View>

 <View style={styles.content}>
 <ScrollView vertical={true}
 style={styles.scroll}
  ref={(scrollView) => {scrollView = scrollView; }}
 showsVerticalScrollIndicator={false}>
 {
  juiceData && juiceData.length > 0 && juiceData.map(val => {
   return (
    <TouchableOpacity
         onPress={() => this.props.navigation.navigate('SearchDetails')}>
     <View style={styles.listContainer} key={val.id}>
          <View style={styles.avatar}>
                 <Text style={styles.avatarLetter}>{val.ProductInitial}</Text>
          </View>
           <View style={styles.listContent}>
           <View style={styles.firstRow}>
           <Text style={styles.quantityText}>{val.parts}</Text>
           <Text style={styles.dateText}>{val.condition}</Text>

           </View>
               <View style={styles.secondRow}>
                 <Text style={styles.secondRowText}>₦{val.transCode}</Text>
               </View>
           <View style={styles.thirdRow}>
              <View style={styles.locImg}>
           <Image source={require('../assets/pin.png')} style={styles.locSize}/>
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
export default SearchPartsList;

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
  title:{
   flexDirection:'row',
   position:'absolute',
   width:wp('100%'),
   height:70,
   top:-1,
   backgroundColor:'#666699',
    alignItems:'center',
    justifyContent:'space-between',
    resizeMode: 'contain',
     shadowColor: '#000',
     shadowOffset: { width: 0, height:hp('0.5%') },
     shadowOpacity: 2,
     shadowRadius: 2,
     elevation: hp('0.9%'),
     flexDirection:'row',
  },
  titleText:{
   marginRight:110,
   fontSize:15,
   color:'#fff',
   fontWeight:'bold'
  },
  backSize:{
   width:25,
   height:25,
   marginLeft:20
  },
 content:{
position:'absolute',
 justifyContent:'center',
top:75,
width:wp('100%'),
 height:hp('85%'),
alignItems:'center',
flexDirection:'column'
 },

flowerSize:{
 width:450,
 height:hp('100%'),
opacity:0.3,
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
backgroundColor:'#666699',
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
 fontSize:10,
 alignSelf:'center',
 color:'#fff',
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
 fontSize:15,
 color:'#006600',
fontFamily:'roboto'
},
dateText:{
fontSize:14,
fontWeight:'bold',
color:'#ff6600',
fontFamily:'roboto',
textTransform:'capitalize'

},
secondRow:{
 width:wp('70%'),
 alignItems:'center',
 justifyContent:'center'
},
secondRowText:{
color:'#006600',
fontSize:15,
fontFamily:'roboto'

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
fontSize:12,
color:'#000',
fontFamily:'roboto'
}
})
