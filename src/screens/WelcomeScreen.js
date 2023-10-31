import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { colour } from '../theme';

export default function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView
            className='flex-1 items-center h-full'
            style={{backgroundColor: colour.primary}}
        >
            <View className='flex-row gap-3 top-64'>
                <Image
                    style={{resizeMode:'contain', width:wp(13), height:wp(15), tintColor:'white'}}
                    source={require('../../assets/images/appIcon.png')}
                />
                <View className='items-center'>
                    <Text className='text-white font-bold' style={{letterSpacing: 2, fontSize: wp(8)}}>SHOPFINITY</Text>
                    <Text className='text-white' style={{letterSpacing: 4, fontSize: wp(3.7)}}>Ease Your Shopping</Text>
                </View>
            </View>
            <View className='flex-col items-center top-80 mt-32'>
                <Text className='text-white font-light mb-3' style={{letterSpacing: 1, fontSize: wp(2.5)}}>continue as</Text>
                <View className='gap-7'>
                    <TouchableOpacity
                        className='bg-white py-2 rounded-xl items-center shadow-md' style={{width:wp(60)}}
                        onPress={()=> navigation.navigate('Home')}
                    >
                        <Text style={{letterSpacing: 4}} className='text-base font-medium text-primary'>CONSUMER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className='bg-white py-2 rounded-xl items-center shadow-md' style={{width:wp(60)}}
                        onPress={()=> navigation.navigate('DriverProfile')}
                    >
                        <Text style={{letterSpacing: 4}} className='text-base font-medium text-primary'>DRIVER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className='bg-white py-2 rounded-xl items-center shadow-md' style={{width:wp(60)}}
                        // onPress={()=> navigation.navigate('SellerScreen')}
                    >
                        <Text style={{letterSpacing: 4}} className='text-base font-medium text-primary'>SELLER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}