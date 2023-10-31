import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import ProductComp from './ProductComp';
import { categories } from '../constants'
import { products } from '../constants';

export default function Categories(props) {
    const [active, setActive] = useState('All')

    return (
        <View>
            <Text className='pl-6 text-lg font-semibold mb-2'>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>             
                <View className='flex-row gap-3 px-5 pb-4'>
                {
                    categories.map((item, index)=>{
                        return(
                            <TouchableOpacity
                                className='px-3.5 py-1 rounded-xl shadow-sm border border-primary bg-inputGrey'
                                key={index}
                                // onPress={()=> setActive}
                                >
                                    <Text className='font-medium text-primary'>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
            </ScrollView>
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => <ProductComp item={item} marginLeft={6.6}/>}
            />
        </View>
    )
}