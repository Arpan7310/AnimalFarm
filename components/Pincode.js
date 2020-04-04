import React ,{Component} from 'react'
import PINCode from '@haskkor/react-native-pincode'
import {View,Button,Text,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Card from './Card'
import AsyncStorage from '@react-native-community/async-storage'
class Pincode extends Component{




  constructor(){

    super()
    this.state={

      rpin:''
    }
  }



  componentWillMount () {
    this.props.navigation.addListener('willFocus', async  e =>{
        
      try{
        this.setState({
          rpin:await AsyncStorage.getItem('mykey')
      })
             
         }
           catch(err){
            Alert.alert(JSON.stringify(err))
           }
  
  })
       
  }
  
  

  
    render(){
        return(
           <View style={{flex:1}}>
           <PINCode 
             status={'enter'} 
             finishProcess={() =>this.props.navigation.navigate('Dashboard')} 
             storedPin={this.state.rpin}
            />
           
           </View>
           
         
             )

    }
}

export default Pincode