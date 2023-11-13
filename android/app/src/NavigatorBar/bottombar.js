import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Exercise, Calendar, Home, User } from './TabScreens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Exercise"
                component={Exercise}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;
