import {StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import RootStack from './src/navigation/RootStack';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [authenticated, setAutheticated] = useState(true);
  const [loggedUser, setLoggedUser] = useState(null);
  // const [isAllSet,setIsAllSet] = useState(false)


  
 

  auth().onAuthStateChanged(user => {
    if (user) {
      setAutheticated(true);
      setLoggedUser(user);
      // storeData(loggedUser);
      // Alert.alert("Login successfully 🎉🎉")
    } else {
      setAutheticated(false);
      // Alert.alert("Login failed!")
    }
  });


  // const storeData = async value => {
  //   try {
  //     const Val ={
  //       value,
  //       isAllSet:false
  //     }
  //     await AsyncStorage.setItem('@user_info', JSON.stringify(Val));
  //     console.log(JSON.stringify(Val));
  //     getData()
  //   } catch (e) {
  //     // saving error
  //     console.log(e);
  //   }
  // };

  
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@user_info');
  //     if (value !== null) {
  //       setIsAllSet(JSON.parse(value.isAllSet));
  //       console.log("rohit: "+isAllSet);
  //     }
  //   } catch (e) {
  //     // error reading value
  //     console.log('error', e);
  //   }
  // };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#5D5FEF" barStyle="dark-content" />
      {authenticated ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
