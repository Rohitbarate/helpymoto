import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { offers, DentingPaintingServicesData } from '../../components/data/DATA'
import ServiceView from '../../components/molecules/ServiceView';
import OfferScreen from '../../components/molecules/OfferScreen';

const DentingPainting = ({navigation}) => {
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
        DentingPaintingServicesData.map((item)=>{
          return(
            <ServiceView item={item} key={item.id} navigation={navigation} />
          )
        })
      }
    </View>
    </ScrollView>
  )
}

export default DentingPainting

const styles = StyleSheet.create({
  offersCont: {
    display: "flex",
    textAlignVertical: "center",
    marginVertical: 4,
    paddingLeft: 8,
  },
})