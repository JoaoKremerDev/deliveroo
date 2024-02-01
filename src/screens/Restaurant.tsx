import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

interface RestaurantParams {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string[];
    long: number;
    lat: number;
}

function RestaurantScreen() {
    const { params } = useRoute();
    const {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    } = params as RestaurantParams;

    return (
        <View>
            <Text>Restaurante</Text>
            <Text>{title}</Text>
            <Text>{rating}</Text>
            <Text>{genre}</Text>
            <Text>{address}</Text>
            <Text>{address}</Text>
            <Text>{short_description}</Text>
            <Text>{dishes}</Text>
        </View>
    );
}

export default RestaurantScreen;
