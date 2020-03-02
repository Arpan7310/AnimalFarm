import React ,{Component} from 'react'
import {View,Text,Dimensions,ScrollView,Alert}   from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

 class ColonyPage extends Component{



    render(){

        return(
            <ScrollView>
            <View style={{flexDirection:'column',alignItems:'center'}}>
    
    <View style={{width:Dimensions.get('window').width-20,height:150,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center'}}>
   
 
    <Text style={{color:'white',fontSize:24}}>{this.props.navigation.getParam('cName')}</Text>
    <Text style={{color:'white',fontSize:24}}>Breed:{this.props.navigation.getParam('breed')}</Text>
    
    </View>
    
  

    <TouchableOpacity onPress={()=>this.props.navigation.push('ReportDeath',this.props.navigation.getParam('colonyId'))}>

    <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,elevation:5,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
    <Text style={{color:'grey',fontSize:24,padding:30}} >Report Death</Text>
    </View>

    </TouchableOpacity>
   
  <TouchableOpacity onPress={()=>this.props.navigation.push('ReportBirth',{'colonyId':this.props.navigation.getParam('colonyId'),'breederId':this.props.navigation.getParam('_id')})}>
  <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,elevation:5,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
    <Text style={{color:'grey',fontSize:24,padding:30}} >Report Birth</Text>
    </View>
  </TouchableOpacity>
   {this.props.navigation.getParam('neonates').map((x)=>{
     return(
      <TouchableOpacity onPress={() =>
      this.props.navigation.push('WeaningReport',x.id) 
   } >
   <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,elevation:5,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
    <Text style={{color:'grey',fontSize:24,padding:30}} >{'Age: ' + parseInt((new Date().getTime() - new Date(x.dob).getTime()) / (1000*60*60*24)) + ' days'}</Text>
    </View>
   </TouchableOpacity>
   
     )
   })}

    <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,elevation:5,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
    <Text style={{color:'grey',fontSize:24,padding:30}}>Show Previous Records</Text>
    </View>
    </View>
            </ScrollView>
     

        )
    }
}

export default ColonyPage