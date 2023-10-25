import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import COLORS from '../consts/colors';
import Map from '../components/Map';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MapScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.tripDetails}>
          <Text style={{ fontWeight: 'bold' }}>Trip Details</Text>
          <Text>From: Colombo Food City</Text>
          <Text>To: Grandpass lane, Colombo - 14</Text>
          <Text>Distance: 8 Km</Text>
          <Text>Duration: 20 Min</Text>
        </View>
        <View style={styles.tripBtnContainer}>
          <TouchableOpacity style={styles.tripBtn}>
            <Icon name="send" size={60} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 0.8,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    flex: 0.2,
    backgroundColor: COLORS.light,
    paddingLeft: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 10
  },
  tripDetails: {
    flex: 0.7,
    backgroundColor: 'rgba(217, 217, 217, 0.31)',
    padding: 15,
    borderRadius: 10
  },
  tripBtnContainer: {
    flex: 0.3,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  tripBtn: {
    paddingTop: 25
  }
});