import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import TakePhoto from '../components/TakePhoto';

export default function BankPassbookScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TakePhoto 
                title="Attached a photo of your Bank passbook"
                text= "For Bank Passbook"
                image={require('../../assets/driver-img/passbook.png')}
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