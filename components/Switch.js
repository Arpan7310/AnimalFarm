import {createSwitchNavigator} from 'react-navigation'
import { createAppContainer } from 'react-navigation';
import Pincode from './Pincode'
import Stack from './Stack'
import React ,{Component} from 'react'

import {View, AsyncStorage} from 'react-native'
import Store from './Store'
import RouterPage from './RouterPage'




const Navigator=createSwitchNavigator({
    RouterPage:RouterPage,
    Store:Store,

    Pincode:Pincode,
    Stack:Stack,
},
   {
       initialRouteName:'RouterPage'
   }
  
)




export default createAppContainer(Navigator);