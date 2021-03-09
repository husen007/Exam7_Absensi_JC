import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const History = () => {
  return (
    <View>
      <Text style={styles.title}>History</Text>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});
