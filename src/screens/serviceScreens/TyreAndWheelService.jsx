import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { offers, TyreWheelServicesData } from '../../components/data/DATA'
import ServiceView from '../../components/molecules/ServiceView';
import OfferScreen from '../../components/molecules/OfferScreen';

const TyreAndWheelService = ({navigation}) => {
  return (
    <ScrollView style={{flex:1}}>
      <View style={styles.offersCont}>
      <FlatList
        data={offers}
        renderItem={({item})=>(<OfferScreen item={item} />)}
        keyExtractor={(item) => item}
        horizontal={true}
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    <View style={styles.services}>
      {
        TyreWheelServicesData.map((item)=>{
          return(
            <ServiceView key={item.id} item={item} navigation={navigation} />
          )
        })
      }
    </View>
    </ScrollView>
  )
}

export default TyreAndWheelService

const styles = StyleSheet.create({
  offersCont: {
    display: "flex",
    textAlignVertical: "center",
    marginVertical: 4,
    paddingLeft: 8,
  },
})