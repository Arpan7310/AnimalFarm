import React ,{Component} from 'react'
import PINCode from '@haskkor/react-native-pincode'
import {View,Button,Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
class Store extends Component{

   removeData = async () => {
        try {
            await AsyncStorage.setItem('mykey','cnu');
          Alert.alert('New PinCode created')
        } catch (error) {
          // Error saving data
        }
      };

    render(){
        return(
       <View style={{flex:1}}>
       <PINCode 
             finishProcess={this.removeData}
           
                status={'choose'}
                touchIDDisabled={true}
                /> 
               <Button title='Go back'  onPress={()=>this.props.navigation.navigate('RouterPage')}/>
       </View>
         
          )
    }
}

export default Store