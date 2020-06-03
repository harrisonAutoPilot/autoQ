import React, { Component } from 'react';
import TopTabBarJuice from '../components/tabs/topTabBarJuice';
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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;
export default class Spinner extends Component {
 constructor(props) {
     super(props);

     this.state = {
       size: { width, height },
        spinAnim: new Animated.Value(0),
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

                    componentDidMount(){
                     Animated.loop(Animated.timing(
                        this.state.spinAnim,
                      {
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.linear,
                        useNativeDriver: true
                      }
                    )).start();
                     }
  render() {

   const spin = this.state.spinAnim.interpolate({
     inputRange: [0, 1],
     outputRange: ['0deg', '360deg']
   });
    return (
     <View style={styles.container}>

     <Animated.Image
     style={{height:40,width: 40,marginBottom:10,marginTop:15, transform: [{rotate: spin}]}}
    source={require('../assets/maintenancee.png')} />
    </View>

    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {
   flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11,
position:'absolute'
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },

  text: {

    color: '#fff'
  }

});
