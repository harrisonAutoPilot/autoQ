

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Welcome from './pages/welcome';
import Login from './pages/Login';
import SignUp from './pages/signup';
import Explore from './pages/explore';
import Home from './pages/home';
import Water from './pages/water';

import JuiceOrder from './pages/juiceOrder';
import Juice from './pages/juice';
import NewOrder from './pages/newOrder';
import Profile from './pages/profile';
import WaterOrder from './pages/waterOrder';
import WaterOrderHistory from './pages/waterOrderHistory';
import JuiceOrderHistory from './pages/juiceOrderHistory';
import TrackWater from './pages/trackWater';
import JuiceDetails from './pages/juiceDetails'
import SearchDetails from './pages/searchDetails'
import WaterDetails from './pages/waterDetails';
import WorkerDetails from './pages/workerDetails';
import TopTab from './components/tabs/topTabBar'
import  Search from './pages/search'
import  SearchPartsList from './pages/searchPartsList'
import  SearchWorkerList from './pages/searchWorkerList'
import TopTabBarJuice from './components/tabs/topTabBarJuice'
import {createMaterialTopTabNavigator,} from 'react-navigation-tabs';
import {createStackNavigator,} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';


const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
  SignUp: {screen: SignUp},
   Profile: {screen:Profile},
   NewOrder: {screen:NewOrder},
  Explore: {screen: Explore},
  Search: {screen: Search},
 WaterDetails: {screen: WaterDetails},
  WaterOrder:WaterOrder,
  JuiceDetails:{screen:JuiceDetails},
  SearchDetails:{screen:SearchDetails},
  WorkerDetails:{screen:WorkerDetails},
  Home: {screen:Home},
  SearchWorkerList: {screen:SearchWorkerList },
  SearchPartsList: {screen:SearchPartsList },
  WaterOrderHistory: {screen:WaterOrderHistory},
  Juice: {screen:TopTabBarJuice},
  JuiceOrderHistory:{screen:JuiceOrderHistory},

      Water: {
        screen: TopTab,
      },
    },{
      defaultNavigationOptions: {
        header: null
      },





},


);





const App = createAppContainer(MainNavigator);

export default App;
