import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import COLORS from '../consts/colors'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function VehicleDetailsUpdateScreen({ route }) {

    const navigation = useNavigation();

    const vehicle = route.params;
    const key = vehicle._id;

    const [vehicleMake, setVehicleMake] = useState(vehicle.vehicleMake);
    const [vehicleModel, setVehicleModel] = useState(vehicle.vehicleModel);
    const [vehicleYear, setVehicleYear] = useState(vehicle.vehicleYear);
    const [vehicleRegistrationNumber, setvehicleRegistrationNumber] = useState(vehicle.vehicleRegistrationNumber);
    const [vehiclePlateNumber, setVehiclePlateNumber] = useState(vehicle.vehiclePlateNumber);
    const [vehicleInsurance, setVehicleInsurance] = useState(vehicle.vehicleInsurance);

    const handleVehicleMakeChange = (text) => {
        setVehicleMake(text);
    };
    const handleVehicleModelChange = (text) => {
        setVehicleModel(text);
    };
    const handleVehicleYearChange = (text) => {
        setVehicleYear(text);
    };
    const handleVehicleRegistrationNumberChange = (text) => {
        setvehicleRegistrationNumber(text);
    };
    const handleVehiclePlateNumberChange = (text) => {
        setVehiclePlateNumber(text);
    };
    const handleVehicleInsuranceChange = (text) => {
        setVehicleInsurance(text);
    };

    const updatedVehicle = {
        vehicleMake,
        vehicleModel,
        vehicleYear,
        vehicleRegistrationNumber,
        vehiclePlateNumber,
        vehicleInsurance,
    }


    const updateData = async (id) => {
        await axios.put(`http://192.168.8.106:3000/vehicle/${key}`, updatedVehicle)
            .then(() => {
                Alert.alert("Vehicle Details Updated Successfully")
                navigation.navigate('displayInformation')
                console.log("Vehicle Details Updated")
            })
            .catch((err) => {
                Alert.alert("Error occurred while updating the details")
                console.error('Error: rrror occurred while updating the details', err);
            })
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Update Vehicle Information</Text>
                    <Text style={styles.smallText}>For Bike or Three wheel</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Vehicle Model</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Vehicle Model"
                        value={vehicleModel}
                        onChangeText={handleVehicleModelChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Vehicle Make</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Vehicle Make"
                        value={vehicleMake}
                        onChangeText={handleVehicleMakeChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Vehicle Year</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Vehicle Year"
                        value={vehicleYear}
                        onChangeText={handleVehicleYearChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Vehicle Registraion Number</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Registraion Number"
                        value={vehicleRegistrationNumber}
                        onChangeText={handleVehicleRegistrationNumberChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Vehicle Plate Number</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Plate Number"
                        value={vehiclePlateNumber}
                        onChangeText={handleVehiclePlateNumberChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Vehicle Insurance</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Insurance Number"
                        value={vehicleInsurance}
                        onChangeText={handleVehicleInsuranceChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity style={styles.submitBtn} onPress={updateData}>
                        <Text style={styles.submitText}>Submit</Text>
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
        flex: 1,
        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    inputLabel: {
        fontSize: 15,
        padding: 5,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    inputBox: {
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        padding: 15,
        borderRadius: 10,
        borderBottomWidth: 4,
        borderColor: COLORS.primary
    },
    submitBtn: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 10,
    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
    }
})