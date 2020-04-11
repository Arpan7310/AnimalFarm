import React, { Component } from 'react'

import { Text, View, Modal, TextInput, TouchableOpacity, Dimensions, formatSheet, TouchableHighlight, Alert, useState ,Image,ScrollView,Picker,Button} from 'react-native'
import Axios from 'axios';
import { RadioButton } from 'react-native-paper';
import url from './Url'
import { AppState } from 'react-native';
import Card from './Card'
import QRCodeScanner from 'react-native-qrcode-scanner';

class Addmice extends Component {

mma=[];
sma=[];
mfa=[];
sfa=[];
mmqr=null;
mfqr=null;
smqr=null;
sfqr=null;
x=false;
c=0;
ob={
  id:'',
  value:'',
  box:'',
  gender:''
};


constructor(props) {
    super(props);
    this.state = {
      checked:'first',
       modalVisible: false,
       
       array:[],
       y:null,
       c:0,
       
       language:'',
       sm:false,
       mm:false,
       sf:false,
       mf:false,
       modal:false,
       qr:false,
       mmt:'Click to scan market male',
       mft:'Click to scan market female',
       smt:'Click to scan selection male',
       sft:'Click to scan selection female',
       type:'',
       
      

    }
  }






 onSuccess =(e) =>{

if(this.state.type=='mm')
this.mmqr={data:JSON.parse(e.data),type:this.state.type}
if(this.state.type=='mf')
this.mfqr={data:JSON.parse(e.data),type:this.state.type}
if(this.state.type=='sm')
this.smqr={data:JSON.parse(e.data),type:this.state.type}
if(this.state.type=='sf')
this.sfqr={data:JSON.parse(e.data),type:this.state.type}

let a=JSON.parse(e.data).id



  
  if(this.state.type=='mm')
  this.setState({
    qr:false,
    mmt:a
  })
  if(this.state.type=='mf')
  this.setState({
    qr:false,
    mft:a
  })
  if(this.state.type=='sm')
  this.setState({
    qr:false,
    smt:a
  })
  if(this.state.type=='sf')
  this.setState({
    qr:false,
    sft:a
  })

  
 }


  setModalVisible(visible) {
    this.setState(
      {
        modalVisible: visible,
  
      }
    );
  }

 handleSubmit = () => {
const arry=this.state.array;
this.ob.id=this.state.c++;

  arry.push(this.ob)
  this.setState({
    array:arry
   
  })
  this.ob={
    id:'',
    value:'',
    box:'',
    gender:''
  };
  
 this.setModalVisible(!this.state.modalVisible)
     
  }



  delete =(i,b,g) => {

    let array=this.state.array.filter((item)=>{
  return item.id!==i})
this.setState({
  array:array
  })

}

  updateValue (i,d,g) {

  
const narry=this.state.array.map(item =>{

if(i==item.id)
return{
  ...item,box:d
}
else 
return item
})
this.setState({
  array:narry
})
}

updateContainer () {
this.c=0;
this.seperateArray();
let a=0, b=0 ,c=0,d=0;
this.state.array.map((item)=>{
if(item.gender=='male' && item.box=='market')
a++;
if(item.gender=='male' && item.box=='selection')
b++;
if(item.gender=='female' && item.box=='market')
c++;
if(item.gender=='female' && item.box=='selection')
d++;
})
if(a>0){
this.setState({
  mm:true 
})
this.c++;
}
else
this.setState({
  mm:false
})

if(b>0){
this.setState({
  sm:true
})
this.c++
}
else
this.setState({
  sm:false
})
if(c>0){
this.setState({
  mf:true
})
this.c++
}
else
this.setState({
  mf:false
})

if(d>0){
this.setState({
  sf:true
})
this.c++
}
else
this.setState({
  sf:false
})

this.setState({
  modal:true
})

}
 async uploadData() {
let  mmd={
  mmqr:this.mmqr,
   mma:this.mma
  }
  let  mfd={
    mfqr:this.mfqr,
     mfa:this.mfa
    }
    let  smd={
      smqr:this.smqr,
       sma:this.sma
      }
      let  sfd={
        sfqr:this.sfqr,
         sfa:this.sfa
        }
      
  

  let body={}
  let res={}
  let a=0;
  try {
    if (this.mmqr!==null)
    body.mmd=mmd
    if (this.mfqr!==null)
    body.mfd=mfd
    if (this.smqr!==null)
    body.smd=smd
    if (this.sfqr!==null)
    body.sfd=sfd
body.weights=this.state.array


if(this.state.mm){
  if(this.mmqr!==null)
  a++
  else 
  this.x=false;
}

if(this.state.mf){
  if(this.mfqr!==null)
  a++
  else 
  this.x=false;

}
if(this.state.sm){
  if(this.smqr!==null)
  a++
  else 
  this.x=false;
}
if(this.state.sf){
  if(this.sfqr!==null)
  a++
  else 
  this.x=false;
}

if(a==this.c)
this.x=true;


  if(this.x)
  { res = await Axios.post(url + 'addWeaningData',body);
    this.setState({
      modal:false
    })
  this.props.navigation.pop();
   
  Alert.alert(JSON.stringify(body.weights))
   }
   else{
     
 Alert.alert('Scan all containers')
     
   }
  } catch(err) {
    Alert.alert('Something went wrong', JSON.stringify(err.message));
  }
}


seperateArray (){
  let arry1=[], arry2=[], arry3=[], arry4 =[];
this.state.array.map(item=>{

  if(item.gender=='male' && item.box=='market')
   arry1.push(item)
   if(item.gender=='male' && item.box=='selection')
   arry2.push(item)
   if(item.gender=='female' && item.box=='market')
   arry3.push(item)
   if(item.gender=='female' && item.box=='selection')
   arry4.push(item)

})
arry1.sort((a,b)=> a.value < b.value);
arry2.sort((a,b)=> a.value < b.value);
arry3.sort((a,b)=> a.value < b.value);
arry4.sort((a,b)=> a.value < b.value);
this.mma=arry1;
this.mfa=arry3;
this.sma=arry2;
this.sfa=arry4;

}


updatefobject (){
  this.setState({ checked: 'second' 
             
               
})
  this.ob.gender='female',this.ob.box='market'
}
updatemobject (){
  this.setState ( { checked: 'first' 
                
             
               
                
})
  this.ob.gender='male',this.ob.box='market'
}



  render() {
    const { checked } = this.state; 


    
    return (
     
        <View>
          <TouchableOpacity onPress={() =>
            this.setModalVisible(true)}

            style={{position:'absolute'}}
          >
            <View style={{ width: Dimensions.get('window').width - 20, height: 150, backgroundColor: '#7189FF', flexDirection: 'column', borderRadius: 10, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={require('./assets/add.png')} style={{marginRight:15}} />
              <Text style={{  color: 'white', fontSize: 24}} >Add Mice</Text>
             
              </View>
              
 
             <Text style={{  color: 'white', fontSize: 24 }}>Total Count {this.state.array.length }</Text>
            </View>
           
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            presentationStyle={formatSheet}
             onRequestClose={() => {
               this.setModalVisible(!this.state.modalVisible)
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00000080'

              }}
            >
              <View
                style={{
                  width: 300,
                  height: 400,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  flexDirection: 'column',  alignItems: 'center',justifyContent:'center'
                }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={{color:'grey',marginBottom:50,marginTop:20}}> Please Enter Weight Below</Text>
                  <View style={{flexDirection:'row' ,justifyContent:'space-between'}} >
                  
                  <Image source={require('./assets/weight.png')} />
                  <TextInput keyboardType={'numeric'} placeholder="enter weight here " onChangeText={(e) => this.ob.value=e
                  } />
                </View>
                </View>
                <Text style={{color:'grey',marginTop:10}}>Select Gender</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}} >
                  
                <RadioButton
                 value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                 
                onPress={() => this.updatemobject() }
                color='#7189FF'
                 />
                <Text  style={{color:'grey'}}>Male</Text>

                <RadioButton
                 value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => this.updatefobject()}
                color='#7189FF'
                 />
                <Text  style={{color:'grey'}}>Female</Text>
                </View>


                <TouchableOpacity
                  onPress={(e) => {
                 this.ob.value !== '' && this.ob.gender !=='' ? (this.handleSubmit()
                  ) : (Alert.alert('Any one field is missing'))
                  }}>
                  <View style={{ width: 250, height: 50, backgroundColor: '#7189FF', flexDirection: 'column', borderRadius: 10, marginTop: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Add</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

      
          <ScrollView style={{marginBottom:70,marginTop:180}}>
           <Text style={{fontSize:20,color:'#7189FF',marginLeft:100}}>List of Male Species</Text>
        
         {this.state.array.sort((a,b)=> a.value < b.value).map((item)=>{
        if(item.gender=='male')
        return(
          
          <View style={{flexDirection:'row', alignItems:'center',borderWidth:0.5,borderRadius:15,margin:10}}>
            <Image source={require('./assets/mice.png')} style={{marginRight:10}} /> 


            <Picker
                    selectedValue={item.box}
                    style={{ height: 50, width: 150, borderRadius: 10, borderWidth: 1.2 }}
                    mode={"dialog"}
                    onValueChange={(itemValue, itemIndex) =>
                      
                        this.updateValue(item.id,itemValue,item.gender)
                       } 
                    
                    style={{width:150}}  >
                    
                    <Picker.Item label="Market" value="market"  />
                    <Picker.Item label="Selection" value="selection" />
                    
                </Picker>
          <Text style={{margin:8}}>
            {item.value}
          </Text>
          <Text style={{margin:5}}>{item.gender}</Text>
         
          
          <TouchableOpacity onPress={()=>Alert.alert(
            'Are you Sure You Want To Delete ?',
             '',
            [ { text: 'Cancel'},
             {text: 'OK', onPress: () => this.delete(item.id,item.box,item.gender)} ]
               )}>
          <Image source={require('./assets/delete.png') }  style={{marginLeft:34}} /> 
          </TouchableOpacity>
          
          </View>
            
        )


         })}
         <Text style={{fontSize:20,color:'#7189FF',marginLeft:100}}>List of Female Species</Text>
         {this.state.array.sort((a,b)=> a.value < b.value).map((item)=>{
        if(item.gender=='female')
        return(
          <View style={{flexDirection:'row', alignItems:'center',borderWidth:0.5,borderRadius:15,margin:10}}>
            <Image source={require('./assets/mice.png')} style={{marginRight:10}} /> 


            <Picker
                    selectedValue={item.box}
                    style={{ height: 50, width: 150, borderRadius: 10, borderWidth: 1.2 }}
                    mode={"dialog"}
                    onValueChange={(itemValue, itemIndex) =>
                      
                        this.updateValue(item.id,itemValue,item.gender)
                       } 
                    
                    style={{width:150}}  >
                    
                    <Picker.Item label="Market" value="market"  />
                    <Picker.Item label="Selection" value="selection" />
                    
                </Picker>
          <Text style={{margin:8}}>
            {item.value}
          </Text>
          <Text style={{margin:5}}>{item.gender}</Text>
         
          
          <TouchableOpacity onPress={()=>Alert.alert(
            'Are you Sure You Want To Delete ?',
             '',
            [ { text: 'Cancel'},
             {text: 'OK', onPress: () => this.delete(item.id,item.box,item.gender)} ]
               )}>
          <Image source={require('./assets/delete.png') }  style={{marginLeft:34}} /> 
          </TouchableOpacity>
          
          </View>
            
        )


         })}
         </ScrollView>

         
          <TouchableOpacity onPress={ ()=>
           
          this.updateContainer()
          }
            
            style={{position:"absolute" ,marginTop:Dimensions.get('window').height-150}}>
            <View style={{ width: Dimensions.get('window').width - 20, height: 50, backgroundColor: '#7189FF', flexDirection: 'row', borderRadius: 10, margin: 10, justifyContent: 'center', alignItems: 'center' ,}}>
              <Text style={{  color: 'white', fontSize: 24 }}>Proceed to Scan container</Text>
            </View>
          </TouchableOpacity>
      <Modal
          animationType="fade"
          visible={this.state.modal}
           presentationStyle={formatSheet}

           onRequestClose={()=>this.setState({
             modal:false
           })}
           >
<View style={{flex:1,backgroundColor:'white'}}>
{this.state.mm? (<TouchableOpacity   onPress={()=>this.setState({
  qr:true,
  type:'mm'})}>
  <Card text={this.state.mmt}  /></TouchableOpacity>):(<Text></Text>)}
    {this.state.mf? (<TouchableOpacity
      onPress={()=>this.setState({
  qr:true,
  type:'mf'})}
    
    >
  <Card text={this.state.mft} /></TouchableOpacity>):(<Text></Text>)}
    {this.state.sm? (<TouchableOpacity
      onPress={()=>this.setState({
  qr:true,
  type:'sm'})}
    
    
    >
  <Card text={this.state.smt} /></TouchableOpacity>):(<Text></Text>)}

    {this.state.sf? (<TouchableOpacity
    
      onPress={()=>this.setState({
  qr:true,
  type:'sf'})}
    
    
    >
  <Card text={this.state.sft} /></TouchableOpacity>):(<Text></Text>)}

  <TouchableOpacity onPress={ ()=>
            
        this.uploadData()
         
          
            }

            
            style={{position:"absolute" ,marginTop:Dimensions.get('window').height-150}}>
            <View style={{ width: Dimensions.get('window').width - 20, height: 50, backgroundColor: '#7189FF', flexDirection: 'row', borderRadius: 10, margin: 10, justifyContent: 'center', alignItems: 'center' ,}}>
              <Text style={{  color: 'white', fontSize: 24 }}>DONE</Text>
            </View>
          </TouchableOpacity>




</View>



</Modal>
 <Modal

  animationType="fade"
          
    visible={this.state.qr}
   presentationStyle={formatSheet}
    onRequestClose={() => 
             this.setState({qr:false})
           }

>

<QRCodeScanner onRead={this.onSuccess} reactivate={false} />
</Modal>





        </View>
     
    )
  }
}

export default Addmice