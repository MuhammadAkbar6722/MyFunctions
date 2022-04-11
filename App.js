import { View, Text, Button, ImageBackground, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MyButton from './src/components/button'
import Model from './src/components/model'

const App = ({ navigation }) => {
  // const [count, setcount] = useState(0);
  // const incr = () => { setcount(count + 1) }
  // const dec = () => { setcount(count - 1) }
  // if (count < 0) {

  // }

  return (
    <ImageBackground resizeMode='stretch' blurRadius={2}
  
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      source={require("./src/assets/back2.png")}>
      <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>

        <Image source={require("./src/assets/dummy5.png")} style={{ height: 250, width: 250, marginTop: -50, borderRadius: 30 }}></Image>

        {/* SignInButton */}

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
          style={{
            borderWidth: 1,
            borderColor: 'white',
            width: 250, borderRadius: 30,

            marginTop: 50
          }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,

          }}>
            <Text style={{ color: 'white', fontSize: 22 }}>signIn</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}
          style={{
            borderWidth: 1,
            borderColor: 'white',
            width: 250, borderRadius: 30,
            marginTop: 50
          }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,

          }}>
            <Text style={{ color: "#fffafa", fontSize: 22 }}>SignUp</Text>
          </View>
        </TouchableOpacity>
      
       </View> 
       {/* <MyButton   text='Submit'
                     type='outlined'
                     bordered
                     size='large'
        onPress={()=> alert("hello")}/> */}
    </ImageBackground>


  )
}

export default App