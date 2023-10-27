import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import COLORS from '../consts/colors';

export default function Map({ navigation }) {

  return (
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
        />
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