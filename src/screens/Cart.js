import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import CartComp from '../components/CartComp';
import ButtonComp from '../components/ButtonComp';

export default function Cart() {
    const navigation = useNavigation();
    const order = useSelector((state) => state.order);

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
                    My Cart
                </Text>
            </View>
            <FlatList
                className='py-2'
                showsVerticalScrollIndicator={false}
                data={order}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => <CartComp item={item}/>}
            />
            <View className='my-2'>
                <ButtonComp text='Proceed to checkout'/>
            </View>
        </SafeAreaView>
    )
}