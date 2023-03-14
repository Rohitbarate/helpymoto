import {Alert, StatusBar} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
// import RootStack from './src/navigation/RootStack';
import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector, useDispatch} from 'react-redux';
import store from './src/redux/store';
import {createUser} from './src/redux/actions';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import BottomTab from './src/components/organisms/BottomTab';

const App = () => {
  const [authenticated, setAutheticated] = useState(true);
  const [loggedUser, setLoggedUser] = useState(
    useSelector(state => {
      return state.user;
    }),
  );
  const [isAllSet, setIsAllSet] = useState(true);
  const [routeIndex, setRouteIndex] = useState(0);
  const navigationRef = useNavigationContainerRef();
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
  //     storeData(user.phoneNumber);
  //     // Alert.alert("Login successfully 🎉🎉")
  //   } else {
  //     setAutheticated(false);
  //     // Alert.alert("Login failed!")
  //   }
  // });

  // check user logged with email
  // const isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   if (isSignedIn) {
  //     const currentUser = await GoogleSignin.getCurrentUser();
  //     setAutheticated(true);
  //     setLoggedUser(currentUser);
  //     storeData(currentUser.user);
  //     console.log('islog', currentUser.user);
  //   } else {
  //     setAutheticated(false);
  //   }
  // };

  // const storeData = async phone => {
  //   try {
  //     dispatch(
  //         createUser({
  //           name: 'Rushikesh Bhumkar',
  //           email: 'rushi100@gmail.com',
  //           password: 'rushi@1112',
  //           mobNo: phone,
  //           photo: '',
  //           vehicle: {
  //             name: 'porsche 911',
  //             number: 'MH 12 RB 02',
  //             cNumber: '540804565804',
  //             bYear: 2022,
  //             cylenderNo: 6,
  //           },
  //         }),
  //       );
  //   } catch (e) {
  //     // saving error
  //     console.log(e);
  //   }
  // };

  const getData = async () => {
    try {
  if (Object.keys(loggedUser).length === 0) {
    setAutheticated(false);
  } else {
    setAutheticated(true);
  }
  //     const value = await AsyncStorage.getItem('@user_info');
  //     if (value !== null) {
  //       setIsAllSet(JSON.parse(value.isAllSet));
  //       // console.log("rohit: "+isAllSet);
  //     }
    } catch (e) {
      // error reading value
      console.log('error', e);
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        const index = navigationRef.getState().index;
        setRouteIndex(index);
      }}>
      {authenticated ? (
        <>
          <DrawerNavigator />
          <BottomTab index={routeIndex} />
        </>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default App;
