import { View, Text, TouchableOpacity, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'

export default function CartComp(props) {
    return (
        <View>
            <TouchableOpacity
                className='flex-row border-2 border-primary rounded-tl-2xl rounded-br-2xl bg-white mb-4'
                style={{width: wp(90), height: wp(30), marginHorizontal: wp(5)}}
            >
                <Image
                    className='border-r-2 border-primary rounded-tl-2xl'
                    source={props.item.img}
                    style={{width: wp(30), height: wp(29), resizeMode: 'contain'}}
                />
                <View className='justify-between px-2.5 py-1 rounded-br-2xl' style={{width: wp(59)}}>
                    <Text style={{fontSize: wp(4.5)}} className='font-medium'>{props.item.name}</Text>
                    <View className='flex-row justify-between items-end'>
                        <Image
                            className='rounded-full'
                            source={props.item.shopImg}
                            style={{width: wp(8), height: wp(8)}}
                        />
                        <Text className='line-through pb-0.5'>Rs {props.item.price}.00</Text>
                        <View className=''>
                            <Text className='-mb-1' style={{fontSize: wp(4)}}>{props.item.count} Unit</Text>
                            <Text
                                className='font-medium'
                                style={{fontSize: wp(5)}}>
                                Rs {props.item.price - props.item.price * (props.item.dis / 100)}.00
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}