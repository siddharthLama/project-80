import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import SignupLoginScreen from "./screens/SignupLoginScreen"
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/ExchangeScreen';
import SettingScreen from './screens/SettingScreen';
import {AppTabNavigator} from './components/AppTabNavigator'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CustomSideBarMenu from './components/CustomSideBarMenu'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const switchNavigator = createSwitchNavigator({
  SignupLoginScreen:{screen:SignupLoginScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})
const AppContainer = createAppContainer(switchNavigator)