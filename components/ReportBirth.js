import React ,{Component} from 'react'
import {View,Text,Dimensions,TextInput,TouchableOpacity, Alert} from 'react-native'
import DatePicker from 'react-native-datepicker'
import Axios from 'axios'
class ReportBirth extends Component{




constructor(){
    super();
    this.state = {
      date:"2016-05-15",
      neocount:null
  }
}
    render(){
        return(
<View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    
    <View style={{width:Dimensions.get('window').width-20,height:150,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center'}}>
    
    <Text style={{color:'white',fontSize:24}}>{this.props.navigation.getParam('colonyId')}</Text>
   
    <Text style={{color:'white',fontSize:24}}>Generation:F1</Text>
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
       <Text style={{color:'white',fontSize:24}}>DOB</Text>
    <DatePicker
        style={{width: 190,marginRight:1,marginLeft:1}}
        date={this.state.date}
       mode='date'
        placeholder="select date"
        format="YYYY-MM-DD"
    
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft:28,
           
          borderColor:'#7189FF'
          },
          dateInput: {
        
            borderColor:'#7189FF',
            
          },
          
        
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
     
    </View>
   
   </View>
   <View>
   <TextInput  placeholder='no of dead' style={{width:Dimensions.get('window').width-40,borderBottomColor:'grey',margin:10,borderBottomWidth:1}} keyboardType='numeric'
    onChangeText={ (e)=>
   this.setState({
  neocount:e

   })
   }/>
   </View>
    

    <TouchableOpacity
    
    onPress={ () =>{
    
    try {
    let data = {'dob': new Date(),'neocount':this.state.neocount,'colonyId':this.props.navigation.getParam('colonyId'),"breed": "BALB/c",'breeder_id': this.props.navigation.getParam('breederId')['$oid']};
    Alert.alert('sdf',JSON.stringify(data));
    Axios.post('https://dod43zkg9b.execute-api.ap-south-1.amazonaws.com/dev/v1/reportBirth', data).then(res => {
    {/* Alert.alert('Death count recorded!'); */}
    }).catch(err => {
      {/* Alert.alert('request failed', err.message); */}
    });
    }
    catch (err) {

      Alert.alert(err)
    }
 }
   } >
    <View style={{width:Dimensions.get('window').width-40,height:50,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>Update</Text>
    </View>
    </TouchableOpacity>
    
    </View>
    
        )
    }
}

export default ReportBirth