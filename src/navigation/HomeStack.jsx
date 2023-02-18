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

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        presentation:'modal',
        animation:'slide_from_right',
        animationDuration:150,
        animationTypeForReplace:'push',
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 16, fontWeight: '600'},
        headerStyle: {backgroundColor: '#5D5FEF'},
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
        headerRight: () => (
          <TouchableOpacity>
            <Image
              style={{height: 40, aspectRatio: 1, borderRadius: 20}}
              source={require('../assets/images/user.png')}
            />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Icon name="bars" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Hire Driver" component={HireDriver} />
      <Stack.Screen
        name="Nearby Drivers"
        component={NearbyDrivers}
        options={{
          headerTitle: 'Available drivers',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }}
      />
      <Stack.Screen
        name="Driver"
        component={DriverInfo}
        options={({route}) => ({
          headerTitle: route.params.driver.name,
          headerTitleStyle: {
            fontWeight: '900',
          },
          headerRight: () => (
            <HeartIcon name="heart-alt" size={24} color="#fff" />
          ),
        })}
      />
      <Stack.Screen name="Cleaning Services" component={CleaningServices}
      options={{
        animation:'slide_from_bottom'
      }}
      />
      <Stack.Screen name="Towing Service" component={TowingServices} />
      <Stack.Screen
        name="ServiceDetails"
        component={ServiceDetails}
        options={({route}) => ({
          headerTitle: route.params.item.serviceName,
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '900',
          },
          animation:"simple_push",
        })}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: true,
          headerTitle: 'Payment',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }}
      />
      <Stack.Screen
        name="Payment Methods"
        component={PaymentMethods}
        options={{
          headerShown: true,
          headerTitle: 'Payment Methods',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }}
      />
      <Stack.Screen name="credit/debit card" component={CrDbCard}  options={{
          headerShown: true,
          headerTitle: 'credit/debit card',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }} />
      <Stack.Screen name="UPI" component={Upi}  options={{
          headerShown: true,
          headerTitle: 'UPI',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }} />
      <Stack.Screen name="Net Banking" component={NetBanking}  options={{
          headerShown: true,
          headerTitle: 'Net Banking',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }} />
      <Stack.Screen name="Pay On Service" component={PayOnService}  options={{
          headerShown: true,
          headerTitle: 'Pay On Service',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }} />
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
