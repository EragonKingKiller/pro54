import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

class MahatmaButton extends Component {
  displayAlert=()=>{
    alert('Mahatma Gandhi of Ahemdabad')
  }
  render(){
    return(
      <Button color={this.props.color} title="Mahatma Gandhi" onPress={this.displayAlert}/>
    )
  }
}
class CharlesButton extends Component {
  displayAlert=()=>{
    alert('Charles Babbage of London')
  }
  render(){
    return(
      <Button color={this.props.color} title="Charles Babbage" onPress={this.displayAlert}/>
    )
  }
}
class NelsonButton extends Component {
  displayAlert=()=>{
    alert('Nelson Mandela of Mvezo')
  }
  render(){
    return(
      <Button color={this.props.color} title="Nelson Mandela" onPress={this.displayAlert}/>
    )
  }
}
 class MotherButton extends Component {
  displayAlert=()=>{
    alert('Mother Teresa of Skopje')
  }
  render(){
    return(
      <Button color={this.props.color} title="Mother Teresa" onPress={this.displayAlert}/>
    )
  }
} 
export default class App extends Component { 
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <CharlesButton 
            title="Charles Babbage"  
            color = "red"
            onPress={() => Alert.alert('The father of computing.')} />
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <MahatmaButton 
            title="Mahatma Gandhi"  
            color = "blue"
            onPress={() => Alert.alert('The father of nation.')} />
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <NelsonButton 
            title="Nelson Mandela"  
            color = "purple"
            onPress={() => Alert.alert('The first black president of South Africa. ')} />
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <MotherButton 
            title="Mother Teresa"  
            color = "green"
            //add code here to show alert box for Mother Teresa button
            
             />
        </View>
      </View>
    )
  }
}