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
  Modal,
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
import Spinner from './spinner'
import AsyncStorage from '@react-native-community/async-storage';


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
          isVisibleSpinner:false,
          car_type1: this.props.car_type,
          check:[],
          //parts_name1:this.props.value,
       }


}


          componentDidMount() {
             this.saveData();
           }


 saveData = ()=>{
         console.log('New check Car', this.state.newCarType)
        const {value,parts} = this.state;
           this.setState({ isVisibleSpinner:true})
        const requestOptions = {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              car_type: this.props.navigation.getParam('car_type', this.state.car_type),
              parts_name: this.props.navigation.getParam('parts_name1', this.state.parts_name),
              })
        };
        fetch('http://0886d79e2291.ngrok.io/getSpareParts', requestOptions)
        .then(async response => {
            const data = await response.json();
               console.log('this Love SearchPartsList Page', data);
               this.setState({
                 check:data
                })
               console.log('just to harry', this.state.check.user);
                let id = data && data.user.id;
                let parts_name =  data && data.user.parts_name;
                let description =  data && data.user.description;


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
      const { navigation } = this.props;
      // const {harry} = this.state.check.user;
      // console.log('jimmy',harry);

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
  this.state.check.user && this.state.check.user.length > 0 && this.state.check.user.map(val => {
   return (
    <TouchableOpacity
       key={val.id} id={val.id}
         onPress={() => this.props.navigation.navigate('SearchDetails', val)}>
     <View style={styles.listContainer} >
          <View style={styles.avatar}>
                 <Text style={styles.avatarLetter}>{val.seller_state}</Text>
          </View>
           <View style={styles.listContent}>
           <View style={styles.firstRow}>
           <Text style={styles.quantityText}>{val.parts_name}</Text>
           <Text style={styles.dateText}>{val.parts_status}</Text>

           </View>
               <View style={styles.secondRow}>
                 <Text style={styles.secondRowText}>₦{val.price}</Text>
               </View>
           <View style={styles.thirdRow}>
              <View style={styles.locImg}>
           <Image source={require('../assets/pin.png')} style={styles.locSize}/>
              </View>
              <View style={styles.locText}>
           <Text style={styles.locTextMessage}>{val.seller_address}</Text>
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
 width:650,
 height:hp('100%'),
opacity:0.3,
 marginLeft:700,
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
