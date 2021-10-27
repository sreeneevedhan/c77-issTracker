import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import IssLocation from './screens/IssLocation';
import Meteor from './screens/Meteor';
import{NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator()

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Iss Location" component={IssLocation}/>
        <Stack.Screen name="Meteor" component={Meteor}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
