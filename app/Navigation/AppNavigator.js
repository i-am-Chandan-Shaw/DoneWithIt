import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingEditScreen from '../screen/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import routes from './routes';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator >
        <Tab.Screen name={routes.FEED}
            component={FeedNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size} />
            }} />
        <Tab.Screen name={routes.LISTING_EDIT}
            component={ListingEditScreen}
            options={({ navigation }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
            })} />
        <Tab.Screen name={routes.ACCOUNT} component={AccountNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={color} size={size} />
            }} />
    </Tab.Navigator>
);


export default AppNavigator;