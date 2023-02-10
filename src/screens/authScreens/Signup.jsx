import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const Signup = ({navigation}) => {
  const [actCreated, setActCreated] = useState(false);

  const SelectCar = () => {
    return (
      <View style={[styles.container, {paddingTop: 20}]}>
        <Text style={styles.HEADER}>Select your vehicle </Text>
        <View style={[styles.form, {marginTop: 0, paddingHorizontal: 20}]}>
          <Text
            style={{alignSelf: 'flex-start', fontWeight: '800', marginTop: 10}}>
            Vehicle maker :{' '}
          </Text>
          <TextInput
            style={[styles.input, {width: '100%'}]}
            // onChangeText={onChangeNumber}
            // value=""
            placeholder="car maker e.g. Maruti suzuki"
            keyboardType="default"
          />
          <Text
            style={{alignSelf: 'flex-start', fontWeight: '800', marginTop: 10}}>
            Vehicle model :{' '}
          </Text>
          <TextInput
            style={[styles.input, {width: '100%'}]}
            // onChangeText={onChangeNumber}
            // value=""
            placeholder="car maker e.g. Alto"
            keyboardType="default"
          />
          <TouchableOpacity
            style={[styles.btn, {width: '100%'}]}
            onPress={() => navigation.replace('Home')}>
            <Text style={styles.btnText}>Add Car</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 10,
            height: 1,
            backgroundColor: '#5d5fef',
          }}
        />
        <ScrollView keyboardShouldPersistTaps="handled">
          <Text style={{fontStyle: 'italic', color: '#ff0212'}}>
            *select vehicle from below list
          </Text>
        </ScrollView>
      </View>
    );
  };

  // root component

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#fff'}}>
      {actCreated ? (
        <SelectCar />
      ) : (
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
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              value=""
              placeholder="full name"
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              value=""
              placeholder="phone number"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              value=""
              placeholder="email"
            />
            <Text style={{fontStyle: 'italic'}}>
              *Password must contain at least 8 characters.
            </Text>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value=""
              placeholder="password" 
              secureTextEntry={true}
            />
              <TouchableOpacity
          style={{
            alignSelf: 'flex-end',

          }}
          >
          <Text
            style={{
              color: '#5d5fefd4',
              fontWeight: '900',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            forgot password
          </Text>
          </TouchableOpacity>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              value=""
              placeholder="confirm password"
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={() => setActCreated(true)}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => navigation.replace('login')}>
              <Text style={{color: '#5D5FEF', fontWeight: '900', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View
        style={styles.col}
        >
          <Text style={{fontSize:16,color:'grey',marginVertical:20}}>OR</Text>
          <View
          style={styles.row}
          >
            <TouchableOpacity style={styles.icon}>
            <Icon name='google' size={28} color="#5D5FEF"/>
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
      )}
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  bannerView: {
    marginVertical: 10,
  },
  banner: {
    height: 200,
    width:150,
    marginBottom:20
  },
  HEADER: {
    fontSize: 24,
    fontWeight: '900',
    color: '#5D5FEF',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  input: {
    height: 50,
    width: '90%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#5D5FEF',
    borderRadius: 10,
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#5D5FEF',
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
  col:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%'

  },
  row:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'nowrap',
    width:'100%',
    
  },
  icon:{
    borderColor:"#5D5FEF",
    borderWidth:1,
    padding:5,
    borderRadius:27,
    height:40,
    width:40,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:15
  }
});
