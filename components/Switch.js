import {createSwitchNavigator} from 'react-navigation'
import { createAppContainer } from 'react-navigation';
import Pincode from './Pincode'
import Stack from './Stack'
import React ,{Component} from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import {View} from 'react-native'
import Store from './Store'

import Loginpage from './Loginpage'




const Navigator=createSwitchNavigator({
    Loginpage:Loginpage,
    
    Store:Store,
    Pincode:Pincode,
    Stack:Stack,
},
   {
       initialRouteName:'Loginpage'
   }
  
)




export default createAppContainer(Navigator);