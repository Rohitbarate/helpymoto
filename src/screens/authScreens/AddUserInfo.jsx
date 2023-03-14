import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState} from 'react';
import Input from '../../components/atoms/Input';
import auth from '@react-native-firebase/auth';

const AddUserInfo = ({navigation}) => {
  const [user, setUser] = useState(null);

  // useEffect(()=>{
  //    AsyncStorage.getItem('@user_info').then((userData)=>{
  //     setUser(JSON.parse(userData));
  //     console.log(user);

  //   })
  // },[])

  const userAllSet = () => {
    // AsyncStorage.getItem('@user_info').then((userData)=>{
    //   setUser(JSON.parse(userData))
    //   console.log('user'+user)})
    // const userData = await auth().currentUser;
    // setuser(userData);
    // console.log(JSON.stringify(user));
    // const userData ={
    //   ...user,
    //   isAllSet:true
    // }
    // AsyncStorage.setItem('@user_info',JSON.stringify(userData))
    // console.log(userData)
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#fff'}}>
      <Text
        style={{
          color: '#000',
          fontSize: 24,
          fontWeight: 'bold',
          marginVertical: 10,
        }}>
        Add your info
      </Text>
      <View style={styles.container}>
        <Input
          placeHolder="First name"
          isSecure={false}
          keyboardType="default"
        />
        <Input
          placeHolder="Last name"
          isSecure={false}
          keyboardType="default"
        />
        <Text style={{color: 'grey', fontSize: 12, textAlign: 'left'}}>
          Make sure it matches the name on your government ID.
        </Text>
        <Input
          placeHolder="Phone number"
          isSecure={false}
          keyboardType="number-pad"
        />
        <Input placeHolder="Email" isSecure={false} keyboardType="default" />
        <Input placeHolder="Password" isSecure={true} keyboardType="default" />
        <Text style={{color: '#000', fontSize: 16}}>
          By selecting{' '}
          <Text style={{fontWeight: 'bold'}}>Agree and continue</Text>, I agree
          to Helpy moto's{' '}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              textDecorationStyle: 'solid',
              textDecorationColor: '#000',
              textDecorationLine: 'underline',
              color: '#000',
              fontSize: 16,
            }}>
            Term and service,Payments Terms of Service and Nondiscrimination
            Policy, and acknowledge the Privacy Policy.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => userAllSet()} style={styles.btn}>
          <Text style={styles.btnText}>Agree and continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddUserInfo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    flex: 1,
    marginBottom: 20,
  },
  btn: {
    width: '90%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5D5FEF',
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },
});
