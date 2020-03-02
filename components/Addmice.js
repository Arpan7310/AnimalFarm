import React, { Component } from 'react'

import { Text, View, Modal, TextInput, TouchableOpacity, Dimensions, formatSheet, TouchableHighlight, Alert, useState } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

class Addmice extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState(
      {
        modalVisible: visible
      }
    );
  }

  handleSubmit = () => {
    return (
      this.setState({
        array: this.state.array.concat(this.state.x)
      })
    )

  }

  render() {

    return (
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() =>
            this.setModalVisible(true)}
          >
            <View style={{ width: Dimensions.get('window').width - 20, height: 150, backgroundColor: '#7189FF', flexDirection: 'row', borderRadius: 10, margin: 15, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ flex: 4, marginLeft: 30, color: 'white', fontSize: 24 }}>Add Mice</Text>
            </View>
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            presentationStyle={formatSheet}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
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
                  height: 300,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <TextInput placeholder="enter weight " onChangeText={(e) => this.setState({
                    x: e
                  })
                  } />
                </View>

                <TouchableHighlight
                  onPress={(e) => {

                    this.setModalVisible(!this.state.modalVisible),
                      this.state.x !== null ? (this.handleSubmit(), this.setState({
                        x: null
                      })) : (<View></View>)
                  }}>
                  <View style={{ width: 250, height: 50, backgroundColor: '#7189FF', flexDirection: 'column', borderRadius: 10, marginTop: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Add</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={
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