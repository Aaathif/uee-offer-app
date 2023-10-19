import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import COLORS from '../consts/colors';

export default function ViewVehicleDetailsScreen({ navigation }) {
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
                        <Text style={styles.fieldBoxText}>Vehicle Make</Text>
                    </View>
                    <View style={styles.fieldBtn}>
                        <Text style={styles.fieldBtnText}>2021</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle  Model</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>Baja</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle Year</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>2020</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Registration Number </Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>89302741285279</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Plate Number</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>WP VE-8866</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>NIC Number</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>952851672V</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Insurance Number</Text>
                    </View>
                    <View style={styles.fieldBtn} >
                        <Text style={styles.fieldBtnText}>54894587816878764166</Text>
                    </View>
                </View>
                <View style={styles.fieldBtnContainer}>
                    <TouchableOpacity style={styles.submitBtn}>
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