import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';



class HomeScreen extends React.Component {

  onButtonPress = () => {
    console.log('Button Pressed!!')
  }

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        
      </View>
    );
  }
}

export default HomeScreen;