import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

export default function VehicleImageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
            <View style={styles.innercontainer}>
                <View style={styles.titleContainer}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>Driver Images</Text>
                        <Text style={styles.smallText}>For Bike or Three wheel</Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.fieldContainer}>
                        <TouchableOpacity style={styles.fieldBtn}>
                            <Image style={styles.imgBtn} source={require('../../assets/driver-img/front-bike.jpeg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.fieldBtn}>
                            <Image style={styles.imgBtn} source={require('../../assets/driver-img/rear-bike.jpeg')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fieldContainer}>
                        <TouchableOpacity style={styles.fieldBtn}>
                            <Image style={{height: '50%', width: '80%', marginTop: 15}} source={require('../../assets/driver-img/side-bike.jpeg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.fieldBtn}>
                            <Image style={{height: '50%', width: '80%', marginTop: 15}} source={require('../../assets/driver-img/top-bike.jpeg')} />
                        </TouchableOpacity>
                    </View>
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
    titleContainer: {
        flex: 0.15,
        // backgroundColor: 'blue'
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
    imageContainer: {
        flex: 1,
        // backgroundColor: 'red'
    },
    fieldContainer: {
        flex: 0.3,
        flexDirection: 'row',
        // alignItems: 'stretch',
    },
    fieldBox: {
        flex: 0.5,
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        paddingTop: 16,
        paddingBottom: 17,
        paddingLeft: 20,
        marginTop: 5,
        marginRight: 5,
        borderRadius: 8
    },
    fieldBtn: {
        flex: 0.5,
        alignItems: 'center',
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        paddingTop: 10,
        // paddingBottom: 10,
        paddingLeft: 10,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 8,
        borderBottomWidth: 4,
        borderColor: COLORS.primary,
    },
    imgBtn: {
        height: '80%',
        width: '50%',
    },
    fieldBoxText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    fieldBtnContainer: {
        flex: 0.1,
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