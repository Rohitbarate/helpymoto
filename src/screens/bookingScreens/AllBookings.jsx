import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React ,{useState ,useEffect} from 'react'
import {bookings} from '../../components/data/DATA'
import BookingView from '../../components/molecules/BookingView'

const AllBookings = () => {
    return (
        <ScrollView style={{backgroundColor:'#fff'}} >
        {bookings.map((item) => (
          <BookingView item={item} key={item.bookingId} />
        ))}
      </ScrollView>
    )
  }
  
  export default AllBookings
  
 