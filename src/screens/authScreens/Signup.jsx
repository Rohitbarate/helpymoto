import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const Signup = ({navigation}) => {
  const [mobNo, setMobNo] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [loading, setLoading] = useState(false);
 
  

  useEffect(() => {
    // GoogleSignin.configure();
 
  }, [])

//  const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log(userInfo)
//       storeData(userInfo.user)
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log("user cancelled the login flow")
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log("operation (e.g. sign in) is in progress already")
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         console.log("play services not available or outdated")
//       } else {
//         console.log(error ,"some other error happened")
//       }
//     }
//   };
  

  const SignupWithOtp = async number => {
    // setLoading(true);
    // try {
    //   const cnfm = await auth().signInWithPhoneNumber(number);
    //   setConfirm(cnfm);
    // } catch (error) {
    //   console.log(error);
    // }
    // setLoading(false);
   
  };

  async function confirmCode(otp) {
    // setLoading(true)
    // try {
    //   await confirm.confirm(otp);
    //   Alert.alert('Signup successfully');
    //   setConfirm(null)
    // } catch (error) {
    //   console.log('Invalid code.' + error);
    // }
    // setLoading(false);
  }


  const storeData = async user => {
    try {
     
      // const Val ={
      //   ...user,
      //   isAllSet:false
      // }
      // await AsyncStorage.clear()
      // await AsyncStorage.setItem('@user_info', JSON.stringify(Val));
      // console.log("sign scr user created");
      // getData()
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={styles.bannerView}>
          <Image
            style={styles.banner}
            source={require('../../assets/images/icon.png')}
          />
        </View>
        <Text style={styles.HEADER}>Welcome</Text>
        {/* <View > */}
        {!confirm && (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={text => setMobNo(text)}
              value={mobNo}
              placeholder="Enter Your Phone Number"
              keyboardType="numeric"
              placeholderTextColor="grey"
              maxLength={10}
              
            />

            <TouchableOpacity
              disabled={mobNo.length == 10 ? false : true}
              style={[
                styles.btn,
                {
                  backgroundColor: mobNo.length < 10 ? 'grey' : '#5D5FEF',
                },
              ]}
              onPress={() => {}
              // SignupWithOtp('+91' + mobNo)
              }>
              {loading ? (
                <ActivityIndicator color="#ffffff" size={34} />
              ) : (
                <Text style={styles.btnText}>Send Otp</Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        {confirm && (
          <View style={styles.form}>
            <View style={[styles.row, {marginBottom: 10}]}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 19,
                  alignSelf: 'flex-start',
                  fontWeight: '900',
                }}>
                +91 {mobNo}
              </Text>
              {/* <TouchableOpacity
                disabled={mobNo.length == 10 ? false : true}
                style={{
                  backgroundColor: '#5D5FEF',
                  height: 25,
                  borderRadius: 12,
                  paddingHorizontal: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}
                onPress={() => {
                  setConfirm(null);
                  setOtp('');
                  setLoading(false)
                }}>
                <Text style={{color: '#fff', fontSize: 12, fontWeight: '900'}}>
                  Change Number
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                disabled={mobNo.length == 10 ? false : true}
                style={{
                  backgroundColor: '#5D5FEF',
                  height: 25,
                  borderRadius: 12,
                  paddingHorizontal: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}
                onPress={() =>{
                  //  SignupWithOtp('+91' + mobNo);setOtp('');
                   }}>
                <Text style={{color: '#fff', fontSize: 12, fontWeight: '900'}}>
                  Resend Otp
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={text => setOtp(text)}
              value={otp}
              placeholder=" Enter Otp"
              placeholderTextColor="grey"
              keyboardType="number-pad"
            />
            <TouchableOpacity
              disabled={mobNo.length == 10 ? false : true}
              style={[
                styles.btn,
                {
                  backgroundColor: otp.length < 6 ? 'grey' : '#5D5FEF',
                },
              ]}
              onPress={() => {
                // confirmCode(otp)
                }}>
               {loading ? (
                <ActivityIndicator color="#ffffff" size={34}/>
              ) : (
                <Text style={styles.btnText}>Verify Otp</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
        {/* </View> */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => navigation.replace('login')}>
            <Text style={{color: '#5D5FEF', fontWeight: '900', fontSize: 16}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <Text style={{fontSize: 16, color: 'grey', marginVertical: 20}}>
            OR
          </Text>
          <View style={styles.row}>
            <TouchableOpacity 
            onPress={()=>{
              // signInWithGoogle()
            }} 
            style={styles.icon}
            >
              <Icon name="google" size={28} color="#5D5FEF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Icon name="facebook" size={28} color="#5D5FEF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Icon name="twitter" size={28} color="#5D5FEF" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
     { confirm && <View style={styles.infoBar}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
     <ActivityIndicator
        size={24}
        color={'#15ff00'}
        hidesWhenStopped

      />
        <Text style={{color:'#fff',fontSize:14,fontWeight:'500',marginLeft:5}} >
        
          Auto Verifying, {mobNo}</Text>
          </View>
        <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setConfirm(null);
                  setOtp('');
                  setLoading(false)
                }}>
                <Text style={{color: '#15ff00', fontSize: 15, fontWeight: '900'}}>
                  EDIT PHONE
                </Text>
              </TouchableOpacity>
      </View>}
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
  },
  banner: {
    height: 200,
    width: 150,
    marginBottom: 20,
  },
  HEADER: {
    fontSize: 24,
    fontWeight: '900',
    color: '#5D5FEF',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#5D5FEF',
    borderRadius: 10,
    color: '#000000',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 18,
  },
  btn: {
    width: '90%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    width: '100%',
  },
  icon: {
    borderColor: '#5D5FEF',
    borderWidth: 1,
    padding: 5,
    borderRadius: 27,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  infoBar:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    height:50,
    backgroundColor:'#5D5FEF'
  }
});
