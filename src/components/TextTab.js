import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons';
import { ChevronRightIcon } from 'react-native-heroicons/solid';

export default function TextTab(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={{width: wp(100), height: wp(18), paddingHorizontal: wp(5)}}
            className='flex-row items-center justify-between border-b-2 border-switchGrey'>
                <View className='flex-row items-center gap-3.5'>
                    <MaterialIcons name={props.icon} size={wp(6.5)} color={props.iconColour} style={{transform: [{ rotate: props.degree ? props.degree : '0deg'}]}}/>
                    <View>
                        <Text className=' font-medium' style={{fontSize: wp(4.75)}}>{props.title}</Text>
                        <Text style={{fontSize: wp(3.75), color: props.textColour ? props.textColour : '#4E4B4B'}}>{props.subTitle}</Text>
                    </View>
                </View>
                <ChevronRightIcon size={wp(6.5)} strokeWidth={1.75} color='black'/>
        </TouchableOpacity>
    )
}

