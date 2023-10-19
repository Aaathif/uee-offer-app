import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';


export default function DisplayInformation({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
            <View style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Account Information</Text>
                    <Text style={styles.smallText}>For driver or vehicle Information</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity style={styles.fieldBox} onPress={() => navigation.navigate('ViewDriverDetails')}>
                        <Text style={styles.fieldBoxText}>Driver Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity style={styles.fieldBox} onPress={() => navigation.navigate('ViewVehicleList')}> 
                        <Text style={styles.fieldBoxText}>Vehicle List</Text>
                    </TouchableOpacity>
           
                </View>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle Image Details</Text>
                    </TouchableOpacity>
             
                </View>
                <View style={styles.fieldContainer}> 
                    <TouchableOpacity style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle Document Details</Text>
                    </TouchableOpacity>
       
                </View>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity style={styles.fieldBox}> 
                        <Text style={styles.fieldBoxText}>Other Details</Text>
                    </TouchableOpacity>
       
                </View>
            </View>
        </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    innercontainer: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white'
    },
    titleView: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 10
    },
    titleText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 30
    },
    fieldContainer: {
        flex: 0.7,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
    },
    fieldBox: {
        flex: 1,
        height: '100%',
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        paddingTop: 16,
        paddingLeft: 20,
        marginRight: 5,
        borderRadius: 8
    },
    fieldBoxText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});