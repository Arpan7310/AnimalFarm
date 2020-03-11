import React ,{Component} from 'react'

import {View,Text, Picker,Button,Modal} from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner';

class CreateColony extends Component{


    constructor(){

        super()

        this.state={
   
        language:'',
        type:'',
        modalVisible: false
    }


    }

    onSuccess =  (e) => {
        this.setModalVisible(!this.state.modalVisible);
     
    }

    render(){

        return(
        <View style={{alignItems:'center'}}>

            <Text>Select Breed</Text>
        <Picker
        selectedValue={this.state.language}
         style={{height: 50, width: 190 ,borderRadius:10,borderWidth:1.2}}
        mode={"dropdown"}
        onValueChange={(itemValue, itemIndex) =>
        this.setState({language: itemValue})
          }   >
       <Picker.Item label="Bable/c" value="bable/c" />
       <Picker.Item label="Swiis Albino" value="Swiss ALBINO" />
       </Picker>

      <Text style={{marginTop:50}}>Select Type</Text>
        <Picker
        selectedValue={this.state.type}
         style={{height: 50, width: 190 ,borderRadius:10,borderWidth:1.2}}
        mode={"dropdown"}
        onValueChange={(itemValue, itemIndex) =>
        this.setState({type: itemValue})
          }   >
       <Picker.Item label="Harem" value="Harem" />
       <Picker.Item label="Individual" value="Individual" />
       </Picker>
       <View style={{margin:30}} >
       <Button title="Click to scan container "  / >
       </View>
     
       <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.'),
              this.setModalVisible(!this.state.modalVisible);
          }}>
          <QRCodeScanner onRead={this.onSuccess} reactivate={false} />
        </Modal>
      
            </View>
        )
    }
}

export default CreateColony