import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from 'react-native-elements/dist/helpers'

const ConfirmPayment = (navigation,route) => {
  return (
    <View style={[styles.col,styles.bgColor,{flex:1}]}>
      <Image source={require('../images/confirmPayment.png')} style={styles.img} />
      <Text style={[styles.txt,styles.txtStyle]}>Thank you, Your Service is placed!</Text>
      <TouchableOpacity style={styles.msbtn}>
        <Text style={[styles.txt,{color:'white'}]}>View or Manage Service</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ConfirmPayment

const styles = StyleSheet.create({
  bgColor:{
    backgroundColor:'white',
  },
  txtStyle:{
    paddingHorizontal:124,
    fontWeight:'bold',
    fontSize:18,
    lineHeight:25,
    textAlign:'center'
  },
  msbtn:{
    marginVertical:10,
    marginHorizontal:20,
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:'#5D5FEF',
    borderRadius:9
  },
    col:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    txt:{
        color:'black',
        paddingHorizontal:10,
    },
    img:{
      width:300,
      height:350
    }
})