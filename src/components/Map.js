import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import COLORS from '../consts/colors';

export default function Map({ navigation }) {

  return (
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});