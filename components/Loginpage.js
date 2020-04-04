import  React, {Component} from 'react'
import {View,Text,TextInput,Dimensions,Button,StyleSheet,Modal,ActivityIndicator} from 'react-native'
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
            login:false
            
        }
    }


     componentWillMount (){
  
    this.props.navigation.addListener('willFocus', async  e =>{
        
    try{
        if (await AsyncStorage.getItem('mykey')!==null)
         this.props.navigation.navigate('Pincode')
           
       }
         catch(err){
             
         }

})
     
}

async  handleLogin  ()  {
let data ={email:this.state.email,password:this.state.password}
if( this.state.email !=='' && this.state.password !== '' )
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
}

}
catch(err){
Alert.alert(JSON.stringify(err.message))
}
 }


 async  handleSignup  ()  {
    let data ={email:this.state.email,
        password:this.state.password,
        pin:this.state.pin}
        if( this.state.email !=='' && this.state.password !== '' && this.state.pin !== '')
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
       this.setState({
         signup:false
       })
        }

    }
    
    catch(err){
    Alert.alert(JSON.stringify(err.message))
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


          <TextInput  style={{width:Dimensions.get('window').width-40,backgroundColor:'white',borderRadius:10,margin:10}} placeholder="Enter password"  secureTextEntry={true}  onChangeText ={ (e)=> 
        this.setState({
            password:e
            })
          } />

     <View style={{margin:15}}>
         <View style={{flexDirection:'row', justifyContent:'space-between'}} >
         
             <View style={{marginRight:10}}>
               <View style={{flexDirection:'row'}} >
               <ActivityIndicator size="large" color="#7189FF"  animating={this.state.login}/>
              <Button title='Login' color='#7189FF'  width onPress={() =>this.handleLogin()} />
               </View>
            
     </View>
     
         <View style={{marginLeft:10,marginRight:34}}>
         <Button title='Signup' color='#7189FF'   width onPress={() =>this.setState({
             signup:true,
             email:'',
             password:''})} />
         </View>
   
     </View>
     </View>

             
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={this.state.signup}

                    onShow={()=>this.setState({
                      email:'',
                      password:''
                    })}
                    onRequestClose={() => {
                        this.setState({
                           signup: false,
                           email:'',
                           password:''
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
               <Button title='Signup' color='#7189FF'  width onPress={() =>this.handleSignup()} />
                   </View>
                </Modal>


      </View>
        )
    }
}




export default Loginpage