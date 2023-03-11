import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OfferScreen = ({item}) => {
  return (
    <View style={styles.offerScreen}>
      <Image
        source={require("../../assets/images/discount.png")}
        style={{ height: 34, aspectRatio: 1, borderRadius: 50 }}
      />
      <Text style={{ color: "#fff", fontSize: 14, }}>
        {item}
      </Text>
    </View>
  )
}

export default OfferScreen

const styles = StyleSheet.create({
    offerScreen: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#4D2161",
        marginRight: 8,
        textAlign: "center",
        textAlignVertical: "center",
        width: 300,
        height: 56,
        borderRadius: 4,
      },
})