import React ,{Component} from 'react'
import {Text,View,Dimensions,TextInput,TouchableOpacity} from 'react-native'
class MarketDeath extends Component{


    constructor(){
        super()
        this.state={
            death:null
        }
    }



    render(){
        return(
     <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <View style={{width:Dimensions.get('window').width-20,height:150,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'white',fontSize:24}}>Colony 3</Text>
    <Text style={{color:'white',fontSize:24}}>Type:Harem</Text>
    <Text style={{color:'white',fontSize:24}}>Generation:F1</Text>
   </View>
   <View>
   <TextInput onChange={(e)=>{
       this.setState({
           death:e
       })}} placeholder='no of dead' style={{width:Dimensions.get('window').width-40,borderBottomColor:'grey',margin:10,borderBottomWidth:1}} keyboardType='numeric'/>
   </View>
  
    

    <TouchableOpacity>
    <View style={{width:Dimensions.get('window').width-40,height:50,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>Update</Text>
    </View>
    </TouchableOpacity>
    
    </View>
        )
    }
}

export default MarketDeath