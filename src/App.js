/* eslint-disable no-unused-vars */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
// import {View} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import CheckIn from './CheckIn/CheckIn';
import CheckOut from './CheckOut/CheckOut';
import Izin from './Izin/Izin';
import HistoryAbsen from './HistoryAbsen/HistoryAbsen';
import Dashboard from './Dashboard/Dashboard';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    auth().onAuthStateChanged((userdata) => {
      console.log('user' + JSON.stringify(userdata));
      if (userdata === null) {
        this.setState({isLoggedIn: false});
      } else {
        this.setState({user: userdata, isLoggedIn: true});
      }
    });
    /* firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
      });*/
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.state.isLoggedIn ? (
            <>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="CheckIn" component={CheckIn} />
              <Stack.Screen name="CheckOut" component={CheckOut} />
              <Stack.Screen name="Izin" component={Izin} />
              <Stack.Screen name="HistoryAbsen" component={HistoryAbsen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="CheckIn" component={CheckIn} />
              <Stack.Screen name="CheckOut" component={CheckOut} />
              <Stack.Screen name="Izin" component={Izin} />
              <Stack.Screen name="HistoryAbsen" component={HistoryAbsen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
