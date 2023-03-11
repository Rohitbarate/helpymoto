import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

const TermsPolicy = () => {
  const link = `http://helpymoto.com`;
  const agreement = `These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and HELPY MOTO PRIVATE LIMITED, concerning your access to and use of the ${link} website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.`;
  return (
    <ScrollView>
      <View style={styles.mainCont}>
        <Text style={styles.headingTxt}>Legal Terms</Text>
        <Text style={styles.bigTxt}>Privacy Policy</Text>
        <View style={styles.imgCont}>
          <Image
            style={styles.imgStyle}
            source={require('../../assets/images/privacy.png')}
          />
        </View>
        <Text style={styles.bigTxt}>Privacy Policy</Text>
        <Text style={styles.desc}>
          Our Privacy Policy explains what personal information we collect, how
          we use personal information, how personal information is shared, and
          privacy rights.
        </Text>
        <Text style={styles.bigTxt}>Related Articles</Text>
        <Text style={styles.desc}>Relate Articles Here...</Text>
        <Text style={styles.bigTxt}>Privacy Policy</Text>
        <Text style={styles.desc}>Please review our privacy Policy.</Text>
        <Text style={styles.bigTxt}>Verifying your Identity</Text>
        <Text style={styles.desc}>
          Your security is important to us. Check out the steps we take to not
          only verify your identity.
        </Text>
        <Text style={styles.headingTxt}>Legal terms</Text>
        <Text style={styles.bigTxt}>Terms and conditions</Text>
        <View style={styles.firstCont}>
          <Text style={styles.secBigTxt}>1.Agreement to Terms:</Text>
          <Text style={styles.desc}>{agreement}</Text>
        </View>
        <View style={styles.firstCont}>
          <Text style={styles.bigTxt}>2.User Registration:</Text>
          <Text style={styles.desc}>{agreement}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsPolicy;

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
    marginBottom: 8,
  },
  cont: {
    backgroundColor: '#D9B2FF',
    padding: 8,
    marginHorizontal: 8,
    marginTop: 16,
    borderRadius: 8,
  },
  desc: {
    color: 'black',
    padding: 5,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 8,
  },
  descCont: {
    color: 'black',
    padding: 5,
    marginTop: 8,
    paddingBottom: 8,
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
  imgCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    borderRadius: 10,
  },
  secBigTxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    lineHeight:24
  },
  
});
