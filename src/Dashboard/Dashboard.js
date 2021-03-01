import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'CheckIn',
          image:
            'https://img.icons8.com/dusk/64/000000/login-rounded-right.png',
        },
        {
          id: 2,
          title: 'CheckOut',
          image: 'https://img.icons8.com/dusk/64/000000/logout-rounded.png',
        },
        {
          id: 3,
          title: 'Izin',
          image: 'https://img.icons8.com/dusk/64/000000/today.png',
        },
        {
          id: 4,
          title: 'HistoryAbsen',
          image:
            'https://img.icons8.com/cute-clipart/64/000000/time-machine.png',
        },
        {
          id: 5,
          title: 'Sign Out',
          image: 'https://img.icons8.com/dusk/64/000000/delete-sign.png',
        },
      ],
      counter: 1,
    };
  }

  componentDidMount() {}

  pushPanicButton = () => {
    if (this.state.counter < 3) {
      let dummyCounter = this.state.counter;
      this.setState({counter: dummyCounter + 1});
    } else {
      if (this.hasLocationPermission) {
        Geolocation.getCurrentPosition(
          (info) => {
            const {coords} = info;

            console.log(coords.latitude);
            console.log(coords.longitude);
            let uniqueId = Date.now();
            database()
              .ref('/maps/' + uniqueId)
              .set({
                email: 'uniqueId',
                latitude: coords.latitude,
                longitude: coords.longitude,
              })
              .then(() => {
                Alert.alert(
                  'Panic Button',
                  `Dilaporkan kejadian di lokasi  ${coords.latitude} , ${coords.longitude}`,
                );
                this.setState({counter: 1});
              });
          },
          (error) => console.log(error),
          {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 3600000,
          },
        );
      }
    }
  };

  clickEventListener = (item) => {
    Alert.alert(item.title);
    switch (item.title) {
      case 'CheckIn':
        this.props.navigation.navigate('CheckIn');
        break;

      case 'CheckOut':
        this.props.navigation.navigate('CheckOut');
        break;

      case 'Izin':
        this.props.navigation.navigate('Izin');
        break;

      case 'HistoryAbsen':
        this.props.navigation.navigate('HistoryAbsen');
        break;

      case 'Sign Out':
        console.log('SignOut');
        auth()
          .signOut()
          .then(() => {
            console.log('User signed out!');
            this.props.navigation.navigate('Login');
          })
          .catch((error) => {
            this.props.navigation.navigate('Login');
          });
        break;
    }
  };

  // logout = () => {
  //   console.log('SignOut');
  //   auth()
  //     .signOut()
  //     .then(() => {
  //       console.log('User signed out!');
  //       this.props.navigation.navigate('Login');
  //     })
  //     .catch((error) => {
  //       this.props.navigation.navigate('Login');
  //     });
  // };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => this.clickEventListener(item)}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{uri: item.image}} />
                <View style={styles.cardHeader}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  container2: {
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: 5,
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  cardRounded: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
});
