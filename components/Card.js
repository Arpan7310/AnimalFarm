import React , {Component} from 'react'
import {View,Text,Dimensions,TouchableOpacity} from 'react-native'


class Card extends Component{

ob=this.props.text;



    render(){
        console.log(this.props)
        return(
           <TouchableOpacity onPress={()=>this.props.navigation.push(this.props.route)}>
        <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
         <Text style={{color:'grey',fontSize:24,padding:30}}>{this.ob} </Text>
        </View>
        </TouchableOpacity>
         )
    }
}

export default Card
