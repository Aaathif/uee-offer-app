import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import TakePhoto from '../components/TakePhoto';

export default function VehicleInsuranceScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TakePhoto
                title="Attached a photo of your Vehicle Insurance"
                text="For Vehicle Insurance"
                image={require('../../assets/driver-img/vehicle-insurance.png')}
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