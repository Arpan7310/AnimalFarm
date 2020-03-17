import React ,{Component} from 'react'

import {Text,View,Modal,TouchableOpacity,Picker,TextInput,Alert,Dimensions,Image} from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner';
import Axios from 'axios';

import url from './Url'
class Temporary extends Component {

constructor(props){


    super(props);
    this.state={
        modalVisible:false,
        language:'',
        nDames:null,
        bId:null
    }


}



onSuccess = (e) =>{

let body =JSON.parse(e.data);

Axios.post(url + 'verifyIdentity',{id:body.id,type:body.type,verifyType:'rest'}).then((res)=>{
if(res.data.isValid){
    if(this.state.toVerify== 'rest'){
        this.setState({
         bId:body.id

        })
    }
    else{

        Alert.alert('did not match')
    }
}


}).catch((err)=>{
    Alert.alert(JSON.stringify(err))
})
this.setState({
modalVisible:false

})
}

    render(){



        return(
            <View>
   
<TouchableOpacity
onPress={()=>this.setState({
    modalVisible:true
})}>
<View
              style={{
                width: Dimensions.get('window').width - 20,
                height: 150,
                backgroundColor: '#7189FF',
                flexDirection: 'row',
                borderRadius: 10,
                margin: 15,
                justifyContent: 'center',
                alignItems: 'center',

              }}>
              <Image
                source={require('./qrcode.png')}
                style={{flex: 2, height: 100, width: 100}}
              />
              <Text
                style={{flex: 4, marginLeft: 30, color: 'white', fontSize: 24}}>
                Scan Container
              </Text>
            </View>
</TouchableOpacity>


                <Text>Select Breed</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 190, borderRadius: 10, borderWidth: 1.2 }}
                    mode={"dropdown"}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                    }   >
                    <Picker.Item label="BALB/c" value="BALB/c" />
                    <Picker.Item label="Swiss Albino" value="Swiss Albino" />
                    <Picker.Item label="C57BL6" value="C57BL6" />
                </Picker>

 <TextInput placeholder='enter the number of dames ' keyboardType='numeric' onChangeText={(text)=>this.setState({
    nDames:text})} /> 
            <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}>
                    <QRCodeScanner onRead={this.onSuccess} reactivate={false} />
                </Modal>

            </View>

        )
    }
}

export default Temporary