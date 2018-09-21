import React from 'react';
import { Text, View, ScrollView, FlatList, Button, Image } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation';
import {MapView} from 'expo';



class DeliveryScreen extends React.Component { 

  render() {
    return (
      <View style={{flex:2.5}}>

        <View style={{flex:0.5}}>
              <Image style={{ marginTop:20 ,alignSelf:'center', height: 100, width: 130, marginBottom:0, }}
                source={require('./res/img/logo.jpg')}
              />
              <Text style = {{fontWeight: 'bold', alignSelf:'center'}}> Driver Delivery App</Text>
        </View>
          <MapView
            style={{
              flex: 1
            }}
            initialRegion={{
              latitude: 1.35215,
              longitude: 103.8198,
              latitudeDelta: 0.4922,
              longitudeDelta: 0.4421,
            }}
      />
        <ScrollView style ={{flex:1}}>
         
            
        </ScrollView>

      </View>
  
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Name</Text>
        <Text>Biography</Text>
      </View>
    );
  }
}



export default createBottomTabNavigator({
  Delivery: DeliveryScreen,
  Profile: ProfileScreen,
  
});