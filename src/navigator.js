/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import SplaschScreen from './modul/splashScreen'
import HomeScreen from './modul/component'
import AddSeller from './modul/component/Seller/AddSeller'
import AddProduct from './modul/component/Product/AddProduct'
import SellerList from './modul/component/Seller/sellerList'
import DetailSeller from './modul/component/Seller/detailSeller'


const Stack = createStackNavigator();

const navigationScreen = [
  { name: 'SplashScreen', component: SplaschScreen,
    option: { headerTransparent: true },
  },
  { name: 'Home', component: HomeScreen },
  { name: 'AddSellerScreen', component: AddSeller },
  { name: 'AddProductScreen', component: AddProduct },
  { name: 'SellerListScreen', component: SellerList },
  { name: 'DetailSellerScreen', component: DetailSeller }
];

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {navigationScreen.map((pages, idx) => {
        return (
        <Stack.Screen
          key={idx}
          options={{headerShown: false}}
          //options={pages.option}
          {...pages}
        />
      )})}
    </Stack.Navigator>
  );
}

export default AppNavigator;
