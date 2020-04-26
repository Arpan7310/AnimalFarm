import React ,{Component} from 'react'
import {View,Text,Dimensions,ScrollView,Alert,ActivityIndicator}   from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Axios from 'axios';
import url from './Url';
 class BreederPage extends Component{
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
 
  this.props.navigation.addListener('willFocus', e =>{
    Axios.post( url+'getContainerDetails', this.props.navigation.getParam('qr')).then(res => {

      this.setState({
          x:res.data,
          y:res.data.neonates,
          btype:res.data.breed
        })
    
      
       }).catch(err => {
         Alert.alert('Something went wrong', JSON.stringify(url));
       //this.props.navigation.pop();
       });
  })  
  }

Card (text,route){

  return(
 <TouchableOpacity onPress={()=>this.props.navigation.push(route)}>
 <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
 <Text style={{color:'grey',fontSize:24,padding:30}}>{text}</Text>
 </View>
 </TouchableOpacity>
  )

}
   render(){
       return(
    <View style={{flexDirection:'column',alignItems:'center'}}>
    <View style={{width:Dimensions.get('window').width-20,height:150,backgroundColor:'#7189FF',
    flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center',
    position:'absolute',elevation:1}}>
    <Text style={{color:'white',fontSize:24}}>{this.state.x.cName}</Text>
    <Text style={{color:'white',fontSize:24}}>Breed:{this.state.x.breed}</Text>
     </View>
   
   <ScrollView style={{marginTop:180}}>
  
   {this.Card('ReportDeath','ReportDeath')}
   {this.Card('ReportBirth','ReportBirth')}

   {this.state.y.map((x)=>{
     return(
      <TouchableOpacity onPress={() =>
      this.props.navigation.push('Addmice',{'id': x.batchId,'colonyId': this.state.x.colonyId,'breederId':this.state.x['_id']})
   }>
    <View style={{width:Dimensions.get('window').width-20,height:100,borderRadius:20,alignItems:'center',margin:15,backgroundColor:'white',borderColor:'grey',borderWidth:0.2}}>
    <Text style={{color:'grey',fontSize:24,padding:30}} >{'Age: ' + parseInt((new Date().getTime() - new Date(x.dob).getTime()) / (1000*60*60*24)) + ' days'}</Text>
    </View>
    </TouchableOpacity>
   
     )   
   })}
  </ScrollView>


    </View>
            
     

        )
    }
}

export default BreederPage