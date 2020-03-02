import React ,{Component} from 'react'
import PINCode from '@haskkor/react-native-pincode'
import {View,Button} from 'react-native'
class Pincode extends Component{

    
    render(){
        return(
           <View style={{flex:1}}>
           <PINCode 
             status={'enter'} 
             finishProcess={() =>this.props.navigation.navigate('Dashboard')} />
            <Button title="Go Back" onPress={()=>this.props.navigation.navigate('RouterPage')} />
           </View>
           
         
             )

    }
}

export default Pincode