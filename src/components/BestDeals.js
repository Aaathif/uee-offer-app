import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bestDeals } from '../constants'

export default function BestDeals() {
    return (
        <View className='pb-4'>
            <Text className='pl-6 text-lg font-semibold mb-2'>Best Deals</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>             
                <View className='flex-row gap-5 px-5'>
                {
                    bestDeals.map((item, index)=>{
                        return(
                            <Image
                                key={index}
                                style={{width: wp(90), height: wp(45)}}
                                className='rounded-xl'
                                source={item}
                            />
                        )
                    })
                }
                </View>
            </ScrollView>        
        </View>
    )
}