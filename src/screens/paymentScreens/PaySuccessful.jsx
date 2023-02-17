import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaySuccessful = ({navigation,route}) => {
  const {totalBill}=route.params;

  return (
    <View>
      <Text>PaySuccessful</Text>
    </View>
  )
}

export default PaySuccessful

const styles = StyleSheet.create({})