import {StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import RootStack from './src/navigation/RootStack';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Provider, useDispatch} from 'react-redux';
import store from './src/redux/store';
import {createUser} from './src/redux/actions';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './src/screens/rootScreens/Profile';
import PaymentMethods from './src/screens/paymentScreens/PaymentMethods';
import Root from './src/navigation/DrawerNavigator';
import HomeStack from './src/navigation/HomeStack';
import ProfileStack from './src/navigation/ProfileStack';
import ChatStack from './src/navigation/ChatStack';
import BookingStack from './src/navigation/BookingStack';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import BottomTab from './src/components/organisms/BottomTab';

const App = () => {
  const [authenticated, setAutheticated] = useState(true);
  const [loggedUser, setLoggedUser] = useState(null);
  const [isAllSet, setIsAllSet] = useState(false);
  const dispatch = useDispatch();

  const Drawer = createDrawerNavigator();

  useEffect(() => {
    // GoogleSignin.configure();
    // isSignedIn();
    // getData();
    dispatch(
      createUser({
        name: 'Rushikesh Bhumkar',
        email: 'rushi100@gmail.com',
        password: 'rushi@1112',
        mobNo: 9876543210,
        photo: '',
        vehicle: {
          name: 'porsche 911',
          number: 'MH 12 RB 02',
          cNumber: '540804565804',
          bYear: 2022,
          cylenderNo: 6,
        },
      }),
    );
  }, []);

  // auth().onAuthStateChanged(user => {
  //   if (user) {
  //     setAutheticated(true);
  //     setLoggedUser(user);
  //     storeData(loggedUser);
  //     // Alert.alert("Login successfully 🎉🎉")
  //   } else {
  //     setAutheticated(false);
  //     // Alert.alert("Login failed!")
  //   }
  // });

  // check user logged with email
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      const currentUser = await GoogleSignin.getCurrentUser();
      setAutheticated(true);
      setLoggedUser(currentUser);
      storeData(currentUser.user);
      console.log('islog', currentUser.user);
    } else {
      setAutheticated(false);
    }
  };

  const storeData = async user => {
    try {
      console.log(
        JSON.stringify({
          user,
          islogged: true,
        }),
      );
      const Val = {
        ...user,
        isAllSet: false,
      };
      await AsyncStorage.clear();
      await AsyncStorage.setItem('@user_info', JSON.stringify(Val));
      console.log(JSON.stringify(Val));
      getData();
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_info');
      if (value !== null) {
        setIsAllSet(JSON.parse(value.isAllSet));
        // console.log("rohit: "+isAllSet);
      }
    } catch (e) {
      // error reading value
      console.log('error', e);
    }
  };

  return (
    // <GestureHandlerRootView>
      <NavigationContainer>
        <DrawerNavigator/>
        <BottomTab/>
      </NavigationContainer>
  );
};

export default App;
