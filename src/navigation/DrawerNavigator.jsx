import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootStack from './RootStack';
import ProfileStack from './ProfileStack';
import BookingStack from './BookingStack';
import ChatStack from './ChatStack';
import MyAccount from '../screens/activityScreens/MyAccount';
import Help from '../screens/activityScreens/Help';
import TermsPolicy from '../screens/activityScreens/TermsPolicy';
import HomeStack from './HomeStack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  return getFocusedRouteNameFromRoute(route)
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
  <Drawer.Navigator
  screenOptions={({route})=>({
    headerTitle:getFocusedRouteNameFromRoute(route),
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {fontSize: 20, fontWeight: '600'},
    headerStyle: {backgroundColor: '#5D5FEF'},
    headerShown: true,
  })}
  >
   
    <Drawer.Screen name='Home' component={HomeStack}
    options={({ route }) => ({
      headerTitle: getHeaderTitle(route),
    })}
    />
    <Drawer.Screen name='Bookings' component={BookingStack}  
    // options={{
    //       headerTintColor: '#fff',
    //       headerTitleAlign: 'center',
    //       headerTitleStyle: {fontSize: 20, fontWeight: '600'},
    //       headerStyle: {backgroundColor: '#5D5FEF'},
    //       headerShown: true,
    //       title:'Your Bookings',
    //       tabBarLabel: 'Bookings',
    //       tabBarIcon: ({color, size}) => (
    //         <Icon name="list-alt" color={color} size={size} />
    //       ),
    //     }}
        />
    <Drawer.Screen name='Chats' component={ChatStack}/>
    <Drawer.Screen name='Profile' component={ProfileStack} 
    
    // options={{
    //       headerTintColor: '#fff',
    //       headerTitleAlign: 'center',
    //       headerTitleStyle: {fontSize: 20, fontWeight: '600'},
    //       headerStyle: {backgroundColor: '#5D5FEF'},
    //       headerShown: true,
    //       // tabBarIcon: ({color, size}) => (
    //       //   <Icon name="list-alt" color={color} size={size} />
    //       // ),
    //     }}
         />
    <Drawer.Screen name='Help Center' component={Help} />
    <Drawer.Screen name='TermPolicy' component={TermsPolicy} options={{title:'Terms, Policies and Licenses'}} />
  </Drawer.Navigator>
  );
};

export default DrawerNavigator;
