import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colour } from '../theme';

export default function Switch() {
    const [active, setActive] = useState('Delivery')

    return (
        <View
            className='flex-row self-center rounded-3xl bg-switchGrey'
            style={{
                width: wp(85),
                paddingLeft: wp(1),
                gap: wp(1),
                paddingVertical: wp(1)
            }}
        >
            <SwitchButton text='Delivery' active={active} setActive={setActive}/>
            <SwitchButton text='Pickup' active={active} setActive={setActive}/>
        </View>
    )
}

const SwitchButton = (props) => (
    <TouchableOpacity
        className='py-1 px-2 items-center rounded-2xl'
        style={{
            width: wp(41),
            backgroundColor: props.active === props.text ? colour.primary : null
        }}
        disabled = {props.active === props.text}
        onPress={() => props.setActive(props.text)}
    >
        <Text
            className='text-white text-base'
            style={{
                letterSpacing: 0.5,
                color: props.active === props.text ? "white" : colour.primary
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
)