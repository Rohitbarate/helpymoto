import {StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const BookingView = ({item}) => {
  return (
    <View style={[styles.mainCont]}>
      <View style={styles.dataCont}>
        <View style={styles.imgCont}>
          <Image source={item.img} style={styles.img} />
        </View>
        <View style={styles.nameCont}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.createdTime}</Text>
          <Text style={styles.time}>2 hr 30 min</Text>
        </View>
        <View style={styles.lastCont}>
          <Text style={styles.charge}>&#8377;{item.bill}</Text>
         { item.status=='pending'?(
           <TouchableOpacity
           onPress={()=>{}}
            style={styles.button}
            >
             <Text
               style={{
                 fontSize: 14,
                 lineHeight: 20,
                 paddingHorizontal: 24,
                 paddingVertical: 4,
                 color: "#fff",
               }}
             >
               track
             </Text>
           </TouchableOpacity>
         ):
         (
         <Text style={{color:item.status=='completed'?'#4BB543':'#BA1C1C'}}>{item.status}</Text>
         )}
        </View>
      </View>
    </View>
  );
};

export default BookingView;

const styles = StyleSheet.create({
  dataCont: {
    backgroundColor: '#F0F0F9',
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  nameCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  imgCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastCont: {
    justifyContent: 'space-between',
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: 'black',
  },
  time: {
    color: 'black',
  },
  charge: {
    color: 'black',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#5D5FEF",
    borderRadius: 4,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center'
  },
});
