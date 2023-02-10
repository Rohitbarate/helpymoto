import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/rootScreens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome';
import BellIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator()

const ProfileStack = () => {

  return (
   <Stack.Navigator
   screenOptions={{
    headerLeft: () => (
      <TouchableOpacity>
       <Icon name='bars' size={24}  color="#000" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity>
       <BellIcon name='notifications' size={24}  color="#ffb500" />
      </TouchableOpacity>
    ),
    
  }}
   >
    <Stack.Screen
     name='profile'  
    component={Profile} 
    options={{
      title:''
    }}
    />
   </Stack.Navigator>
  )
}

export default ProfileStack