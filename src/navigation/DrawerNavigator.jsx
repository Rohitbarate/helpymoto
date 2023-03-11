import {View, TouchableOpacity, Image, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileStack from './ProfileStack';
import BookingStack from './BookingStack';
import ChatStack from './ChatStack';
import Help from '../screens/activityScreens/Help';
import TermsPolicy from '../screens/activityScreens/TermsPolicy';
import HomeStack from './HomeStack';
import {
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import Location from 'react-native-vector-icons/Octicons';
import DrawerView from '../components/organisms/DrawerView';

function getHeaderTitle(route) {
  return getFocusedRouteNameFromRoute(route);
}


const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerView {...props} />}
      screenOptions={({route, navigation}) => ({
        headerTitle: getHeaderTitle(route),
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: '600',
          textTransform: 'capitalize',
        },
        headerStyle: {backgroundColor: '#5D5FEF'},
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{height: 40, aspectRatio: 1, borderRadius: 20}}
              source={require('../assets/images/user.png')}
            />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          headerShown: false,
          headerTitle: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Location name="location" size={24} color="#fff" />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: 10,
                }}>
                <Text style={[styles.txt, {fontSize: 16}]}>Delhi </Text>
                <Text style={styles.txt}>Change location</Text>
              </View>
            </View>
          ),
          headerTitleStyle: {
            textTransform: 'capitalize',
          },
          drawerIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        })}
      />
      <Drawer.Screen
        name="Bookings"
        component={BookingStack}
        options={{
          headerTitle: 'your bookings',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            textTransform: 'capitalize',
          },
          headerStyle: {backgroundColor: '#5D5FEF'},
          headerShown: true,
          title: 'Your Bookings',
          tabBarLabel: 'Bookings',
          tabBarIcon: ({color, size}) => (
            <Icon name="list-alt" color={color} size={size} />
          ),
          drawerIcon: ({color, size}) => (
            <Icon name="list-alt" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chats"
        component={ChatStack}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="wechat" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="user-circle" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() =>{Alert.alert('notification screen is remaining')} }>
              <Icon name="bell" size={24} color={'#ffa500'} />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Help Center"
        component={Help}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="question-circle-o" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="TermPolicy"
        component={TermsPolicy}
        options={{
          title: 'Terms, Policies and Licenses',
          drawerIcon: ({color, size}) => (
            <Icon name="drivers-license-o" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({

  txt: {
    color: '#fff',
    fontSize: 12,
  },
});
