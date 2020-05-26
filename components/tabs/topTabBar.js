import React from 'react';
import {createAppContainer,withNavigation} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import WaterOrder from '../../pages/waterOrder';
import WaterOrderHistory from '../../pages/waterOrderHistory';
import NewOrder from '../../pages/newOrder'
import HeaderLeft from '../header/headerLeft'


const TabScreen = createMaterialTopTabNavigator(
  {
    CREATEORDER: { screen: WaterOrder  },
    VIEWORDERS: { screen: WaterOrderHistory  },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e4a26f',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#000',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
    defaultNavigationOptions: {
       header: null
     },
  }
);





//making a StackNavigator to export as default

const TopTab= createAppContainer(TabScreen);

export default TopTab;
