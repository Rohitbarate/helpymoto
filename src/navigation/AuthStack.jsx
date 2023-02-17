import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/authScreens/Login'
import Signup from '../screens/authScreens/Signup'
import ForgotPass from '../screens/authScreens/ForgotPass'
import AddUserInfo from '../screens/authScreens/AddUserInfo'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    initialRouteName="signup"
    >
        <Stack.Screen name='signup' component={Signup} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='Add info' component={AddUserInfo} options={{headerShown:true,headerTitle:''}} />
        <Stack.Screen name='forgotPass' component={ForgotPass} />
    </Stack.Navigator>
  )
}

export default AuthStack
