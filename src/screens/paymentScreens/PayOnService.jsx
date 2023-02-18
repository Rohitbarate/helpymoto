import { StyleSheet, Text, TextInput, View,Image,TouchableOpacity} from 'react-native'
import React,{ useState} from 'react'
import TotalPriceView from '../../components/atoms/TotalPriceView';
// import Recaptcha from 'react-native-recaptcha-that-works';
// import CheckBox from '@react-native-community/checkbox';
// import Icon from 'react-native-vector-icons/AntDesign'

const PayOnService = ({navigation,route}) => {
  // const [text, onChangeText] = React.useState('');
  const [isSelected, setSelection] = useState(false);
  const {totalBill}=route.params;

  return (
    <View>
       <TotalPriceView 
          totalBill={totalBill}
          />
        <View style={styles.secCont}>
            <Text style={styles.payonService}>Pay on Service (Cash/Card/UPI)</Text>
            <View style={styles.col}>
              <View style={styles.row}>
                {/* <Image source={require('../images/captcha.png')} style={styles.img}/> */}
                <Text style={{color:'blue'}}>Change Image</Text>
              </View>
              <TextInput style={styles.input} placeholder='Enter code shown in the above image*' placeholderTextColor='grey' />
              <Text style={styles.txt}>You Can Pay via Cash/Card or UPI enabled app at the time of delivery. Ask your delivery executive for the options.</Text>
            </View>
            <View style={styles.cBoxPromCode}>
            {/* <CheckBox
                 value={isSelected}
                 onValueChange={setSelection}
                 style={styles.checkbox}
                 tintColors={{ true: 'green', false: 'black' }}
            /> */}
            <Text style={styles.promocode}>Have a Promo Code ?</Text>
            </View>
            <View style={styles.inptext}>
                 {isSelected ? <TextInput style={styles.inputPromoCode} placeholder='Write Your Promo code here' placeholderTextColor='grey'  /> : '' }
            </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('ConfirmPayment',{totalBill})}>
        <Text style={styles.btnText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PayOnService

const styles = StyleSheet.create({
    totp:{
    color:'black',
    paddingHorizontal:10,
    paddingVertical:10,
    fontSize:18,
    fontWeight:'bold',
    },
   
    cont:{
      display:'flex',
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:'center',
      borderRadius:9,
      marginHorizontal:18,
      marginVertical:18,
      elevation:8,
      shadowColor: 'blue',
      backgroundColor:'white', 
      paddingHorizontal:10,
      paddingVertical:10,
      borderColor:'red',
      borderRadius:9
      },
      rupee:{
        color:'blue',
        fontSize:18,
        paddingHorizontal:14
      },
      secCont:{
        display:'flex',
        flexDirection:'column',
        borderRadius:9,
        marginHorizontal:18,
        marginVertical:18,
        elevation:8,
        shadowColor: 'blue',
        backgroundColor:'white', 
        paddingHorizontal:10,
        paddingVertical:10,
        borderColor:'red',
        borderRadius:9
      },
      payonService:{
        color:'black',
        paddingHorizontal:10,
        paddingVertical:10,
        fontSize:18,
        fontWeight:'bold',
      },
      img:{
        width:170,
        height:60,
        borderWidth:1,
        borderColor:'black',
        borderRadius:4,
      },
      input:{
      
        color:'black',
        height:40,
        borderWidth:1,
        backgroundColor:'#F0F0FF',
        borderColor:'#b3d9ff',
        borderRadius:20,
        placeholderTextColor:'#333',
        paddingHorizontal:10
      },
      inputPromoCode:{
      
        color:'black',
        height:40,
        borderWidth:1,
        backgroundColor:'#F0F0FF',
        borderColor:'#b3d9ff',
        borderRadius:20,
        placeholderTextColor:'#333',
        paddingHorizontal:10,
        marginBottom:10
      },
      txt:{
        marginTop:25,
        color:'black',
        fontSize:12
      },
      col:{
        display:'flex',
        flexDirection:'column',
        borderWidth:1,
        borderRadius:12,
        borderColor:'#b3d9ff',
        paddingVertical:20,
        paddingHorizontal:20
      },
      row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20

      },
      cBoxPromCode:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center'
        marginVertical:20
      },
      inptext:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      promocode:{
        color:'blue',
      },
      cheSty:{
        color:'black'
      },
      btn:{
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        marginTop:50,
        height:40,
        marginBottom:65
        
      },
      btnText:{
        backgroundColor:'yellow',
        color:'white',
        backgroundColor:'#5D5FEF',
        borderRadius:9,
        paddingHorizontal:67,
        paddingVertical:10
    
      }

})