import React, { Component } from 'react'

import { Text, View, Modal, TextInput, TouchableOpacity, Dimensions, formatSheet, TouchableHighlight, Alert, useState ,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

class Addmice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      x:null,
      array:[],
      y:null,
    
    }
  }

  setModalVisible(visible) {
    this.setState(
      {
        modalVisible: visible,
  
      }
    );
  }

  handleSubmit = () => {
    
      this.setState({
        array: this.state.array.concat(this.state.x),
        y:this.state.array.length +1
      })
    

  }



  delete =(x) => {


  let array=this.state.array.filter((item)=>{
  return item.id!==x})
this.setState({
  array:array,
  y:this.state.array.length -1
})

Alert.alert("item deleted")

  }

  render() {

    return (
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() =>
            this.setModalVisible(true)}
          >
            <View style={{ width: Dimensions.get('window').width - 20, height: 150, backgroundColor: '#7189FF', flexDirection: 'column', borderRadius: 10, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={require('./assets/add.png')} style={{marginRight:15}} />
              <Text style={{  color: 'white', fontSize: 24}} >Add Mice</Text>
             
              </View>
              
             <Text style={{  color: 'white', fontSize: 24 }}>Total Count {this.state.y}</Text>
            </View>
           
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            presentationStyle={formatSheet}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.'),
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
                  flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={{color:'grey',marginBottom:50,marginTop:20}}> Please Enter Weight Below</Text>
                  <View style={{flexDirection:'row' ,justifyContent:'space-between'}} >
                  
                  <Image source={require('./assets/weight.png')} />
                  <TextInput placeholder="enter weight here " onChangeText={(e) => this.setState({
                    x: {value:e,id:this.state.array.length}
                  })
                  } />
                  </View>
                 
                </View>

                <TouchableOpacity
                  onPress={(e) => {

                    this.setModalVisible(!this.state.modalVisible),
                      this.state.x !== null ? (this.handleSubmit(), this.setState({
                        x: null
                      })) : (<View></View>)
                  }}>
                  <View style={{ width: 250, height: 50, backgroundColor: '#7189FF', flexDirection: 'column', borderRadius: 10, marginTop: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Add</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

      
         
         {this.state.array.map((x)=>{
        return(
          <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-evenly',borderWidth:0.5,borderRadius:15,margin:10}}>
            <Image source={require('./assets/mice.png')}  /> 
          <Text >
            {x.value}
          </Text>
          <TouchableOpacity onPress={()=>this.delete(x.id)}>
          <Image source={require('./assets/delete.png') }  /> 
          </TouchableOpacity>
          
          </View>
            
        )
         })}
          <TouchableOpacity onPress={ ()=>
            this.props.navigation.pop()}>
            <View style={{ width: Dimensions.get('window').width - 20, height: 50, backgroundColor: '#7189FF', flexDirection: 'row', borderRadius: 10, margin: 15, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ flex: 4, marginLeft: 30, color: 'white', fontSize: 24 }}>DONE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default Addmice