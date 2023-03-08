import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import BookingStack from './BookingStack';
import ChatStack from './ChatStack';
import ProfileStack from './ProfileStack';
import { TouchableOpacity ,Image} from 'react-native';
import { useNavigationState } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const RootStack = () => {

  const routesLength = useNavigationState(state => state.index);
  console.log( "root  "+routesLength)

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#5D5FEF',
        tabBarInactiveTintColor: '#000000',
        headerShown: false,
       headerRightContainerStyle:{
        paddingRight:15
       }
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
         

        }}
      />
      <Tab.Screen
        name="BookingsStack"
        component={BookingStack}
        options={({navigation})=>({
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
          headerLeftContainerStyle:{
            paddingLeft:15
          },
          headerLeft: () => (
            <TouchableOpacity>
             <Icon name='bars' size={24}  color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
             onPress={()=>navigation.navigate('UserStack')}
            >
              <Image
                style={{height: 40, aspectRatio: 1, borderRadius: 20}}
                source={require('../assets/images/user.png')}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="ChatsStack"
        component={ChatStack}
        options={({navigation})=>({
          headerShown:true,
          headerTitle:'Chats',
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          tabBarLabel: 'Chats',
          headerStyle: {backgroundColor: '#5D5FEF'},
          tabBarIcon: ({color, size}) => (
            <Icon name="wechat" color={color} size={size} />
          ),
          headerLeftContainerStyle:{
            paddingLeft:15
          },
          headerLeft: () => (
            <TouchableOpacity
            onPress={()=>navigation.openDrawer()}
            >
             <Icon name='bars' size={24}  color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
             onPress={()=>navigation.navigate('UserStack')}
            >
              <Image
                style={{height: 40, aspectRatio: 1, borderRadius: 20}}
                source={require('../assets/images/user.png')}
              />
            </TouchableOpacity>
          ),
        })}
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
