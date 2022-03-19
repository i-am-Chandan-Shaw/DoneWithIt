import React from 'react';
import { View, FlatList } from 'react-native';
import Card from '../components/Card';

const listings = [
    {
        id: 1,
        title: "Red Jacket For Sale !",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in Good Condition !",
        price: 100,
        image: require("../assets/couch.jpg")
    },
    {
        id: 3,
        title: "Red Jacket For Sale !",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 4,
        title: "Couch in Good Condition !",
        price: 100,
        image: require("../assets/couch.jpg")
    },
]

function ListingScreen({ navigation }) {
    return (
        <View>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => <Card
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}
                    onPress={() => navigation.navigate("ListingDetails", item)}
                />}
            />
        </View>
    );
}

export default ListingScreen;