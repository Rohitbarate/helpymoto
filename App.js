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

  auth().onAuthStateChanged(user => {
    if (user) {
      setAutheticated(true);
      setLoggedUser(user);
      storeData(loggedUser);
      // Alert.alert("Login successfully 🎉🎉")
    } else {
      setAutheticated(false);
      // Alert.alert("Login failed!")
    }
  });


  const storeData = async value => {
    try {
      const Val = JSON.stringify(value);
      await AsyncStorage.setItem('@user_info', Val);
      console.log("done");
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#5D5FEF" barStyle="dark-content" />
      {!authenticated ? <AuthStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default App;
