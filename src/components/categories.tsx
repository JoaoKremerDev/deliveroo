import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard';
import { foodCategories } from '../../data';

function Categories() {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {foodCategories.map((food) => {
                return (
                    <CategoryCard imgUrl={food.imgUrl} title={food.title} key={food.title} />
                );
            })}
        </ScrollView>
    )
}

export default Categories;