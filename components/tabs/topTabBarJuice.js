import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import JuiceOrder from '../../pages/juiceOrder';
import JuiceOrderHistory from '../../pages/juiceOrderHistory'
import TrackWater from '../../pages/trackWater';
import NewOrder from '../../pages/newOrder'
import HeaderLeft from '../header/headerLeft'


const TabScreen = createMaterialTopTabNavigator(
  {
    CREATEORDER: { screen: JuiceOrder  },
    VIEWORDERS: { screen: JuiceOrderHistory  },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e4a26f',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#006000',
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


const TopTabBarJuice = createAppContainer(TabScreen);

export default TopTabBarJuice;
