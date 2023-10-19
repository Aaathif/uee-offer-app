import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import TakePhoto from '../components/TakePhoto';


export default function InspectionReportScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TakePhoto
                title="Attached a photo of your Inspection Report"
                text="For Inspection Report"
                image={require('../../assets/driver-img/vehicle-inspection.png')}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
});