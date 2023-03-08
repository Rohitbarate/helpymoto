import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllBookings from '../screens/bookingScreens/AllBookings';
import OnGoingBookings from '../screens/bookingScreens/OnGoingBookings';
import CompletedBookings from '../screens/bookingScreens/CompletedBookings';
import CancelledBookings from '../screens/bookingScreens/CancelledBookings';

const Tab = createMaterialTopTabNavigator();

const BookingStack = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarIndicatorStyle: {
        opacity:0
      },
      tabBarActiveTintColor:'#fff',
      tabBarStyle: {
        paddingVertical:10,
        shadowColor:'#fff',
      },
      tabBarItemStyle: {
        marginHorizontal:5,
        backgroundColor: '#5d5fef',
        borderRadius:20,
      },
      tabBarLabelStyle: {fontSize: 15,fontWeight:'900'},
      tabBarScrollEnabled:true,
      tabBarPressColor:'#fff',
     
    }}
    initialRouteName="All"
    >
     <Tab.Screen name="All" component={AllBookings} />
      <Tab.Screen name="OnGoing" component={OnGoingBookings} />
     <Tab.Screen name="Completed" component={CompletedBookings} />
     <Tab.Screen name="Cancelled" component={CancelledBookings} />
    </Tab.Navigator>
  )
}

export default BookingStack