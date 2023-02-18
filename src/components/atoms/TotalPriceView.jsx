import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TotalPriceView = ({totalBill}) => {
  return (
    <View style={styles.cont}>
      <View style={styles.row}>
        <Text style={styles.txt}>Total Price</Text>
        <Text style={styles.rupee}>&#8377; {totalBill}</Text>
      </View>
    </View>
  );
};

export default TotalPriceView;

const styles = StyleSheet.create({
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
    height: 100
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderColor: '#5D5FEF',
    borderWidth: 0.5,
    borderRadius: 10,
    width: '90%',
    paddingVertical: 20,
  },
  txt: {
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  rupee: {
    color: '#5d5fef',
    fontSize: 18,
    paddingEnd: 10,
  },
});
