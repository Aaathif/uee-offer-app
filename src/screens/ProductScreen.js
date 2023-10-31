import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ButtonComp from '../components/ButtonComp';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { add } from '../features/order'
import ProductComp from '../components/ProductComp';
import { products } from '../constants';
import NavBar from '../components/NavBar';

export default function ProductScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleAddOrder = (newOrder) => {
        dispatch(add(newOrder));
    }

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        className='mb-2'
                        style={{resizeMode:'contain', width:wp(100), height:hp(30)}}
                        source={item.img}
                    />
                    <TouchableOpacity
                        onPress={()=> navigation.goBack()}
                        className="absolute pl-3.5 pt-2"
                    >
                        <ChevronLeftIcon size={wp(7.5)} strokeWidth={2.25} color="black"/>
                    </TouchableOpacity>
                    <Text
                        className='mx-5 mb-1 font-semibold'
                        style={{width: wp(90), fontSize: wp(6)}}
                    >
                        {item.name}
                    </Text>
                    <View className='flex-row items-center mx-5'>
                        <Image
                            className='rounded-full mr-2'
                            source={item.shopImg}
                            style={{width: wp(8), height: wp(8)}}
                        />
                        <Text
                            className='font-medium'
                            style={{width: wp(90), fontSize: wp(4)}}
                        >
                            {item.shop}
                        </Text>
                    </View>
                    <View className='flex-row px-5 justify-between items-center mb-2'>
                        <View className='flex-row gap-5'>
                            <Text
                                className='text-primary line-through'
                                style={{fontSize: wp(5.5)}}
                            >
                                Rs {item.price}.00
                            </Text>
                            <Text
                                className='text-primary'
                                style={{fontSize: wp(5.5)}}
                            >
                                Rs {item.price - item.price * (item.dis / 100)}.00
                            </Text>
                                    
                        </View>
                        <Text
                            className='text-primary font-semibold'
                            style={{fontSize: wp(5.5), lineHeight:21.5}}
                        >
                            {item.dis}%{"\n"}OFF
                        </Text>
                    </View>
                    <View className='mb-4'>
                        <ButtonComp
                            text='Add to cart'
                            onPress={() => handleAddOrder(item)}
                        />
                    </View>
                </View>
                <Text className='pl-6 text-lg font-semibold mb-2'>Similar Products</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <FlatList
                            style={{marginRight: wp(5)}}
                            horizontal={true}
                            data={products}
                            keyExtractor={(item) => item.name}
                            renderItem={({item}) => <ProductComp item={item} marginLeft={5}/>}
                        />
                    </View>
                </ScrollView>
            </ScrollView>
            <NavBar/>
        </SafeAreaView>
    )
}