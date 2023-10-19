import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import TakePhoto from '../components/TakePhoto';

export default function ProofOfOwnership() {
    return (
        <SafeAreaView style={styles.container}>
            <TakePhoto
                title="Attached a photo of your Proof Of Ownership"
                text="For Proof Of Ownership"
                image={require('../../assets/driver-img/vehicle-proof.png')}
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