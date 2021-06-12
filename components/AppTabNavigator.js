import * as React from 'react'
import {Image} from 'react-native'
import HomeScreen from "../screens/HomeScreen"
import ExchangeScreen from "../screens/ExchangeScreen"
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const AppTabNavigator = createBottomTabNavigator({
   HomeScreen:{screen:HomeScreen}, 
    ExchangeScreen:{screen:ExchangeScreen}
})