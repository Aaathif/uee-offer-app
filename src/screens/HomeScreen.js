import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Categories from '../components/Categories'
import BestDeals from '../components/BestDeals'
import NavBar from '../components/NavBar'

export default function HomeScreen() {
    return (
        <SafeAreaView className='bg-white h-full'>
            <StatusBar style='auto'/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BestDeals/>
                <Categories/>
            </ScrollView>
            <NavBar/>
        </SafeAreaView>
    )
}