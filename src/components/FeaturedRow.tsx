import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import featured from '../../data'


function FeaturedRow({ id, title, description, featuredCategory }) {

    return (
        <View>
            <View className='px-4 mt-4 flex-row items-center justify-between'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon size="20" color="#00ccbb" />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className='pt-4'
            >
                {/* RestaurantsCards... */}

                {featured[featuredCategory]?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        imgUrl={restaurant.imgUrl}
                        title={restaurant.title}
                        rating={restaurant.rating}
                        genre={restaurant.genre}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}


            </ScrollView>
        </View>
    )
}

export default FeaturedRow