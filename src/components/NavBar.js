import { View, Text, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, ShoppingCartIcon, MagnifyingGlassIcon, HomeIcon } from 'react-native-heroicons/solid';

export default function NavBar() {
    const navigation = useNavigation();

    return (
        <View className='flex-row justify-between py-3 px-10 border-t-2 border-switchGrey items-center'>
            <TouchableOpacity>
                <HomeIcon size={wp(9)} color='black'/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MagnifyingGlassIcon size={wp(9)} color='black'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
                <ShoppingCartIcon size={wp(9)} color='black'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Checkout')}>
                <UserCircleIcon size={wp(9)} color='black'/>
            </TouchableOpacity>
        </View>
    )
}
