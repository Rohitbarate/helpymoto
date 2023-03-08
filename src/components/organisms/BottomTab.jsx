import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useNavigationState} from '@react-navigation/native';

const BottomTab = ({index}) => {
  const navigation = useNavigation();

  function isActive(ind) {
    if (ind === index) {
      return '#5d5fef';
    }
    return '#000000';
  }

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.Tab}>
          <Icon name="home" color={isActive(0)} size={22} />
          <Text
            style={[
              styles.tabText,
              {
                color: isActive(0),
              },
            ]}>
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
        <View style={styles.Tab}>
          <Icon
            name="list-alt"
            color={isActive(1)}
            size={22}
          />
          <Text
            style={[
              styles.tabText,
              {
                color: isActive(1),
              },
            ]}>
            Bookings
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
        <View style={styles.Tab}>
          <Icon
            name="wechat"
            color={isActive(2)}
            size={22}
          />
          <Text
            style={[
              styles.tabText,
              {
                color: isActive(2),
              },
            ]}>
            Chats
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.Tab}>
          <Icon name="user-circle" color={isActive(3)} size={22} />
          <Text
            style={[
              styles.tabText,
              {
               color:isActive(3),
              },
            ]}>
            Profile
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  nav: {
    height: 50,
    width: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Tab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
  },
});
