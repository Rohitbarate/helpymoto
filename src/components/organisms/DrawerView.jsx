import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';

const DrawerView = props => {
  return (
    <DrawerContentScrollView>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Icon
          style={{alignSelf: 'flex-end'}}
          name="cross"
          size={32}
          color={'#00000090'}
        />
      </TouchableOpacity>
      <View style={styles.profileView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 0.9,
          }}>
          <Image
            source={require('../../assets/images/user.png')}
            style={{width: 50, aspectRatio: 1,marginRight:5}}
          />
          <View>
            <Text style={{color: '#000', fontSize: 17,fontWeight:'500'}}>
              Rohit Rajendra Barate
            </Text>
            <Text style={{color: '#00000080', fontSize: 12}}>
                rohitbarate100@gmail.com
            </Text>
          </View>
        </View>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('Profile')}
        >
        <Icon name="chevron-thin-right" size={26} color="#00000099" />
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerView;

const styles = StyleSheet.create({
  profileView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#00000050',
    paddingHorizontal: 8,
  },
});
