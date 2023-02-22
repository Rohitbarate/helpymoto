import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import TotalPriceView from '../../components/atoms/TotalPriceView';
// import CheckBox from '@react-native-community/checkbox';




const Upi = ({navigation, route}) => {
  const {totalBill} = route.params;
  const [isSelected, setSelection] = useState(false);

  // const [upiSelect,setUpiSelect] = useState(false);
  const openURL = async url => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this url: ${url}`);
    }
  };

  return (
    <ScrollView>
      <View style={{flex: 1,marginBottom:20}}>
        <TotalPriceView totalBill={totalBill} />
        <View style={[styles.col, styles.cont]}>
          <Text style={[styles.txt, styles.upitxt]}>UPI</Text>
          <View style={[styles.border]}>
            <View style={[styles.row, styles.imgs]}>
              <TouchableOpacity
              // onPress={()=> Linking.openURL('https://gpay')}
              // onPress={()=> {openURL(phonePeUrl)}}
              >
                {/* <Image source={require('../images/gpay.png')} style={[styles.img,styles.gpay]} /> */}
              </TouchableOpacity>
              <TouchableOpacity
              // onPress={()=> Linking.openURL('tel:+1917972755589')}
              // onPress={()=> Linking.openURL('content://media/internal/images/media')}
              // onPress={()=> Linking.openURL('app://PhonePe.com')}
              >
                {/* <Image source={require('../images/phonepe.png')} style={[styles.img,styles.phonepe]} /> */}
              </TouchableOpacity>
              <TouchableOpacity
              // onPress={()=> Linking.openURL(`whatsapp://send?phone=+919404006892&text=Hello Hiii`)}
              >
                {/* <Image source={require('../images/paytm.png')} style={[styles.img,styles.paytm]} /> */}
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.addupicont]}>
              <TouchableOpacity>
                <Icon
                  name="pluscircleo"
                  size={28}
                  color={'black'}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Text style={[styles.txt, styles.addUPI]}>Add new UPI</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="UPI ID"
              placeholderTextColor="grey"
            />
            <TouchableOpacity style={styles.verifybtn}>
              <Text style={[styles.verifytxt]}>Verify</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, styles.pcstyle]}>
            {/* <CheckBox
          style={styles.checkbox}
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{ true: 'green', false: 'black' }}
        /> */}
            <Text style={[styles.txt, styles.pctxt]}>Have a Promo Code?</Text>
          </View>
          <View style={styles.inptext}>
            {isSelected ? (
              <TextInput
                style={styles.inputPromoCode}
                placeholder="Write Your Promo code here"
                placeholderTextColor="grey"
              />
            ) : (
              ''
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            
        }}>
          <Text style={styles.btnText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Upi;

const styles = StyleSheet.create({
  txt: {
    color: 'black',
  },

  rupee: {
    color: '#5d5fef',
    fontSize: 18,
    paddingEnd: 10,
  },
  inputPromoCode: {
    color: 'black',
    height: 40,
    borderWidth: 1,
    backgroundColor: '#F0F0FF',
    borderColor: '#5d5fef80',
    borderRadius: 20,
    placeholderTextColor: '#333',
    paddingHorizontal: 10,
    marginHorizontal: 40,
    marginVertical: 5,
  },
  border: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5d5fef80',
    marginVertical: 10,
    marginHorizontal: 8,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  pctxt: {
    color: '#5d5fef',
    fontSize: 16,
  },
  upitxt: {
    paddingLeft: 20,
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  verifytxt: {
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 20,
    backgroundColor: 'grey',
    borderRadius: 15,
  },
  cont: {
    display: 'flex',
    borderRadius: 9,
    marginHorizontal: 18,
    marginVertical: 18,
    shadowColor: '#5d5fef',
    elevation: 8,
    backgroundColor: 'white',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 9,
  },
  addupicont: {
    marginVertical: 18,
    display: 'flex',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  addUPI: {
    fontWeight: '600',
    fontSize: 16,
    marginHorizontal: 15,
  },
  cont: {
    display: 'flex',
    borderRadius: 9,
    marginHorizontal: 18,
    marginVertical: 18,
    shadowColor: '#5d5fef',
    elevation: 8,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 9,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    borderWidth: 1,
    width: 60,
    height: 60,
    borderColor: 'grey',
    borderRadius: 8,
  },
  imgs: {
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    textDecorationLine: 'none',
    borderColor: '#5d5fef50',
    color: 'black',
    marginVertical: 8,
    paddingHorizontal: 15,
  },

  verifybtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  pcstyle: {
    marginVertical: 8,
    display: 'flex',
    alignItems: 'center',
  },
  pctxt: {
    marginHorizontal: 10,
    color: '#5d5fef',
    fontSize: 17,
  },
  btn: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    height: 50,
    width: 200,
    paddingVertical: 10,
    backgroundColor: '#5D5FEF',
    borderRadius: 9,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});
