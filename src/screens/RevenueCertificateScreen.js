import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import TakePhoto from '../components/TakePhoto';

export default function RevenueCertificateScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TakePhoto
                title="Attached a photo of your Revenue Certificate"
                text="For Revenue Certificate"
                image={require('../../assets/driver-img/vehicle-revenue.png')}
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