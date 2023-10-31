import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ButtonComp(props) {
    return (
        <TouchableOpacity
            className='rounded-tl-xl rounded-br-xl mx-5 py-2 px-3 bg-primary'
            style={{width: wp(90)}}
            onPress={props.onPress}
        >
            <Text
                className='text-white text-center font-medium'
                style={{fontSize: wp(5.5), letterSpacing: 0.5}}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}