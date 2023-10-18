import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import TakePhoto from '../components/TakePhoto';

export default function RegistrationCertificateScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TakePhoto
                title="Attached a photo of your Vehicle Registration Certificate"
                text="For your Registration Certificate"
                image={require('../../assets/driver-img/vehicle-register.png')}
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