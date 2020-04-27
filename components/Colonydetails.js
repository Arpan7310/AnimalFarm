import React ,{Component}  from 'react'

import {StyleSheet,Text,View,TouchableOpacity,Button,Dimensions} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

import {Card, Title} from 'react-native-paper'

class ColonyDetails extends Component {


    boolean=false;
    constructor(props){
        super(props)
       this.state={
            boolean:false,
            color:'#7189FF'
        }
    }

 
batchView () {


    return(
       
        <View style={styles.card}>
      <Text>Batch wise results</Text>
       </View>
       
        
    )
}


containerView () {
    return(
     <View style={styles.card2}>
      <Text>Hello</Text>
       </View>
    )
}

condition (type) {


if(type =='c')
    this.boolean= true;
    else 
    this.boolean=false;
    this.forceUpdate();
}




batchbutton (){

    return(
        <View style={styles.row}>
  
   <Card onPress={()=>this.condition('b')}
    style={{width:Dimensions.get('window').width/2,
    height:50,
    backgroundColor: this.boolean ? ('white'):('#7189FF'),
    elevation:3,
    borderRadius:5,
    margin:15}}
    >
    <Card.Content >
        <Text style={{color:this.boolean ? ('#7189FF'):('white')}}>
            Show batch wise
        </Text>
    </Card.Content>
  </Card>
  <Card onPress={()=>this.condition('c')}
   style={{

width:Dimensions.get('window').width/2,
height:50,
backgroundColor: this.boolean ? ('#7189FF'):('white'),
elevation:3,
borderRadius:5,
margin:15
}}
    >
    <Card.Content >
        <Text style={{color:this.boolean ? ('white'):('#7189FF')}}>
            Show container wise
        </Text>
    </Card.Content>
  </Card> 
        </View>

    )
}

render(){

 return(
 <View>
{this.batchbutton()}
{this.boolean  ? (this.containerView()) :(this.batchView()) }

      
        </View>
    )
}




}


export default ColonyDetails


const width=Dimensions.get('window').width/2
const styles=StyleSheet.create({


row:{
    flexDirection:'row',
    justifyContent:'space-evenly',
   
},
card:{

    width:width,
    height:50,
    backgroundColor: '#7189FF',
    elevation:3,
    borderRadius:5,
    marginLeft:15

},

card2:{
    width:width,
    height:50,
    backgroundColor: '#7189FF',
    elevation:3,
    borderRadius:5,
    marginLeft:Dimensions.get('window').width/2 
}



})