import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import COLORS from '../consts/colors';

export default function TakePhoto({title, text, image}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
            <View style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.smallText}>{text}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Image style={styles.imgBtn} source={image} />
                </View>

                <View style={styles.fieldBtnContainer}>
                    <TouchableOpacity style={styles.submitBtn}>
                        <Text style={styles.submitText}>Go To File</Text>
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
        flex: 0.2,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    titleText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 30
    },
    fieldContainer: {
        flex: 0.8,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        // marginLeft: 10,
    },
    fieldBtnContainer: {
        flex: 0.12,
        marginLeft: 15,
        marginRight: 10,
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
    imgBtn: {
        width: '80%',
        height: '80%'
    }
});