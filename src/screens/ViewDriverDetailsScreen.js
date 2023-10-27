import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import COLORS from '../consts/colors';
import axios from 'axios';


export default function ViewDriverDetailsScreen({ navigation }) {

    const [fetchDriver, setFetchDriver] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {   
        await axios.get("http://192.168.8.106:3000/driver")
            .then((res) => {
                setFetchDriver(res.data[0]);
                console.log(res.data[0]);
            })
            .catch((err) => {
                Alert.alert("Error occurred while retrieving data");
                console.error("Error :", err);
            })
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
            <ScrollView style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Driver Details</Text>
                    <Text style={styles.smallText}>For Driver or Vehicle owner details</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>User Name</Text>
                    </View>
                    <View style={styles.fieldBtn}>
                        <Text style={styles.fieldBtnText}>{fetchDriver.userName}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>User Email</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{fetchDriver.userEmail}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Full Name</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{fetchDriver.fullName}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Mobile Number</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{fetchDriver.mobileNo}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Date of birth</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{fetchDriver.dateOfBirth}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>NIC Number</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{fetchDriver.nicNo}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Address</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{fetchDriver.address}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Emergency Contact</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{fetchDriver.emergencyContact}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Gender</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>{fetchDriver.gender}</Text>
                    </View>
                </View>
                <View style={styles.fieldBtnContainer}>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('DriverDetailsUpdate', fetchDriver)}>
                        <Text style={styles.submitText}>Update</Text>
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
        // flex: 1,
        // flexDirection: 'column',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
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
    },
});