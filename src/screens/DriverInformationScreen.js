import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors'
import axios from 'axios';

export default function DriverInformationScreen({ navigation }) {


    const [driverName, setDriverName] = useState('');
    const [driverEmail, setDriverEmail] = useState('');
    const [driverFullName, setDriverFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [address, setAddress] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [gender, setGender] = useState('');

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

    handleAddDriver = () => {
        sendData();
    }

    const sendData = async () => {
        const newDriver = {
            driverName,
            driverEmail,
            driverFullName,
            mobileNumber,
            dateOfBirth,
            nationalId,
            address,
            emergencyContact,
            gender
        }

        await axios.post("http://192.168.8.106:3000/driver", newDriver)
            .then((response) => {
                console.log('Server Response Added Driver Successfully:', response.data);
                alert("Driver added Successfully");
                setDriverName('');
                setDriverFullName('');
                setMobileNumber('');
                setDateOfBirth('');
                setNationalId('');
                setAddress('');
                setEmergencyContact('');
                setGender('');
            })
            .catch((error) => {
                alert("Add driver error happened")
                console.error('driver Error:', error);
            });
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
                        value={driverName}
                        onChangeText={handleDriverNameChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Driver Email</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Driver Email"
                        value={driverEmail}
                        onChangeText={handleDriverEmailChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Driver Full Name</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Driver Full Name"
                        value={driverFullName}
                        onChangeText={handleDriverFullNameChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Mobile Number</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Mobile Number"
                        value={mobileNumber}
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
                        value={nationalId}
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
                    <TouchableOpacity style={styles.submitBtn} onPress={() => { handleAddDriver() }}>
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