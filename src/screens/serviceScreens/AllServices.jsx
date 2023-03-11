import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {serviceTypes} from '../../components/data/DATA';

const AllServices = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        {serviceTypes.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                item.screen && navigation.navigate(item.screen);
              }}>
              <View style={styles.vehivleDiv}>
                <Image source={item.img} style={styles.servImg}></Image>
                <Text style={styles.vhclTxt}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default AllServices;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical:10,
    paddingHorizontal:10
  },
  vehivleDiv: {
    width: 100,
    height: 100,
    margin:5,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vhclImg: {
    aspectRatio: 1,
    height: 70,
  },
  vhclTxt: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 5,
    color: '#000',
  },
});
