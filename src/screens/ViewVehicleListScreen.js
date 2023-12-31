import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
import COLORS from '../consts/colors';
import SingleVehicleContainer from '../components/SingleVehicleContainer';
import axios from 'axios';

const vehicledata = [
    {
        id: 1, name: 'TVS'
    },
    {
        id: 2, name: 'bajaj'
    },
    {
        id: 3, name: 'Yamaha'
    },
    {
        id: 4, name: 'Honda'
    },
    {
        id: 5, name: 'Suziki'
    },
    {
        id: 6, name: 'Discover'
    }
]

export default function ViewVehicleListScreen({ navigation }) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, set] = useState(false);

    const [fetchVehicle, setFetchVehicle] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {   
        await axios.get("http://192.168.8.106:3000/vehicle")
            .then((res) => {
                setFetchVehicle(res.data);
            })
            .catch((err) => {
                Alert.alert("Error occurred while retrieving data");
                console.error("Error :", err);
            })
    };

    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
            <View style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Account Information</Text>
                    <Text style={styles.smallText}>For driver or vehicle Information</Text>
                </View>
                <FlatList
                    data={fetchVehicle}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <SingleVehicleContainer
                            data={item}
                            navigation={navigation}
                        />
                    )}
                />
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
