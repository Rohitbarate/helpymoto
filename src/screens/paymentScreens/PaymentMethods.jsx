import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const PaymentMethods = ({navigation, route}) => {
  const {totalBill} = route.params;
  const [selection, setSelection] = useState(false);

  return (
    <ScrollView>
      <View style={styles.payMethods}>
        <View style={styles.pmouter}>
          {/* <Text style={styles.pm}>Payment Methods</Text> */}
          <View style={styles.aviOffOut}>
            <View style={styles.drow}>
              <Image
                source={require('../../assets/images/offer.png')}
                style={styles.img}
              />
              <Text style={styles.aviOff}>Available Offers</Text>
            </View>
            <Text style={styles.offView}>
              10% Instant Discount on STATE BANK OF INDIA Cards on a mini Spend
              of &#8377; 2499. TCA
            </Text>
            {selection ? (
              <Text style={styles.offView}>
                8% Instant Discount on ICICI Debit Cards on a mini Spend of
                &#8377; 2249. TCA
              </Text>
            ) : (
              ''
            )}

            <TouchableOpacity
              value={selection}
              onPress={() => setSelection(!selection)}>

              <View style={styles.darr}>
                <Text style={styles.showmore}>
                  {!selection ? 'Show more' : 'Show less'}
                </Text>
                <Icon
                  name={!selection ? 'down' : 'up'}
                  size={13}
                  color={'blue'}
                  style={styles.iconstyle}
                />
              </View>

            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.col, styles.pVer]}>
        <Text style={[styles.pm, {marginBottom:10}]}>Choose other ways to Pay</Text>
        <TouchableOpacity
          style={styles.options}
          onPress={() => navigation.navigate('credit/debit card', {totalBill})}>
          <Text style={styles.optionText}>Credit/ Debit Card</Text>
          <Icon
            name="right"
            size={13}
            color={'blue'}
            style={styles.iconstyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => navigation.navigate('UPI')}>
          <Text style={styles.optionText}>UPI</Text>
          <Icon
            name="right"
            size={13}
            color={'blue'}
            style={styles.iconstyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => navigation.navigate('Net Banking')}>
          <Text style={styles.optionText}>Net Banking</Text>
          <Icon
            name="right"
            size={13}
            color={'blue'}
            style={styles.iconstyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => navigation.navigate('Pay On Service', {totalBill})}>
          <Text style={styles.optionText}>Pay on Service</Text>
          <Icon
            name="right"
            size={13}
            color={'blue'}
            style={styles.iconstyle}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default PaymentMethods;

const styles = StyleSheet.create({
  col: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 9,
    marginHorizontal: 18,
    elevation: 8,
    shadowColor: '#5D5FEF',
    backgroundColor: 'white',
  },

  payMethods: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 9,
    marginHorizontal: 18,
    elevation: 8,
    shadowColor: '#5D5FEF',
    backgroundColor: 'white',
  },
  pmouter: {
    marginVertical: 15,
  },
  pVer: {
    paddingVertical: 20,
  },
  pm: {
    color: 'black',
    fontSize: 18,
    fontWeight: '900',
    paddingHorizontal: 10,
  },
  col1: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#5D5FEF',
    borderRadius: 9,
  },
  aviOffOut: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  drow: {
    display: 'flex',
    flexDirection: 'row',
  },
  aviOff: {
    color: 'black',
    fontWeight: '900',
    fontSize: 17,
  },
  img: {
    marginRight:10,
    width: 28,
    height: 28,
  },
  offView: {
    marginTop: 10,
    color: 'black',
    lineHeight: 25,
  },
  showmore: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 8,
  },
  select: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  darr: {
    flexDirection: 'row',
  },
  iconstyle: {
    marginVertical: 14,
    marginHorizontal: 5,
  },

  options: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 8,
    borderColor: 'black',
  },

  optionText: {
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
