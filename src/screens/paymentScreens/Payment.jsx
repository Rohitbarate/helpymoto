import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RazorpayCheckout from 'react-native-razorpay';
// import Icon from 'react-native-vector-icons/AntDesign'

const Payment = ({route, navigation}) => {
  // const [isProceed,setIsProceed]=useState(false)
  // const [bill1,setBill1]=useState(150);
  // const [bill2,setBill2]=useState(180);
  const {serviceName, price} = route.params;
  const [servBill, setservBill] = useState(price);
  const [gst, setGst] = useState((price / 100) * 28);
  const [totalBill, setTotabBill] = useState(servBill + gst);

  const payWithRazorpay = () => {
    var options = {
      description: 'Credits towards consultation',
      image: require('../../assets/images/icon.png'),
      currency: 'INR',
      key: 'rzp_test_KlROBu52wxMSO1',
      amount: `${totalBill*100}`,
      name: 'Acme Corp',
      order_id: '',
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar',
      },
      theme: {color: '#5D5FEF'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        navigation.replace('confirm payment')
      })
      .catch(({error}) => {
        // handle failure
        alert(`${error.description} `);
      });
  };

  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/payment.png')}
        />
        <View style={styles.col}>
          {/* <View style={styles.row}>
        <Text style={styles.innerchargesec}>Service Charges</Text>
        <Text style={styles.rupees} >&#8377;{bill1}</Text>
        </View>
      <View style={styles.row}>
        <Text style={styles.innerchargesec}>{serviceName}</Text>
        <Text style={styles.rupees} t>&#8377;{bill2}</Text>
        </View> */}
          <View style={styles.row}>
            <Text style={styles.innerchargesec}>{serviceName || 'Service Charge'}</Text>
            <Text style={styles.rupees}>&#8377;{price}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.innerchargesec}>
              GST <Text style={{color: 'grey'}}>(28%)</Text>{' '}
            </Text>
            <Text style={styles.rupees}>&#8377;{gst}</Text>
          </View>
          <View style={styles.hr} />
          <View style={styles.totalouter}>
            <Text style={styles.totaltext}>Total</Text>
            <Text style={styles.rupees}>&#8377;{totalBill}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => payWithRazorpay()}>
          <Text style={styles.btnText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  image: {
    // width: 50,
    aspectRatio: 1,
    height: 200,
    alignSelf: 'center',
  },
  imgCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    shadowColor: '#5D5FEF',
    elevation: 8,
    // borderColor:'red',
    marginVertical: 20,
  },
  innerchargesec: {
    color: 'black',
    fontSize: 16,
  },

  rupees: {
    // backgroundColor:'blue',
    color: 'black',
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'red',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  col: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 9,
    marginHorizontal: 18,
    elevation: 8,
    shadowColor: '#5D5FEF',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },

  totalouter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 40,
  },
  hr: {
    marginTop: 15,
    backgroundColor: 'black',
    width: '100%',
    height: 1.5,
  },
  totaltext: {
    color: '#121212',
    fontSize: 16,
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50,
    height: 40,
    marginBottom: 65,
  },
  btnText: {
    backgroundColor: 'yellow',
    color: 'white',
    backgroundColor: '#5D5FEF',
    borderRadius: 9,
    paddingHorizontal: 67,
    paddingVertical: 10,
  },
});
