import  React, {Component} from 'react'
import {View,Text,TextInput,Dimensions,Button,StyleSheet,Modal,ActivityIndicator,TouchableOpacity} from 'react-native'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import PINCode from '@haskkor/react-native-pincode'
import Axios from 'axios'
import url from './Url';

class Loginpage extends Component {




    constructor(){

     super()
   
      this.state={
     
            email:'',
            password:'',
            signup:false,
            pin:'',
            bool:false,
            login:false,
            
            
            
        }
    }


    async  componentWillMount (){
  

    try{
        if (await AsyncStorage.getItem('mykey')!==null){
      
       
         this.props.navigation.navigate('Pincode')
        }
           
       }
         catch(err){
             
         }


     
}

async  handleLogin  ()  {
let data ={email:this.state.email.trim(),password:this.state.password}
this.setState({
  login:true
})
try{
if(data.email !== '' && data.password !== ''){

  

  const res= await  Axios.post(url +'login',data);
 
  if(res.data.message=='login succesful'){
   await AsyncStorage.setItem('mykey',res.data.data.pin)
   await AsyncStorage.setItem('email',res.data.data.email)
   this.setState({

    login:false
   })
   this.props.navigation.navigate('Pincode')

}
else if(res.data.message =='user does not exist'){

this.setState({

  login:false
 })
 Alert.alert(res.data.message)
}
else
Alert.alert('Wrong credentials check email or password again')
this.setState({
  login:false
})


}
else
Alert.alert('Invalid credentials')
this.setState({
  login:false
})
}
catch(err){
Alert.alert(JSON.stringify(err.message))
this.setState({
  login:false
})
}
 }


 async  handleSignup  ()  {
    let data ={email:this.state.email.trim(),
        password:this.state.password,
        pin:this.state.pin.trim()}
        this.setState({
          bool:true
        })
       try{
         
        if(data.email !== '' && data.password !== '' && data.pin.length == 4){
       
          
        const res= await  Axios.post(url +'signup',data)
        
        this.setState({
         bool:false
       })
       Alert.alert(JSON.stringify(res.data.message))
       if (res.data.message =='sigunp complete')
       this.setState({
         signup:false,
         email:'',
         password:'',
         pin:'',
         bool:false
       })
        }
        else{
          Alert.alert('Invalid credentials')
           this.setState({
             bool:false
           })
          }
        
  
       }
    
    catch(err){
    Alert.alert(JSON.stringify(err.message))
    this.setState({
      bool:false
    })
    }
     }




  render(){

    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'lightgrey'}}>
     
        <TextInput  style={{width:Dimensions.get('window').width-40,backgroundColor:'white',borderRadius:10,margin:10}} placeholder="Enter email" onChangeText ={ (e)=> 
        this.setState({
            email:e
            })
          } />


          <TextInput  style={{width:Dimensions.get('window').width-40,backgroundColor:'white',borderRadius:10,margin:10}} placeholder="Enter password"  secureTextEntry={true}    onChangeText ={ (e)=> 
        this.setState({
            password:e
            })
          } />

     <View style={{margin:15}}>
         <View style={{flexDirection:'row', justifyContent:'space-between'}} >
         
             <View style={{marginRight:10}}>
               <View style={{flexDirection:'row'}} >
               <ActivityIndicator size="large" color="#7189FF"  animating={this.state.login}/>
               <TouchableOpacity onPress={() =>this.handleLogin()}>
                 <View style={{width:90,height:40,backgroundColor:'#7189FF',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                   <Text style={{color:'white'}}>Login</Text>
                 </View>
               </TouchableOpacity>
             
               </View>
            
     </View>
     
         <View style={{marginLeft:10,marginRight:34}}>
         <TouchableOpacity onPress={() =>this.setState({
             signup:true,
             email:'',  
             password:''})} >
             <View style={{width:90,height:40,backgroundColor:'#7189FF',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                   <Text style={{color:'white'}}>Signup</Text>
                 </View>
             
             </TouchableOpacity>
         </View>
   
     </View>
     </View>

             
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={this.state.signup}

                    onShow={()=>this.setState({
                      email:'',
                      password:'',
                      pin:''
                    })}
                    onRequestClose={() => {
                        this.setState({
                           signup: false,
                           email:'',
                           password:'',
                           pin:''
                        })
                    }}>
             <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'lightgrey'}}>
               <TextInput  style={{width:Dimensions.get('window').width-40,backgroundColor:'white',borderRadius:10,margin:10}} placeholder="Enter email" onChangeText ={ (e)=> 
                 this.setState({
                   email:e
                   })
                   } />


                  <TextInput  style={{width:Dimensions.get('window').width-40,backgroundColor:'white',borderRadius:10,margin:10}} placeholder="Enter password"  secureTextEntry={true}  onChangeText ={ (e)=> 
                    this.setState({
                   password:e
                    })
                    } />
                 
                    <TextInput  style={{width:Dimensions.get('window').width-40,backgroundColor:'white',borderRadius:10,margin:10}} placeholder="Enter 4 digit pin code"  secureTextEntry={true} keyboardType={'numeric'} onChangeText ={ (e)=> 
                    this.setState({
                   pin:e
                    })
                    } />
                    <ActivityIndicator size="large" color="#7189FF"  animating={this.state.bool}/>
                    <TouchableOpacity
                    onPress={() =>this.handleSignup()}>
                    <View style={{width:90,height:40,backgroundColor:'#7189FF',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                   <Text style={{color:'white'}}>Signup</Text>
                 </View> 
                    </TouchableOpacity>
              
                   </View>
                </Modal>


      </View>
        )
                  
                  
          

                  
    }
}




export default Loginpage