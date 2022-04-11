import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Mybutton from '../components/button'

const SignIn = ({ navigation }) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    console.log(password)

    const valid = () => {

        const Email = email
        const Pass = password
        if (Email === "") {
            alert("enater email")
            return 

        }
        if (Pass === '') {
            alert("Enter password")
          return 
        }
        // if (Pass.length <= 6) {
        //     alert("enter 6 charactor password")
        // }
        else{
            navigation.navigate("Welcom")

             return false
        }




    }
    const allvalid = () => {
        const e_mail = email
        const passw = password
        alert(e_mail)

        if (valid()) {
          

            if (e_mail && passw !='') {
                return true
            }
            else {
              alert('sjkdjfalksdjf')
            }
        }

    }
    return (

        <ScrollView style={{ backgroundColor: '#5f9ea0', flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={{ backgroundColor: 'blue', height: 200, borderBottomRightRadius: 250, justifyContent: 'center', alignItems: 'stretch' }}>
                    <Text style={{ color: 'white', fontSize: 88 }}>SignIn</Text>
                </View>
                <View style={{  justifyContent: 'center', alignItems: "center", marginTop: '30%' ,flex:1}}>

                    <TextInput style={{ width: '80%', borderWidth: 1, borderRadius: 20, borderColor: "#696969", color: 'white', fontSize: 22 }}
                        placeholder='Email'
                        placeholderTextColor={"white"}
                        onChangeText={res => setemail(res)}
                    ></TextInput>
                    <TextInput style={{ width: '80%', fontSize: 22, borderWidth: 1, borderRadius: 20, borderColor: "#696969", marginTop: '20%', marginBottom:'10%' }}
                        placeholder='Password'
                        placeholderTextColor={"white"}
                        secureTextEntry={true}
                        onChangeText={res => setpassword(res)}
                    ></TextInput>
                      
            
                    <Mybutton
                     text='Submit'
                     type='outlined'
                     bordered
                     size='large'
                    onPress={()=> allvalid()}
                    />
                    {/* <TouchableOpacity onPress={() => allvalid()}
                        style={{ marginTop: '10%', borderRadius: 20, borderWidth: 2, borderColor: 'white' }}>
                        <Text style={{ fontSize: 40, color: 'black' }}>SignIn</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </ScrollView>
    )
}

export default SignIn