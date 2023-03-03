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

  return (
    <ScrollView>
      <Text>hi</Text>
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
