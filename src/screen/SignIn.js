import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignIn = () => {
    return (
        <ScrollView style={{backgroundColor:'#5f9ea0' , flex:1}}>
                <View style={{flex:1 , }}>
                <View style={{backgroundColor:'blue' , height:200 ,borderBottomRightRadius:250 , justifyContent:'center' , alignItems:'stretch' }}>
                   <Text style={{color:'white' , fontSize:88}}>SignIn</Text> 
                </View>
                <View style={{justifyContent:'center' , alignItems:"center"  , marginTop:'30%'}}>
                    
                 <TextInput style={{width:'80%' , borderWidth:1,  borderRadius:20, borderColor:"#696969",   color:'white' , fontSize:18 }}
                  placeholder='Email'
                  placeholderTextColor={"white"}
                  ></TextInput>
                  <TextInput style={{width:'80%' , borderWidth:1 ,  borderRadius:20, borderColor:"#696969" , marginTop:'20%' }}
                  placeholder='Password'></TextInput>

                  <TouchableOpacity style={{  marginTop:'10%' , borderRadius:20 , borderWidth:2, borderColor:'blue'}}>
                      <Text style={{fontSize:40 , color:'white' }}>SignIn</Text>
                  </TouchableOpacity>
                 </View>
            </View>
        </ScrollView>
    )
}

export default SignIn