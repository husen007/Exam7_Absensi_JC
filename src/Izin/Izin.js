/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import {Picker} from '@react-native-picker/picker';
// import Geolocation from 'react-native-geolocation-service';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import React, { useEffect } from 'react';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RNTextArea from '@freakycoder/react-native-text-area';
import DatePicker from 'react-native-datepicker';
import {Card} from 'react-native-elements';

const Izin = () => {
  const [nama, setNama] = useState('');
  const [gender, setGender] = useState('');
  const [usia, setUsia] = useState('');
  const [status, setStatus] = useState('');
  // this.state = {date: '2021-02-15'};

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Divider />
        <View>
          <Text style={styles.label}>Katergori :</Text>
          <Picker
            mode={'dropdown'}
            style={styles.input}
            selectedValue={gender}
            onValueChange={(value) => setGender(value)}>
            <Picker.Item label="Pilih Keterangan Izin" />
            <Picker.Item label="Izin Bencana" value="Laki-laki" />
            <Picker.Item label="Izin Sakit" value="Perempuan" />
            <Picker.Item label="Izin Anak Sakit" value="Perempuan" />
          </Picker>
        </View>
        <Divider style={styles.divider} />
        <View>
          <Text style={styles.label}>Dari Tanggal :</Text>
          <DatePicker
            style={{width: 200}}
            // date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2021-01-01"
            maxDate="2023-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            // iconSource={require('./icon/date_icon.png')}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 200,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            // onDateChange={(date) => {
            //   this.setState({date: date});
            // }}
          />
        </View>
        <Divider style={styles.divider} />
        <View>
          <Text style={styles.label}>Sampai Tanggal :</Text>
          <DatePicker
            style={{width: 200}}
            // date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2021-01-01"
            maxDate="2023-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            // iconSource={require('./icon/date_icon.png')}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 200,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            // onDateChange={(date) => {
            //   this.setState({date: date});
            // }}
          />
        </View>
        <Divider style={styles.divider} />

        <View>
          <Text style={styles.label}>Perihal :</Text>
          <TextInput
            onChangeText={(text) => setUsia(text)}
            value={usia}
            style={styles.input}
            placeholder="Masukkan Usia"
          />
        </View>

        <Divider style={styles.divider} />
        <View>
          <Text style={styles.label}>Keterangan :</Text>
          <RNTextArea
            maxCharLimit={50}
            placeholderTextColor="black"
            exceedCharCountColor="#990606"
            placeholder={'Keterangan'}
          />
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.label}>Lampiran :</Text>

        <Divider style={styles.divider} />
        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.textTombol}>Kirim</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Izin;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  tombol: {
    height: 50,
    backgroundColor: '#3366FF',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tombol2: {
    alignSelf: 'flex-end',
    height: 50,
    width: 175,
    backgroundColor: '#66ccff',
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textTombol: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  keterangan: {
    height: 150,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  divider: {
    marginBottom: 10,
  },
});
