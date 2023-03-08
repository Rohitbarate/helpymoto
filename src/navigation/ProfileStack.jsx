import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/rootScreens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome';
import BellIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import MyAccount from '../screens/activityScreens/MyAccount';
import Help from '../screens/activityScreens/Help';
import { useNavigationState } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const ProfileStack = () => {

  return (
   <Stack.Navigator
   screenOptions={{
  headerShown:false
   }}
  //  screenOptions={({navigation})=>({
  //   headerLeft: () => (
  //     <TouchableOpacity 
  //     onPress={()=>navigation.openDrawer()}
  //     >
  //      <Icon name='bars' size={24}  color="#000" />
  //     </TouchableOpacity>
  //   ),
  //   headerRight: () => (
  //     <TouchableOpacity>
  //      <BellIcon name='notifications' size={24}  color="#ffb500" />
  //     </TouchableOpacity>
  //   ),
    
  // })}
   >
    <Stack.Screen
     name='profile'  
    component={Profile} 
    options={{
     headerShown:false
    }}
    />
    <Stack.Screen name='My Account' component={MyAccount} />
    <Stack.Screen name='Help Center' component={Help} />
   </Stack.Navigator>
  )
}

export default ProfileStack