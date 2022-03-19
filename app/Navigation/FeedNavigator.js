import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../screen/ListingScreen';
import ListingDetailsScreen from '../screen/ListingDetailsScreen';
import routes from './routes';


const Stack = createStackNavigator();
const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name={routes.LISTING} component={ListingScreen} />
        <Stack.Screen name={routes.LISTINGS_DETAILS} component={ListingDetailsScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;