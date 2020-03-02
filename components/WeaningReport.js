import React ,{Component} from 'react'
import {Text,View,Dimensions,TouchableOpacity,Modal,TouchableHighlight,Alert,pageSheet,formatSheet} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import Axios from 'axios'
class WeaningReport extends Component{


    


 



    constructor(){
        super()
       
        this.state={
            modalVisible: false,
    
        }
    }

    onSuccess =(e)=> {
        let body = JSON.parse(e.data);
        if (body.type == 'S' || body.type == 'M'){
            this.props.navigation.push('Addmice');
        }
    }
 
    setModalVisible =(visible) => {
        this.setState(
            {modalVisible: visible},
           
            );
      }

     

    render(){
      
   return(
     <View>
      
     <View style={{width:Dimensions.get('window').width,height:180,borderWidth:0.2,borderColor:'grey',elevation:5,marginRight:15,marginTop:35}}>
     
     
         <Text style={{marginLeft:110,fontSize:20,color:'grey'}}>Add To Market</Text>
         <View style={{flexDirection:'row'}}>
      
     <TouchableOpacity onPress={()=> this.setModalVisible(!this.state.modalVisible)} >
      <View style={{width:100,height:100,backgroundColor:'#7189FF',borderRadius:5,margin:35}}>
          <Text style={{color:'white',margin:20}}>0 Male</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> this.setModalVisible(!this.state.modalVisible)} >
      <View style={{width:100,height:100,backgroundColor:'#FF92F4',borderRadius:5,margin:35}} >
       <Text  style={{color:'white',padding:20}}>0 Female</Text>
      </View>
      </TouchableOpacity>
       </View>
       </View>
    
       <View style={{width:Dimensions.get('window').width,height:180,borderWidth:0.2,borderColor:'grey',elevation:5,marginRight:15,marginTop:35}}>
     <Text style={{marginLeft:110,fontSize:20,color:'grey'}}>Add To Selection</Text>
     <View style={{flexDirection:'row'}}>
  
 <TouchableOpacity onPress={()=> this.setModalVisible(!this.state.modalVisible)} >
  <View style={{width:100,height:100,backgroundColor:'#7189FF',borderRadius:5,margin:35}} >
      <Text style={{color:'white',margin:20}}>0 Male</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> this.setModalVisible(!this.state.modalVisible)} >
  <View style={{width:100,height:100,backgroundColor:'#FF92F4',borderRadius:5,margin:35}}>
   <Text  style={{color:'white',padding:20}}>0 Female</Text>
  </View>
  </TouchableOpacity>
   </View>
   </View>
  
   <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.'),
            this.setModalVisible(!this.state.modalVisible)
          }}>
         
      <QRCodeScanner
        onRead={this.onSuccess}
        reactivate={true}
       
          />
       </Modal>
   
  
        <TouchableOpacity
          onPress={() => {
           Alert.alert("Total Added 6",
               "Males  4 Females 2",
               
              )
         
          }}>
        
    <View style={{width:Dimensions.get('window').width-40,height:50,backgroundColor:'#7189FF',flexDirection:'column',borderRadius:10,margin:15,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>Update</Text>
    </View>
   
        </TouchableOpacity>
    
</View>
     
       
   
        )
    }
}

export default WeaningReport