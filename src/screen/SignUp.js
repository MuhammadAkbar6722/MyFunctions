import { View, Text , ScrollView , TextInput , TouchableOpacity ,  } from 'react-native'
import React , {useState} from 'react'
import { parseSync } from '@babel/core';
 
const SignUp = () => {
    const [email , setemail]= useState('');
    const [pass , setpass]= useState('');
    const [pnum , setpnum]= useState('');
    const [address , setaddress]= useState('');
   
  const   valid=()=>{
const Email=email
const password =pass
const PNumber=pnum
const Address = address
alert(password)
console.log(Email)
      if (Email==""){
        alert("enter email ")

       }
      if (password==""){
        alert(password)
        alert("Enter Your password ")
        return
      }
      if (PNumber==""){
        if (PNumber.indexOf('0')!=0){
          alert("fist must be zero ")
          return
        }
        alert( "Enter Your Phone Number")
        return
      }
      if (Address==""){
        alert("Enter YOur correct address")
        return
      }
       
       
    }

  return (
    <ScrollView style={{backgroundColor:'#5f9ea0' , flex:1}}>
                <View style={{flex:1 , }}>
                <View style={{backgroundColor:'blue' , height:200 ,borderBottomRightRadius:250 , justifyContent:'center' , alignItems:'stretch' }}>
                   <Text style={{color:'white' , fontSize:88}}>SignUp</Text> 
                </View>
                <View style={{justifyContent:'center' , alignItems:"center"  , marginTop:'10%'}}>
                    
                 <TextInput style={{width:'80%' , borderWidth:1,  borderRadius:20, borderColor:"#696969",   color:'white' , fontSize:18 }}
                  placeholder='Email'
                  placeholderTextColor={"white"}
                  onChangeText={res => setemail(res)}
                  ></TextInput>
                  <TextInput style={{width:'80%' , borderWidth:1 ,  borderRadius:20, borderColor:"#696969" , marginTop:'10%' }}
                  placeholder='Password'
                  secureTextEntry={true}
                  onChangeText={res => setpass(res)}
                  
                  ></TextInput>
                    <TextInput style={{width:'80%' , borderWidth:1,  borderRadius:20, borderColor:"#696969",   color:'white' , fontSize:18 , marginTop:'10%' }}
                  placeholder='PhoneNumber'
                  placeholderTextColor={"white"}
                  onChangeText={res=> setpnum(res)}
                  ></TextInput>
                  <TextInput style={{width:'80%' , borderWidth:1 ,  borderRadius:20, borderColor:"#696969" , marginTop:'10%' }}
                  placeholder='Address'
                  onChangeText={res=>setaddress(res)}
                  ></TextInput>

                  <TouchableOpacity onPress={()=>{valid()}}
                  style={{  marginTop:'10%' , borderRadius:20 , borderWidth:2, borderColor:'blue'}}>
                      <Text style={{fontSize:40 , color:'white' }}>SignIn</Text>
                  </TouchableOpacity>
                 </View>
            </View>
        </ScrollView>
          )
        }

export default SignUp