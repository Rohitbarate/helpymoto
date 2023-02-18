import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import TotalPriceView from '../../components/atoms/TotalPriceView';
// import CheckBox from '@react-native-community/checkbox';

const CrDbCard = ({navigation, route}) => {
  const {totalBill} = route.params;
  const [isSelected, setSelection] = useState('');
  const [isSelected2, setSelection2] = useState(true);

  return (
    <ScrollView style={{flex:1}}>
      <View style={{flex: 1,marginBottom:20}}>
        <TotalPriceView 
          totalBill={totalBill}
          />
        <View style={[styles.col, styles.cont, {paddingVertical: 20}]}>
          {/* <View style={styles.border} > */}
          <Text style={[styles.txt, styles.cdc]}>Credit/Debit Card</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              placeholderTextColor="grey"
              keyboardType="Numeric"
              maxLength={12}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="grey"
            />
            <View style={styles.inputrow}>
              <TextInput
                style={[styles.input, {flex: 0.6}]}
                placeholder="Expiry Date"
                placeholderTextColor="grey"
                keyboardType="Numeric"
              />
              <TextInput
                style={[styles.input, {flex: 0.4, marginLeft: 5}]}
                placeholder="Security Code"
                placeholderTextColor="grey"
                keyboardType="Password"
              />
            </View>
            <View style={[styles.checkboxrow, {marginStart: 10}]}>
              {/* <CheckBox
                style={styles.checkbox}
                value={isSelected}
                onValueChange={setSelection}
                text
                tintColors={{ true: '#a64dff', false: 'black' }}
                /> */}
              <Text style={[styles.txtcheckbox]}>
                Save Card Details for Future
              </Text>
            </View>
          </View>
          <View style={[styles.pcstyle]}>
            {/* <CheckBox
                  style={styles.checkbox}
                  value={isSelected2}
                  onValueChange={setSelection2}
                  tintColors={{ true: 'green', false: 'black' }}
                /> */}
            <Text style={[styles.txt, styles.pctxt]}>Have a Promo Code?</Text>
            {isSelected2 &&
              <TextInput
                style={styles.inputPromoCode}
                placeholder="Type Promo code here"
                placeholderTextColor="grey"
              />}
          </View>
          {/* </View> */}
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ConfirmPayment', {totalBill})}>
          <Text style={styles.btnText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CrDbCard;

const styles = StyleSheet.create({
  pctxt: {
    color: 'blue',
    fontSize: 16,
  },
  pcstyle: {
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
  },
  inputPromoCode: {
    color: 'black',
    height: 40,
    borderWidth: 1,
    backgroundColor: '#F0F0FF',
    borderColor: '#5D5FEF50',
    borderRadius: 20,
    placeholderTextColor: '#333',
    paddingHorizontal: 10,
    marginTop: 15,
    marginHorizontal: 30,
  },
  rupee: {
    color: 'blue',
    fontSize: 18,
    paddingEnd: 10,
  },
  txt: {
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginHorizontal: 18,
    marginVertical: 18,
    shadowColor: '#5D5FEF',
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 9,
  },
  cdc: {
    fontWeight: '900',
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },

  col: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#5D5FEF80',
    paddingHorizontal: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    textDecorationLine: 'none',
    borderColor: '#5D5FEF80',
    color: 'black',
    marginVertical: 8,
    paddingHorizontal: 15,
  },
  inputrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxrow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtcheckbox: {
    fontSize: 16,
    color: 'black',
  },
  btn: {
    display: 'flex',
    alignSelf:'center',
    alignItems: 'center',
    justifyContent:'center',
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
  pb80: {
    paddingBottom: 40,
  },
  form: {
    borderWidth: 1,
    borderColor: '#5D5FEF80',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    width: '100%',
  },
});
