import {View, Text} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const ChatStack = () => {
  return (
    <WebView
      source={{uri: 'https://google.com'}}
      allowsBackForwardNavigationGestures="true"
      bounces="true"
      
    />
  );
};

export default ChatStack;
