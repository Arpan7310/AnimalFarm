import React , {Component} from 'react'
import {View,Text,Dimensions,TouchableOpacity} from 'react-native'


class Card extends Component{


    render(){
        return(
           
            <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
           <Text style={{color:'grey',fontSize:24,padding:30}}>{this.props.text} </Text>
            </View>
   
        
        )
    }
}

export default Card
