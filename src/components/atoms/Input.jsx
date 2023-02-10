import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({placeHolder, keyboardType, isSecure}) => {
  return (
    <View style={{flex: 1, marginVertical: 10}}>
      <Text
        style={{
          color: 'grey',
          position: 'absolute',
          top: 3,
          left: 15,
          fontSize: 12,
        }}>
        {placeHolder}
      </Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 320,
    borderRadius: 8,
    color: '#000',
    paddingHorizontal: 15,
    height: 60,
    paddingTop: 20,
    fontWeight: '500',
    fontSize: 16,
  },
});
