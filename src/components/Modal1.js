import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet}


from 'react-native'
import MyButton from '../components/button'
class ModalExample extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"slide"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }
            >
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                 <MyButton text={"Test"} onPress={()=> alert("hello model")}/>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Open Modal</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalExample

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 10,
      width:'40%'
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 100
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
})