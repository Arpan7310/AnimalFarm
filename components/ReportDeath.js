import React ,{Component} from 'react'
import {View,Text,Dimensions,TextInput,TouchableOpacity,CheckBox} from 'react-native'
import { RadioButton } from 'react-native-paper';

class ReportDeath extends Component{

constructor(props){
    super(props);
    this.state={
        checked:'first',
        death:null,
        type:"",
        bool:false
    }
}


    render(){
        const { checked } = this.state; 
        return(
 <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    
    <View style={{width:Dimensions.get('window').width-20,height:150,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center'}}>
    
    <Text style={{color:'white',fontSize:24}}>Colony 3</Text>
    <Text style={{color:'white',fontSize:24}}>Type:Harem</Text>
    <Text style={{color:'white',fontSize:24}}>Generation:F1</Text>
   </View>
   <View>
   <View style={{flexDirection:'row',alignItems:'center',marginRight:120}}>
          <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' ,type:'Sire',death:1,bool:false}) }}
        color='#7189FF'
          />
          <Text  style={{color:'grey'}}>Sire</Text>
          </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second',type:'Dame',bool:true }); }}
          color='#7189FF'
        /> 
        <Text  style={{color:'grey'}}>Dame</Text>
        <RadioButton
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'third', type:'Neo',bool:true }); }}
          color='#7189FF'
        /> 
        <Text  style={{color:'grey'}}>Neo</Text>
        </View>
   <TextInput   editable={this.state.bool} 
  
   onChange={(e)=>this.setState({
       death:e })} 
          placeholder="enter dead" style={{width:Dimensions.get('window').width-40,borderBottomColor:'grey',margin:10,borderBottomWidth:1}} keyboardType='numeric'/>
   </View>
  
    

   
    
    
    
   <TouchableOpacity style={{margin:25}}>
    <View style={{width:Dimensions.get('window').width-40,height:50,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>Update</Text>
    </View>
      </TouchableOpacity>
    </View>
        )
    }
}

export default ReportDeath