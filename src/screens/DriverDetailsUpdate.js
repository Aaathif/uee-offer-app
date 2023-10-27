import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import COLORS from '../consts/colors'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function DriverDetailsUpdate({ route }) {

    const navigation = useNavigation();

    const driver = route.params;
    const key = driver._id;

    const [userName, setDriverName] = useState(driver.userName);
    const [userEmail, setDriverEmail] = useState(driver.userEmail);
    const [fullName, setDriverFullName] = useState(driver.fullName);
    const [mobileNo, setMobileNumber] = useState(driver.mobileNo);
    const [dateOfBirth, setDateOfBirth] = useState(driver.dateOfBirth);
    const [nicNo, setNationalId] = useState(driver.nicNo);
    const [address, setAddress] = useState(driver.address);
    const [emergencyContact, setEmergencyContact] = useState(driver.emergencyContact);
    const [gender, setGender] = useState(driver.gender);

    const handleDriverNameChange = (text) => {
        setDriverName(text);
    };
    const handleDriverEmailChange = (text) => {
        setDriverEmail(text);
    };
    const handleDriverFullNameChange = (text) => {
        setDriverFullName(text);
    };
    const handleMobileNumberChange = (text) => {
        setMobileNumber(text);
    };
    const handleDateOfBirthChange = (text) => {
        setDateOfBirth(text);
    };
    const handleNationalIdChange = (text) => {
        setNationalId(text);
    };
    const handleAddressChange = (text) => {
        setAddress(text);
    };
    const handleEmergencyContactChange = (text) => {
        setEmergencyContact(text);
    };
    const handleGenderChange = (text) => {
        setGender(text);
    };

    const updatedDriver = {
        userName,
        userEmail,
        fullName,
        mobileNo,
        dateOfBirth,
        nicNo,
        address,
        emergencyContact,
        gender
    }


    const updateData = async (id) => {
        await axios.put(`http://192.168.8.106:3000/driver/${key}`, updatedDriver)
            .then(() => {
                Alert.alert("Driver Details Updated Successfully")
                navigation.navigate('displayInformation')
                console.log("Driver Details Updated")
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
                    <Text style={styles.titleText}>Driver Information</Text>
                    <Text style={styles.smallText}>For Driver or vehicle owner</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Driver Name</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Driver Name"
                        value={userName}
                        onChangeText={handleDriverNameChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Driver Email</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Driver Email"
                        value={userEmail}
                        onChangeText={handleDriverEmailChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Driver Full Name</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Driver Full Name"
                        value={fullName}
                        onChangeText={handleDriverFullNameChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Mobile Number</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Mobile Number"
                        value={mobileNo}
                        onChangeText={handleMobileNumberChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Date Of Birth</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Date of Birth"
                        value={dateOfBirth}
                        onChangeText={handleDateOfBirthChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>National Identity Card No</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter National Identity Card No"
                        value={nicNo}
                        onChangeText={handleNationalIdChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Address</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Address"
                        value={address}
                        onChangeText={handleAddressChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Emergency Contact</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Emergency Contact"
                        value={emergencyContact}
                        onChangeText={handleEmergencyContactChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Select Gender</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Gender"
                        value={gender}
                        onChangeText={handleGenderChange}
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