import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const Help = ({navigation}) => {
  const userData = {
    name: 'Rushikesh Bhumkar',
    id: 3892382,
    email: 'rushikesh.bhumkar@gmail.com',
    phone: '+917972755589',
    VehicleType: 'Maruti Suzuki \nModel No : 49282 \nFour Wheeler',
  };

  return (
    <ScrollView>
      <View style={styles.mainCont}>
        <Text style={styles.headingTxt}>Any Help?</Text>
        <Text style={styles.bigTxt}>Help Center</Text>
        <View style={styles.cont}>
          <Text style={styles.descCont}>
            Having trouble finding the answer you need? Then get the assistance
            you need from our authority.
          </Text>
        </View>
        <Text style={styles.bigTxt}>FAQ's:</Text>
        <Text style={styles.desc}>
          Visit our FAQ's page: here there will be link to FAQ Page
        </Text>
        <View style={styles.contactMainCont}>
          <Text style={styles.bigTxt}>Contact us:</Text>
          <View style={styles.contactCont}>
            <Text style={styles.contactTxt}>Call us :</Text>
            <Text
              style={styles.clickTxt}
              onPress={() => Linking.openURL(`tel:${userData.mobile}`)}>
              Click here
            </Text>
          </View>
          <View style={styles.contactCont}>
            <Text style={styles.contactTxt}>Email us :</Text>
            <Text
              style={styles.clickTxt}
              onPress={() => Linking.openURL(`mailto:${userData.email}`)}>
              Click here
            </Text>
          </View>
        </View>
        <Text style={styles.bigTxt}>Twitter:</Text>
        <View style={styles.row}>
          <Text style={styles.desc}>You can send us a direct message on:</Text>
          <Text
            style={{color: 'blue'}}
            onPress={() =>
              Linking.openURL(`https://www.instagram.com/helpy_moto/`)
            }>
            Click
          </Text>
        </View>
        <Text style={styles.bigTxt}>Facebook:</Text>
        <View style={styles.row}>
          <Text style={styles.desc}>You can send us a direct message on:</Text>
          <Text
            style={{color: 'blue'}}
            onPress={() =>
              Linking.openURL(`https://www.facebook.com/people/Helpy-Moto/pfbid02wLhWEfuQq9xBcextBsy6KfrNpZPcGUg6FpC1rFeWbdkJ4DWUPzongZDebPiEkuaQl/?hc_ref=ARQtCMNCubFsdd8Gtk4t7qK5Uezj7yEO5a59TNv4xQpPiGlVJ6vOGW_x0Yp4l4foz0k&fref=nf`)
            }>
            Click
          </Text>
        </View>
        <Text style={styles.bigTxt}>Instagram:</Text>
        <View style={styles.row}>
          <Text style={styles.desc}>You can send us a direct message on:</Text>
          <Text
            style={{color: 'blue'}}
            onPress={() =>
              Linking.openURL(`https://www.instagram.com/helpy_moto/`)
            }>
            Click
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  mainCont: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  headingTxt: {
    color: 'grey',
    fontSize: 16,
  },
  bigTxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  contactCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cont: {
    backgroundColor: '#EDE8FD',
    padding: 8,
    marginHorizontal: 8,
    marginTop: 16,
    borderRadius: 8,
  },
  desc: {
    color: 'black',
  },
  descCont: {
    color: 'black',
    padding: 5,
    marginTop: 8,
    paddingBottom: 8,
  },
  row: {
    display: 'flex',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:10
  },
  btn: {
    backgroundColor: '#5D5FEF',
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 20,
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  clickTxt: {
    color: 'blue',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 10,
  },
  contactTxt: {
    color: 'black',
  },
  contactMainCont: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
});
