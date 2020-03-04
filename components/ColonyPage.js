import React ,{Component} from 'react'
import {View,Text,Dimensions,ScrollView,Alert}   from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Axios from 'axios';

 class ColonyPage extends Component{
response = {
  cName: '',
  breed: '',
  colonyId: '',
  neonates: []
};


constructor(props){
  super(props)
  this.state={
    x:{},
    y:[],
    btype:null
  }
}
  componentWillMount() {
    Axios.post('https://dod43zkg9b.execute-api.ap-south-1.amazonaws.com/dev/v1/getContainerDetails', this.props.navigation.getParam('qr')).then(res => {
     this.setState({
       x:res.data,
       y:res.data.neonates,
       btype:res.data.breed
     })
    }).catch(err => {
      Alert.alert('Something went wrong', JSON.stringify(err));
      this.props.navigation.pop();
    });
  }

    render(){
        return(
            <ScrollView>
            <View style={{flexDirection:'column',alignItems:'center'}}>
    
    <View style={{width:Dimensions.get('window').width-20,height:150,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center'}}>
   
 
    <Text style={{color:'white',fontSize:24}}>{ this.state.x.cName}</Text>
    <Text style={{color:'white',fontSize:24}}>Breed:{this.state.x.breed}</Text>
    
    </View>
    
  

    <TouchableOpacity onPress={()=>this.props.navigation.push('ReportDeath', this.state.x.colonyId)}>

    <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,elevation:5,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
    <Text style={{color:'grey',fontSize:24,padding:30}} >Report Death</Text>
    </View>

    </TouchableOpacity>
   
  <TouchableOpacity onPress={()=>this.props.navigation.push('ReportBirth',{'colonyId': this.state.x.colonyId, 'breederId': this.state.x['_id']['$oid'],'breedertype':this.state.btype})}>
  <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,elevation:5,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
    <Text style={{color:'grey',fontSize:24,padding:30}} >Report Birth</Text>
    </View>
  </TouchableOpacity>
   {this.state.y.map((x)=>{
     return(
      <TouchableOpacity onPress={() =>
      this.props.navigation.push('WeaningReport',{id: x.id})
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