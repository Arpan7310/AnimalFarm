

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homepage from './Homepage'
import ColonyPage from './ColonyPage'
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
 
const AppNavigator = createStackNavigator(
    {

     
  Dashboard: {
     screen:Homepage,
    
  },
  
 
   ColonyPage:ColonyPage,
   ReportBirth:ReportBirth,
   ReportDeath:ReportDeath,
   Store:Store,
   Selectbreed:Selectbreed,
   Filter:Filter,
   Card:Card,
   Market:Market,
   WeaningReport:WeaningReport,
   Qrcode: Qrcode,
   Addmice:Addmice,
   MarketDeath:MarketDeath,
   Selector:Selector,
   Market:Market,
   CreateColony:CreateColony
  
  
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