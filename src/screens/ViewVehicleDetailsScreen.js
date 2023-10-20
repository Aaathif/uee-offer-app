import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

export default function ViewVehicleDetailsScreen({ navigation, route }) {


    const data = route.params;
    const key = route.params._id;

    const deleteData = async (id) => {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this package?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        await axios.delete(`http://192.168.8.106:3000/vehicle/${id}`)
                            .then(() => {
                                Alert.alert("Vehicle Details Deleted Successfully");
                                // getData();
                                console.log("Vehicle Details Deleted");
                            })
                            .catch((err) => {
                                Alert.alert("Error occurred while deleting the details");
                                console.error('Error:Error occurred while deleting the details', err);
                            });
                    },
                },
            ]
        );
    };

    const handleDelete = (key) => {
        deleteData(key);
        navigation.navigate('displayInformation');

    }

    

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
            <ScrollView style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Vehicle Details</Text>
                    <Text style={styles.smallText}>For primary vehicle information for specific vehicle </Text>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle Model</Text>
                    </View>
                    <View style={styles.fieldBtn}>
                        <Text style={styles.fieldBtnText}>{data.vehicleModel}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle Make</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{data.vehicleMake}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle Year</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{data.vehicleYear}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Registration Number </Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{data.vehicleRegistrationNumber}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Plate Number</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{data.vehiclePlateNumber}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Insurance Number</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{data.vehicleInsurance}</Text>
                    </View>
                </View>

                <View style={styles.fieldBtnContainer}>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('VehicleDetailsUpdate', data)}>
                        <Text style={styles.submitText}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBtndelete} onPress={() => handleDelete(key)}>
                        <Icon name="delete" style={styles.borderBtn} size={50} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        alignItems: 'flex-start',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
    },
    fieldBox: {
        flex: 0.4,
        backgroundColor: 'rgba(217, 217, 217, 0.71)',
        paddingTop: 16,
        paddingBottom: 17,
        paddingLeft: 20,
        paddingRight: 10,
        marginTop: 5,
        marginRight: 5,
        borderRadius: 8,
        height: 80
    },
    fieldBtn: {
        flex: 0.6,
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 8,
        height: 80
    },
    fieldBtnText: {

    },
    fieldBoxText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    fieldBtnContainer: {
        // flex: 0.3,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
    },
    submitBtn: {
        flex: 0.8,
        marginRight: 5,
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 10,
    },
    submitBtndelete: {
        flex: 0.2,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 7,
    },
    borderBtn: {
        textAlign: 'center',
    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
    },
});