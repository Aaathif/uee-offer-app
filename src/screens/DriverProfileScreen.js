import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';


export default function DriverProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
      <View style={[styles.innercontainer, 
            {backgroundColor: COLORS.primary, 
            borderBottomRightRadius: 150}]}>
        <View style={styles.titleView}> 
          <Text style={styles.titleText}>Driver Profile</Text>
          <Text style={styles.smallText}>For About Driver</Text>
        </View>
        {/* <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Driver Information</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('DriverInformation')}>
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={[styles.innercontainer, {marginLeft: 10}]}>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Insert Information</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('DriverAccount')} >
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>View Information</Text> 
          </View>
          <TouchableOpacity style={styles.fieldBtn} >
            <Icon name="send"  size={40} color={COLORS.primary} onPress={() => navigation.navigate('displayInformation')} />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>View Map</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn} >
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Setting</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn} >
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    flex: 0.5,
    backgroundColor: 'white'
  },
  titleView: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10
  },
  titleText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30
  },
  smallText: {
    color: COLORS.white,
  },
  fieldContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 10
  },
  fieldBox: {
    flex: 0.8,
    backgroundColor: 'rgba(217, 217, 217, 0.31)',
    paddingTop: 16,
    paddingBottom: 17,
    paddingLeft: 20,
    marginTop: 5,
    marginRight: 5,
    borderRadius: 8
  },
  fieldBtn: {
    flex: 0.2,
    backgroundColor: 'rgba(217, 217, 217, 0.31)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 8,
    borderBottomWidth: 4,
    borderColor: COLORS.primary,
  },
  fieldBoxText: {
    fontSize: 20,
    fontWeight: 'bold'
  }


});