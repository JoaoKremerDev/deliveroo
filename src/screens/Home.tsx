import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import {
    UserIcon,
    ChevronDownIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/categories'
import FeaturedRow from '../components/FeaturedRow';
import { featuredRowsData } from '../../data';

function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


    return (
        <SafeAreaView className='bg-white pt-12'>
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='w-7 h-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Peça Agora!</Text>
                    <Text className='font-bold text-xl'>Localização Atual
                        <ChevronDownIcon size={20} color="#00ccbb" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00ccbb" />
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row items-center space-x-2 flex-1 bg-gray-200 p-3'>
                    <MagnifyingGlassIcon size={22} color="gray" />
                    <TextInput placeholder='Restaurantes e culinárias'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon size={32} color="#00ccbb" />
            </View>

            {/* Body */}
            <ScrollView className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 140
                }}
            >
                {/* Categories */}
                <Categories />
                {/* Featured rows */}
                {featuredRowsData.map(({ id, title, description, featuredCategory }) =>
                    <FeaturedRow
                        id={id}
                        title={title}
                        description={description}
                        featuredCategory={featuredCategory}
                    />)}


            </ScrollView>
        </SafeAreaView >
    )
}

export default HomeScreen