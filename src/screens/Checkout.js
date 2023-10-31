import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import Switch from '../components/Switch';
import TextTab from '../components/TextTab';
import { colour } from '../theme';

export default function Checkout() {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='flex-row pl-3.5 pt-1 mb-2 gap-4 items-center'>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <ChevronLeftIcon size={wp(7.5)} strokeWidth={2.25} color="black"/>
                </TouchableOpacity>
                <Text
                    className='font-semibold'
                    style={{fontSize: wp(7.5)}}
                >
                    Checkout
                </Text>
            </View>
            <View className='my-2'>
                <Switch/>
            </View>
            <TextTab
                title='39 Peiris Road'
                subTitle='Mount Lavinia, Colombo'
                icon='location-on'
            />
            <TextTab
                title='Meet Outside'
                subTitle='Add Delivery Instructions'
                icon='meeting-room'
                textColour={colour.primary}
            />
            <TextTab
                title='Promotion Applied'
                subTitle='LKR 500 OFF'
                icon='label'
                iconColour={colour.primary}
                textColour={colour.primary}
                degree='-45deg'
            />
        </SafeAreaView>
    )
}