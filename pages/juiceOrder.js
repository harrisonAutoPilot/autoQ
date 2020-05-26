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
import Select2 from 'react-native-select-two'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hr from 'react-native-hr-component'
const width = Dimensions.get('window').width;

const mockData = [
  { id: 1, name: "Select Juice ", checked: true }, // set default checked for render option item
  { id: 2, name: "Noni Vitae" },
  { id: 3, name: "Zobo Noni" },

]

class JuiceOrder extends React.Component <Props> {
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









  handleChange = selectedOption => {
     this.setState({ selectedOption });
     console.log(`Option selected:`, selectedOption);
   };
  render() {
    const {navigate} = this.props.navigation;
    const { selectedOption } = this.state;

    return (
     <View style={styles.container}>
      <View style={{borderRadius:100, backgroundColor:'#000',width:80,height:80, position:'absolute',left:40, top:5,zIndex:3,}}>
    <Image source={require('../assets/logo.png')} style={styles. imageSize} />
     </View>
      <Image source={require('../assets/flowerC.png')} style={styles.flowerSize}/>
     <View>
     <Text style={styles.inputext}>Select Juice Category</Text>
        <Select2
             isSelectSingle
              style={styles.input}
             colorTheme="blue"
             popupTitle="Select item"
             title="Select item"
             selectButtonText="Choose"
             cancelButtonText="Cancel"
             searchPlaceHolderText="Please Select the Juice type You want to Buy"
             data={mockData}
             onSelect={data => {
               this.setState({ data })
             }}
             onRemoveItem={data => {
               this.setState({ data })
             }}
           />
     <Text style={styles.inputext}>Quantity</Text>
            <TextInput
              placeholder="Enter Quantity"
              value={this.state.quantity}
              onChangeText={(quantity) => this.setState({ quantity })}
               label='Quantity'
              style={styles.input}
            />

            <Text style={styles.inputext}>Delivery Address</Text>
            <TextInput
              placeholder="Enter Delivery Address"
              value={this.state.address}
              onChangeText={(address) => this.setState({ address })}
              label='Address'

              style={styles.input}
            />
            <Text style={styles.inputext}>Description</Text>
            <TextInput
              placeholder="Additional Details (E.g Phone Number to call When we get there)"
              value={this.state.description}
              onChangeText={(description) => this.setState({ description})}
              label='Description'
              style={styles.input}
            />

            <View style={styles.buttonContainer}>
      <TouchableOpacity

      style={styles.signButton}
      >
      <Text style={{color:'#fff'}}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('Home')}
      style={styles.signButtonC}
      >
      <Text style={{color:'#fff'}}>CANCEL</Text>
      </TouchableOpacity>
      </View>
     </View>


   </View>



    );
  }
}
export default JuiceOrder;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 imageSize:{
 width: 180,
 height:80,
 alignSelf: 'center',
 resizeMode: 'contain',

  },
buttonContainer:{
width:wp('80%'),
flexDirection:'row',
},
signButton: {
backgroundColor:'#009900',
width:wp('40%'),
height:hp('7%'),
alignItems:'center',
justifyContent:'center',
borderTopRightRadius:30,
borderBottomRightRadius:30,
borderBottomLeftRadius:30,
marginRight:10,
marginLeft:20
       },
 signButtonC: {
 backgroundColor:'#009900',
 width:wp('25%'),
 height:hp('7%'),
 alignItems:'center',
 justifyContent:'center',
 borderTopRightRadius:30,
 borderBottomRightRadius:30,
 borderBottomLeftRadius:30,
 marginRight:10,
    },
   input: {
    width: wp('80%'),
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  inputext: {
    width: wp('80%'),
    height:20,
  },
  flowerSize:{
   width:450,
   height:480,
   marginLeft:400,
   backgroundColor:'#fff',
   position:'absolute',
   top:-200,
   left:-230,
  },
})
