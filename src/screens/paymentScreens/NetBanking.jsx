import { StyleSheet, Text, TouchableOpacity,Image, View, TextInput ,radioButtons} from 'react-native'
import React ,{useState} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
// import RadioGroup,{RadioButtonProps} from 'react-native-radio-buttons-group';
// // import CheckBox2 from '@react-native-community/checkbox';
// import { CheckBox,Input } from 'react-native-elements'

const NetBanking = ({navigation,route}) => {
  const {totalBill}=route.params;
  const [isSelected, setSelection] = useState(false);
  const [checkButton, setCheckButton] = useState('')
  const [checkButton2, setCheckButton2] = useState('')
  const [checkButton3, setCheckButton3] = useState('')
  const firstCheckButton=()=>{
    setCheckButton(true)
    setCheckButton2(false)
    setCheckButton2(false)
  }
  const secondCheckButton=()=>{
    setCheckButton(false)
    setCheckButton2(true)
    setCheckButton3(false)
  }
  const thirdCheckButton=()=>{
    setCheckButton(false)
    setCheckButton2(false)
    setCheckButton3(true)
  }
  return (
    <View style={{flex:1}}>
    <View style={styles.cont}>
    <View style={[styles.row,styles.totprice]}>
           <Text style={[styles.text,styles.txt]}>Total Price</Text>
           <Text style={styles.rupee}>&#8377;{totalBill}</Text>
       </View>
    </View>
    <View style={[styles.col,styles.cont]}>
      <Text style={[styles.txt,styles.nbtxt]} >Net Banking</Text>
      <View style={[styles.border]}>
        <Text style={[styles.txt,{fontWeight:'bold',fontSize:14,marginBottom:10}]}>Select Your Bank</Text>
      <View style={[styles.innerBorder]}>
        <View style={[styles.col]}>
          <View style={[styles.col,styles.contBorder]}>
          <View style={[styles.row,styles.rowInline]}>
            {/* <CheckBox
            style={[styles.cbStyle]}
            title="SBI"
            checked={checkButton}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={firstCheckButton}
            // tintColors={{ true: 'green', false: 'black' }}
            /> */}
           {checkButton ? <Text style={{color:'black',fontSize:12}}>A/c No. XXXX1234 </Text> : ''}
            {/* <Image source={require('../images/sbi.png')} style={styles.sbiLogo} /> */}
          </View>
          </View> 
          <View style={[styles.col]}>
           <View style={[styles.row,styles.rowInline]}>
           {/* <CheckBox
            style={[styles.cbStyle,styles.axisCBStyle]}
            title="Axis"
            checked={checkButton2}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={secondCheckButton}
            // tintColors={{ true: 'green', false: 'black' }}
            /> */}
            {checkButton2 ? <Text style={{color:'black',fontSize:12}}>A/c No. XXXX1234</Text> : ''}
            {/* <Image source={require('../images/axis.png')} style={styles.axisLogo} /> */}
           </View>
          </View>
        </View>
      </View>    
      <View style={[styles.row,styles.addupicont]}>
          <TouchableOpacity
            checked={checkButton3}
            onPress={thirdCheckButton}

          >
            <Icon name="pluscircleo" size={28} color={'black'} style={styles.icon} />
          </TouchableOpacity>
          <Text style={[styles.txt,styles.addUPI]}>Add other Account</Text>
      </View>
     
    </View>
      <View style={[styles.row,styles.pcstyle]}>
      {/* <CheckBox2
          style={styles.checkbox}
          value={isSelected}
          onValueChange={setSelection}

          tintColors={{ true: 'green', false: 'black' }}
        /> */}
        <Text style={[styles.txt,styles.pctxt]}>Have a Promo Code?</Text>
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

export default NetBanking;

const styles = StyleSheet.create({
  txt:{
    color:'black'
  },
  radiotext:{
    color:'black',
    backgroundColor:'yellow'

  },

 cbStyle:{
  color:'black',
  
 },
 sbiLogo:{
  width:25,
  height:25,
  marginEnd:15

 },
 axisLogo:{
  width:25,
  height:25,
  marginEnd:15
 },

  rupee:{
    color:'blue',
    fontSize:18,
    paddingEnd:10
  },
  rowInline:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  border:{
    borderWidth:1,
    borderRadius:10,
    // textDecorationLine:"none",
    borderColor:'#b3d9ff',
    marginVertical:10,
    marginHorizontal:8,
    paddingHorizontal:20,
    paddingVertical:25
  },
  innerBorder:{
  
      borderWidth:1,
      borderRadius:10,
      borderColor:'#b3d9ff',
      marginVertical:10,
  
  },
  pctxt:{
    color:'blue',
    fontSize:16
  },
  nbtxt:{
    paddingLeft:20,
    marginVertical:8,
    fontWeight:'bold',
    fontSize:18
  },
  verifytxt:{
    color:'white',
    paddingVertical:4,
    paddingHorizontal:20,
    backgroundColor:'grey',
    borderRadius:15


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
    paddingHorizontal:14,
    paddingVertical:10,
    borderRadius:9
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
      marginHorizontal:40,
      marginVertical:5,
    },
  addupicont:{
    marginVertical:18,
    display:'flex',
    alignItems:'center'
    },
  txt:{
    color:'black',
  },
  text:{
    paddingHorizontal:10,
    fontSize:18,
    fontWeight:'bold',
    },
  addUPI:{
    fontWeight:'600',
    fontSize:16,
    marginHorizontal:15
    },
  cont:{
    display:'flex',
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
  row:{
    display:'flex',
    flexDirection:'row',
     },
  col:{
    display:'flex',
    flexDirection:'column'
     },
  img:{
    borderWidth:1,
    width:60,
    height:60,
    borderColor:'grey',
    borderRadius:8,

     },
  imgs:{      
    justifyContent:'space-between',
     },
  totprice:{
    justifyContent:'space-between',
    marginVertical:10
     },
  input:{
    borderWidth:1,
    borderRadius:10,
    textDecorationLine:"none",
    borderColor:'#b3d9ff',
    color:'black',
    marginVertical:8,
    paddingHorizontal:15
     },

  verifybtn:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginVertical:10
     },
  pcstyle:{
    marginVertical:20,
    display:'flex',
    alignItems:'center'
     },
  pctxt:{
    marginHorizontal:10,
    color:'blue',
    fontSize:17
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