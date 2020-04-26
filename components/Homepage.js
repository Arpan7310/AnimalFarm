import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  AppRegistry,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableNativeFeedback,
  TouchableHighlight,
  Alert,
  AsyncStorage,
  ToastAndroid
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import BreederPage from './BreederPage';
import Axios from 'axios'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  onSuccess = async (e) => {
    const qr = JSON.parse(e.data);

    if (qr.type !== 'B' && qr.type !== 'S' && qr.type !== 'M' && qr.type !== 'R') {
      Alert.alert('unrecognized QR code, please try again' , qr.type);
      return;
    }
    const map = {
      'B' : 'BreederPage',
      'M' : 'Market',
      'S': 'Selector'
    };
    try {
     
      this.setModalVisible(!this.state.modalVisible);
     
      this.props.navigation.push(map[qr.type], {qr});  
    } catch (err) {
      Alert.alert('Something went wrong, try again' , JSON.stringify(err));
    }
    
  };


  async Logout (){


    await AsyncStorage.removeItem('mykey')
    this.props.navigation.navigate('Loginpage')
  }
  render() {
    return (
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            
              this.setModalVisible(!this.state.modalVisible);
          }}>
          <QRCodeScanner onRead={this.onSuccess} reactivate={false} />
        </Modal>

        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <TouchableOpacity

         
            onPress={() => {
              this.setModalVisible(true);
            }}>
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
          <View
            style={{
              width: Dimensions.get('window').width - 20,
              height: 100,
              borderRadius: 20,
              alignItems: 'center',
              margin: 15,
              
              backgroundColor: 'white',
              borderColor: 'grey',
              borderWidth: 0.2,
            }}>
            <Text style={{color: 'grey', fontSize: 24, padding: 30}}>
              View Records
            </Text>
          </View>

          <View
            style={{
              width: Dimensions.get('window').width - 20,
              height: 100,
              borderRadius: 20,
              alignItems: 'center',
              margin: 15,
          
              backgroundColor: 'white',
              borderColor: 'grey',
              borderWidth: 0.2,
            }}>
            <Text style={{color: 'grey', fontSize: 24, padding: 30}}>
              Tasks For Today
            </Text>
          </View>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.navigation.push('AddMiceNew');
            }}
            >
            <View
              style={{
                width: Dimensions.get('window').width - 20,
                height: 100,
                borderRadius: 20,
                alignItems: 'center',
                margin: 15,
         
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 0.2,
              }}>
              <Text style={{color: 'grey', fontSize: 24, padding: 30}}>
                Search For Sale
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableOpacity   onPress={() => this.props.navigation.push('Store')}>
            <View
          
              style={{
                width: Dimensions.get('window').width - 20,
                height: 100,
                borderRadius: 20,
                alignItems: 'center',
                margin: 15,
              
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 0.2
                
              }}>
              <Text style={{color: 'grey', fontSize: 24, padding: 30}}>
                Reset Pin
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity   onPress={() => this.props.navigation.push('CreateColony')}>
            <View
          
              style={{
                width: Dimensions.get('window').width - 20,
                height: 100,
                borderRadius: 20,
                alignItems: 'center',
                margin: 15,
              
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 0.2
                
              }}>
              <Text style={{color: 'grey', fontSize: 24, padding: 30}}>
               Create Colony
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity   onPress={() => this.props.navigation.push('Temporary')}>
            <View
          
              style={{
                width: Dimensions.get('window').width - 20,
                height: 100,
                borderRadius: 20,
                alignItems: 'center',
                margin: 15,
              
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 0.2
                
              }}>
              <Text style={{color: 'grey', fontSize: 24, padding: 30}}>
               Temporary
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity   onPress={() => this.Logout()}>
            <View
          
              style={{
                width: Dimensions.get('window').width - 20,
                height: 100,
                borderRadius: 20,
                alignItems: 'center',
                margin: 15,
              
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 0.2
                
              }}>
              <Text style={{color: 'grey', fontSize: 24, padding: 30}}>
              Logout
              </Text>
            </View>
          </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    );
  }
}

export default Homepage;
