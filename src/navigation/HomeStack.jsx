import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Location from 'react-native-vector-icons/Octicons';
import HeartIcon from 'react-native-vector-icons/Fontisto';
import Home from '../screens/rootScreens/Home';
import HireDriver from '../screens/serviceScreens/HireDriver';
import DriverInfo from '../screens/serviceScreens/DriverInfo';
import CleaningServices from '../screens/serviceScreens/CleaningServices';
import NearbyDrivers from '../screens/serviceScreens/NearbyDrivers';
import TowingServices from '../screens/serviceScreens/TowingServices';
import ServiceDetails from '../screens/serviceScreens/ServiceDetails';
import Payment from '../screens/paymentScreens/Payment';
import PaymentMethods from '../screens/paymentScreens/PaymentMethods';
import CrDbCard from '../screens/paymentScreens/CrDbCard';
import Upi from '../screens/paymentScreens/Upi';
import NetBanking from '../screens/paymentScreens/NetBanking';
import PayOnService from '../screens/paymentScreens/PayOnService';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmPayment from '../screens/paymentScreens/ConfirmPayment';
import {useNavigation, useNavigationState} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}) => {

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={({route,})=>({
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 20, fontWeight: '600',textTransform:'capitalize'},
        headerStyle: {backgroundColor: '#5D5FEF'},
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity
           onPress={()=>navigation.navigate('Profile')}
          >
            <Image
              style={{height: 40, aspectRatio: 1, borderRadius: 20}}
              source={require('../assets/images/user.png')}
            />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
          onPress={()=>navigation.openDrawer()}
          >
           <Icon name='bars' size={24}  color="#fff" />
          </TouchableOpacity>
        ),
      })}
  
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={({route,navigation})=>({
          headerTitle:'Home',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 20, fontWeight: '600',textTransform:'capitalize'},
          headerStyle: {backgroundColor: '#5D5FEF'},
          headerShown: true,
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
        })}
      />
      <Stack.Screen name="Hire Driver" component={HireDriver} />
      <Stack.Screen
        name="Nearby Drivers"
        component={NearbyDrivers}
        // options={{
        //   headerTitle: 'Available drivers',
        //   headerTitleStyle: {
        //     fontWeight: '900',
        //   },
        // }}
      />
      <Stack.Screen name="Driver" component={DriverInfo} />
      <Stack.Screen
        name="Cleaning Services"
        component={CleaningServices}
        options={{
          animation: 'slide_from_bottom',
          // headerShown:false
        }}
      />
      <Stack.Screen name="Towing Service" component={TowingServices} />
      <Stack.Screen
        name="Service Details"
        component={ServiceDetails}
        options={({route}) => ({
          headerTitle: route.params.item.serviceName,
          // headerShown: true,
          animation: 'simple_push',
        })}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#fff',
    fontSize: 12,
  },
});
