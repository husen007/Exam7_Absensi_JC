import React, {Component, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import stylee from './style';

const Dashboard = ({navigation, route}) => {
  

  const [data, setData] = useState([
    {
      id: 1,
      title: 'checkIn',
      image: 'https://img.icons8.com/dusk/64/000000/login-rounded-right.png',
    },
    {
      id: 2,
      title: 'checkOut',
      image: 'https://img.icons8.com/dusk/64/000000/logout-rounded.png',
    },
    {
      id: 3,
      title: 'Ijin',
      image: 'https://img.icons8.com/dusk/64/000000/today.png',
    },
    {
      id: 4,
      title: 'History',
      image: 'https://img.icons8.com/cute-clipart/64/000000/time-machine.png',
    },
    {
      id: 5,
      title: 'Logout',
      image: 'https://img.icons8.com/dusk/64/000000/delete-sign.png',
    },
  ]);

  const clickEventListener = (item) => {
    // Alert.alert(item.title)
    switch (item.title) {
      case 'checkIn':
        console.log('ingfo');
        navigation.navigate('CheckIn', {
          //   dataID: name,
        });
        break;

      case 'checkOut':
        console.log('ingfo2');
        navigation.navigate('CheckOut', {
          //   dataID: name,
        });
        break;

      case 'Ijin':
        console.log('ingfo3');
        navigation.navigate('Ijin', {
          //   dataID: name,
        });
        break;

      case 'History':
        console.log('ingfo4');
        navigation.navigate('History', {
          //   dataID: name,
        });
        break;

      case 'Logout':
        console.log('ingfo5');
        Logout();
        break;
    }
  };

  const Logout = () => {
    console.log('test logout');
    auth()
      .signOut()
      .then(() => {
        console.log('user logout!');
        navigation.navigate('Login');
      });
  };

  return (
    <View style={stylee.container}>
      <FlatList
        style={stylee.list}
        contentContainerStyle={stylee.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={stylee.card}
              onPress={() => clickEventListener(item)}>
              <View style={stylee.cardFooter}></View>
              <Image style={stylee.cardImage} source={{uri: item.image}} />
              <View style={stylee.cardHeader}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={stylee.title}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Dashboard;
