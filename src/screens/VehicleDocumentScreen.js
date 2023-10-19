import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';


export default function VehicleDocumentScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
            <View style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Driver Requirement</Text>
                    <Text style={styles.smallText}>For Driver or vehicle owner</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Registration Certificate</Text>
                    </View>
                    <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('RegistrationCertificate')}>
                        <Icon name="cloud-upload" size={40} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}> 
                        <Text style={styles.fieldBoxText}>Vehicle Revenue Certificate </Text>
                    </View>
                    <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('RevenueCertificate')}>
                        <Icon name="cloud-upload" size={40} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle Insurance Certificate</Text>
                    </View>
                    <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('VehicleInsurance')}>
                        <Icon name="cloud-upload" size={40} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldContainer}> 
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Vehicle Inspection Reports</Text>
                    </View>
                    <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('InspectionReport')}>
                        <Icon name="cloud-upload" size={40} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldBox}> 
                        <Text style={styles.fieldBoxText}>Proof of Ownership</Text>
                    </View>
                    <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('ProofOfOwnership')}>
                        <Icon name="cloud-upload" size={40} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.fieldBtnContainer}>
                    <TouchableOpacity style={styles.submitBtn}>
                        <Text style={styles.submitText}>Submit</Text>
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
        alignItems: 'flex-start',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
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