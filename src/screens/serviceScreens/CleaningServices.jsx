import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

import {offers, CleaningServicesData} from '../../components/data/DATA';
import ServiceView from '../../components/molecules/ServiceView';
import OfferScreen from '../../components/molecules/OfferScreen';

const CleaningServices = ({navigation}) => {
  // root screen
  return (
    <ScrollView style={styles.container}>
      <View style={styles.offersCont}>
        <FlatList
          data={offers}
          renderItem={({item}) => <OfferScreen item={item} />}
          keyExtractor={item => item}
          horizontal={true}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.services}>
        {CleaningServicesData.map(item => {
          return (
            <ServiceView item={item} key={item.id} navigation={navigation} />
          );
        })}
      </View>
      <View style={{marginTop: 2, paddingVertical: 16, paddingLeft: 16}}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 16,
            lineHeight: 23,
            color: '#000',
            fontWeight: '900',
          }}>
          Trending Services
        </Text>
        {/* trending services view */}
        <FlatList
          data={CleaningServicesData.filter(item => {
            return item.isTrending === true;
          })}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Service Details', {
                  item: item,
                });
              }}>
              <View style={{marginRight: 8}}>
                <Image
                  source={item.img}
                  style={{height: 152, aspectRatio: 1, borderRadius: 4}}
                />
                <Text style={styles.tredServName}>{item.serviceName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default CleaningServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offersCont: {
    display: 'flex',
    textAlignVertical: 'center',
    marginVertical: 4,
    paddingLeft: 8,
  },
  offerScreen: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#4D2161',
    marginRight: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 300,
    height: 56,
    borderRadius: 4,
  },

  serviceView: {
    width: 360,
    height: 197,
    color: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: '#ADADAD',
    borderBottomWidth: 1,
  },
  serviceImg: {
    width: '45%',
    height: 150,
    borderRadius: 4,
    marginRight: 19,
  },
  serviceInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginBottom: 4,
    color: '#4F4F4F',
    fontSize: 13,
    lineHeight: 19,
  },
  tredServName: {
    backgroundColor: '#ffffff4d',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 13,
    lineHeight: 18,
    color: '#ffffff',
    position: 'absolute',
    height: 36,
    width: '100%',
    textAlignVertical: 'center',
    bottom: 0,
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: '#5D5FEF',
    borderRadius: 4,
    position: 'absolute',
    bottom: 10,
    left: 50,
  },
});
