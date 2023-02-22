import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import BookingStack from './BookingStack';
import ChatStack from './ChatStack';
import ProfileStack from './ProfileStack';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#5D5FEF',
        tabBarInactiveTintColor: '#000000',
        headerShown: false,
      }}
      >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerLeft: () => (
            <TouchableOpacity>
             <Icon name='bars' size={24}  color="#fff" />
            </TouchableOpacity>
          ),

        }}
      />
      <Tab.Screen
        name="BookingsStack"
        component={BookingStack}
        options={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 20, fontWeight: '600'},
          headerStyle: {backgroundColor: '#5D5FEF'},
          headerShown: true,
          title:'Your Bookings',
          tabBarLabel: 'Bookings',
          tabBarIcon: ({color, size}) => (
            <Icon name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatsStack"
        component={ChatStack}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({color, size}) => (
            <Icon name="wechat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({color, size}) => (
            <Icon name="user-circle" color={color} size={size} />
          ),
          headerLeft: () => (
            <TouchableOpacity>
             <Icon name='bars' size={24}  color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
