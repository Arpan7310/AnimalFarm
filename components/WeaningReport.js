import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Modal, TouchableHighlight, Alert, pageSheet, formatSheet } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import Axios from 'axios'
class WeaningReport extends Component {


    constructor(){
        super()
        this.state={
            x:{},
            modalVisible: false,
            type:'a'
            
        }
    }

    componentWillMount() {
       
     
        Axios.post('http://192.168.0.108:5000/v1/getWeaningData', 
        {
            id: this.props.navigation.getParam('id')
        }).then(res => {
           this.setState({
               x:res.data
           })
           Alert.alert('data',JSON.stringify(res.data))
        }).catch(err => {
            Alert.alert('Could not connect to server', JSON.stringify(err));
        }); 
}


 onSuccess = (e) => {
    let body=JSON.parse(e.data)
    Axios.post('http://192.168.0.108:5000/v1/verifyContainer',{batchId:this.props.navigation.getParam('id'),qr:body,colonyId:this.props.navigation.getParam('colonyId'),boxType:this.state.type})
.then((res)=>{
    if( res.data.isValid ==true)
  this.props.navigation.push('Addmice',{array: res.data.weight, type: this.state.type, containerId: body.id, batchId:this.props.navigation.getParam('id')});
Alert.alert('data',JSON.stringify(res.data))
    
}).catch(err=>{
    Alert.alert(JSON.stringify(err));
})
this.setState({
    modalVisible:!this.state.modalVisible
})
        

}
   render() {
        return (
            <View>
                <View style={{ width: Dimensions.get('window').width, height: 180, borderWidth: 0.2, borderColor: 'grey', elevation: 5, marginRight: 15, marginTop: 35 }}>

                    <Text style={{ marginLeft: 110, fontSize: 20, color: 'grey' }}>Add To Market</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => this.setState({
                            
                      modalVisible:!this.state.modalVisible ,
                        type:'mmboxId'
                            })
                           
               } >
                            <View style={{ width: 100, height: 100, backgroundColor: '#7189FF', borderRadius: 5, margin: 35 }}>
                                <Text style={{ color: 'white', margin: 20 }}>{this.state.x.mmboxId} Male</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => 

                            this.setState({
                            
                            modalVisible:!this.state.modalVisible ,
                              type:'mfboxId'
                                  })


                           } >
                            <View style={{ width: 100, height: 100, backgroundColor: '#FF92F4', borderRadius: 5, margin: 35 }} >
                                <Text style={{ color: 'white', padding: 20 }}>{this.state.x.mfboxId} Female</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: Dimensions.get('window').width, height: 180, borderWidth: 0.2, borderColor: 'grey', elevation: 5, marginRight: 15, marginTop: 35 }}>
                    <Text style={{ marginLeft: 110, fontSize: 20, color: 'grey' }}>Add To Selection</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => this.setState({
                            
                            modalVisible:!this.state.modalVisible ,
                              type:'smboxId'
                                  })
                           } >
                            <View style={{ width: 100, height: 100, backgroundColor: '#7189FF', borderRadius: 5, margin: 35 }} >
                                <Text style={{ color: 'white', margin: 20 }}>{this.state.x.smboxId} Male</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({
                            
                            modalVisible:!this.state.modalVisible ,
                              type:'sfboxId'
                                  })
                           } >
                            <View style={{ width: 100, height: 100, backgroundColor: '#FF92F4', borderRadius: 5, margin: 35 }}>
                                <Text style={{ color: 'white', padding: 20 }}>{this.state.x.sfboxId} Female</Text>
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
                            this.setState({
                                modalVisible:!this.state.modalVisible
                            })
                    }}>

                    <QRCodeScanner
                        onRead={this.onSuccess}
                        reactivate={true}
                    />
                </Modal>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Total Added 6", "Males  4 Females 2");
                    }}>

                    <View style={{ width: Dimensions.get('window').width - 40, height: 50, backgroundColor: '#7189FF', flexDirection: 'column', borderRadius: 10, margin: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Update</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default WeaningReport