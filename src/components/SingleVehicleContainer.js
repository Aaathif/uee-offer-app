import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

export default function SingleVehicleContainer({data, navigation}) {
    return (
        <View style={styles.fieldContainer}>
            <TouchableOpacity style={styles.fieldBox} onPress={() => navigation.navigate('ViewVehicleDetails')}>
                <Text style={styles.fieldBoxText}>{data.name}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    fieldContainer: {
        flex: 0.7,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        height: 150,
    },
    fieldBox: {
        flex: 1,
        height: '100%',
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        paddingTop: 16,
        paddingLeft: 20,
        marginRight: 5,
        borderRadius: 8
    },
    fieldBoxText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});