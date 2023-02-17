import { StyleSheet, Text, TextInput, View ,Button,TouchableOpacity, ScrollView} from 'react-native'
import React ,{useState}from 'react'
// import CheckBox from '@react-native-community/checkbox';


const CrDbCard = ({navigation,route}) => {
  const {totalBill}=route.params;
  const [isSelected, setSelection] = useState('');
  const [isSelected2, setSelection2] = useState(false);

  return (
    <ScrollView>
     <View style={{flex:1}}>
        <View style={[styles.cont]}>
          <View style={styles.row}>
                  <Text style={styles.txt}>Total Price</Text>
                  <Text style={styles.rupee}>&#8377;{totalBill}</Text>
          </View>
        </View>
          <View style={[styles.col,styles.cont,styles.pb80]} >
          <View style={styles.border} >
            <Text style={[styles.txt,styles.cdc]}>Credit/Debit Card</Text>
            <View>
              <TextInput style={styles.input} placeholder='Name' placeholderTextColor='grey'   />
              <TextInput style={styles.input} placeholder='Card Number' placeholderTextColor='grey' keyboardType='Numeric' />
              <View style={styles.inputrow}>
                <TextInput style={styles.input} placeholder='Expiry Date' placeholderTextColor='grey' keyboardType='Numeric'   />
                <TextInput style={styles.input} placeholder='Security Code' placeholderTextColor='grey' keyboardType='Password'   />
              </View>
              <View style={[styles.checkboxrow,{marginStart:10}]}>
                {/* <CheckBox
                style={styles.checkbox}
                value={isSelected}
                onValueChange={setSelection}
                text
                tintColors={{ true: '#a64dff', false: 'black' }}
                /> */}
                <Text style={[styles.txtcheckbox]}>Save Card Details for Future</Text>
              </View>
            </View>
            <View style={[styles.inline,styles.pcstyle]}>
              {/* <CheckBox
                  style={styles.checkbox}
                  value={isSelected2}
                  onValueChange={setSelection2}

                  tintColors={{ true: 'green', false: 'black' }}
                /> */}
                <Text style={[styles.txt,styles.pctxt]}>Have a Promo Code?</Text>

            </View>
            <View style={styles.inptext}>
                      {isSelected2 ? <TextInput style={styles.inputPromoCode} placeholder='Write Your Promo code here' placeholderTextColor='grey'  /> : '' }
            </View>
          </View>
        </View>
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('ConfirmPayment',{totalBill})}>
            <Text style={styles.btnText}>Pay Now</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default CrDbCard

const styles = StyleSheet.create({
  inline:{
    display:'flex',
    flexDirection:'row',
  },
  pctxt:{

    color:'blue',
    fontSize:16
  },
  pcstyle:{
    marginTop:10,
    display:'flex',
    alignItems:'center'
     },
  txt:{
    color:'black'
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
    marginTop:10,
    marginHorizontal:30,
  },
  rupee:{
    color:'blue',
    fontSize:18,
    paddingEnd:10


  },
  txt:{
    color:'black',
    paddingHorizontal:10,
    fontSize:18,
    fontWeight:'bold',
    },
  cont:{
    display:'flex',
    // alignItems:'center',
    borderRadius:9,
    marginHorizontal:18,
    marginVertical:18,
    shadowColor: 'blue',
    elevation:8,
    backgroundColor:'white', 
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:9
    },
    cdc:{
      fontWeight:'bold',
      fontSize:16,
    },
   
    col:{
      display:'flex',
      flexDirection:'column',
      borderWidth:1,
      borderRadius:12,
      borderColor:'#b3d9ff',
      paddingHorizontal:20
    },
    row:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:10

    },
    input:{
     borderWidth:1,
     borderRadius:10,
     textDecorationLine:"none",
     borderColor:'#b3d9ff',
     color:'black',
     marginHorizontal:10,
     marginVertical:8,
     paddingHorizontal:15
    },
    inputrow:{
      display:'flex',
      flexDirection:'row',
    },
    checkboxrow:{
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
    },
    txtcheckbox:{
    fontSize:16,
    color:'black'
    },
    btn:{
      display:'flex',
      alignItems:'center',
      textAlign:'center',
      marginTop:50,
      height:40,
      
    },
    btnText:{
      backgroundColor:'yellow',
      color:'white',
      backgroundColor:'#5D5FEF',
      borderRadius:9,
      paddingHorizontal:67,
      paddingVertical:10
  
    },
  pb80:{
    paddingBottom:40
  }
})

