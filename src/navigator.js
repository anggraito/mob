/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import SplaschScreen from './modul/splashScreen'
import HomeScreen from './modul/component';
import ListPokemon from './modul/component/pokemon';
import ListItem from './modul/component/item';
import DetailPokemon from './modul/component/pokemon/detailPokemon';
import DetailItem from './modul/component/item/detailItem';


const Stack = createStackNavigator();

const navigationScreen = [
  { name: 'SplashScreen', component: SplaschScreen,
    option: { headerTransparent: true },
  },
  { name: 'Home', component: HomeScreen },
  { name: 'Pokemon', component: ListPokemon },
  { name: 'Potion', component: ListItem },
  { name: 'DetailPokemon', component: DetailPokemon },
  { name: 'DetailPotion', component: DetailItem }
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
