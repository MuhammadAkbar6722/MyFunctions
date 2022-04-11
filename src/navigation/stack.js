import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import App from '../../App';
import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import Welcom from '../screen/Welcom';
const Stack = createNativeStackNavigator();
const stack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home'  component={App} />
            <Stack.Screen name='SignIn'  component={SignIn} />
            <Stack.Screen name='SignUp'  component={SignUp} />
            <Stack.Screen name='Welcom'  component={Welcom} />



        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default stack