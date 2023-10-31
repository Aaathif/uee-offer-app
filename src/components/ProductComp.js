import { View, Text, TouchableOpacity, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/order'
import { useNavigation } from '@react-navigation/native';
import { PlusIcon } from 'react-native-heroicons/outline';

export default function ProductComp(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order);
    const item = props.item;

    const handleAddOrder = (newOrder) => {
        dispatch(add(newOrder));
    }

    // const handleAddOrder = (newOrder) => {
    //     const existingOrderIndex = orders.findIndex((order) => order.name === newOrder.name);
    
    //     if (existingOrderIndex !== -1) {
    //         dispatch(add(existingOrderIndex));
    //     } else {
    //         dispatch(add(newOrder));
    //     }
    // }

    return(
        <TouchableOpacity
            className='border border-primary rounded-tl-xl rounded-br-xl mb-4'
            style={{width: wp(40), height: wp(45), marginLeft: wp(props.marginLeft)}}
            onPress={()=> navigation.navigate('ProductScreen',{...item})}
            >
            <Image
                className='rounded-tl-lg'
                source={props.item.img}
                style={{resizeMode: 'contain', width: wp(39.5), height: wp(30)}}
            />
            <View className='px-1 py-0.5'>
                <View className='flex-row justify-between'>
                    <Text
                        className=''
                        style={{width: wp(28), fontSize: wp(3.25), lineHeight:13}}>{props.item.name}
                    </Text>
                    <Text
                        className='font-semibold items-center justify-center text-primary pt-0.5'
                        style={{fontSize: wp(4), lineHeight:15}}
                    >
                        {props.item.dis}%{"\n"}OFF
                    </Text>
                </View>         
                <View className='flex-row gap-1.5'>
                    <Text className='text-primary line-through' style={{letterSpacing: -0.75, fontSize: wp(3)}}>Rs {props.item.price}.00</Text>
                    <Text className='text-primary' style={{letterSpacing: -0.75, fontSize: wp(3)}}>Rs {props.item.price - props.item.price * (props.item.dis / 100)}.00</Text>
                </View>
            </View>
            <TouchableOpacity 
                className='bg-primary absolute rounded-tl-xl rounded-br-xl p-0.5 items-center justify-center'
                style={{width: wp(5), height: wp(5), right:-0.5, bottom:-0.5}}
                onPress={() => handleAddOrder(item)}
                >
                <PlusIcon size={wp(4)} strokeWidth={2.5} color='white'/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}