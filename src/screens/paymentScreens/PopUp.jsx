import { StyleSheet, Text, View } from 'react-native'
// import { styles } from './styles';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';


import React from 'react'

const PopUp = () => {
  return (
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          style={styles.popupDialogStyle}
          dialogAnimation={SlideAnimation}
          height={150}
          dialogTitle={<DialogTitle title="Select options" />}
          >
        </PopupDialog>
  )
}

export default PopUp

const styles = StyleSheet.create({
    popupDialogStyle: {
        backgroundColor: 'lightgray',
        marginTop: 100,
    },
})




