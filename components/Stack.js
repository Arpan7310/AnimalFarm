

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homepage from './Homepage'
import BreederPage from './BreederPage'
import Qrcode from './Qrcode'
import ReportDeath from './ReportDeath'
import ReportBirth from './ReportBirth'
import Store from './Store'
import Selectbreed from './Selectbreed'
import Filter from './Filter'
import Card from './Card'
import Market from './Market'
import WeaningReport from './WeaningReport'
import Addmice from './Addmice'
import MarketDeath from './MarketDeath'
import Selector from './Selector'
import CreateColony from './CreateColony'
import AddDame from './AddDame'
 import Temporary from './Temporary'
import {AppRegistry} from 'react'
const AppNavigator = createStackNavigator(
    {

     
  Dashboard: Homepage,
  
   Card:Card,
   BreederPage:BreederPage,
   ReportBirth:ReportBirth,
   ReportDeath:ReportDeath,
   Store:Store,
   Selectbreed:Selectbreed,
   Filter:Filter,
  
   Market:Market,
   WeaningReport:WeaningReport,
   Qrcode: Qrcode,
   Addmice:Addmice,
   MarketDeath:MarketDeath,
   Selector:Selector,
   Market:Market,
   CreateColony:CreateColony,
   AddDame:AddDame,
   Temporary:Temporary,
  
  
  
},{
 defaultNavigationOptions:{
    headerStyle:{
        backgroundColor:'#7189FF'
        
    } ,
    headerTintColor:'white',
    headerTitleAlign:'center'

 }
}
);

export default createAppContainer(AppNavigator);