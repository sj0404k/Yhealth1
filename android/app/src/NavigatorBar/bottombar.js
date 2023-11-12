import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Exercise, Calendar, Home, User} from './TabScreens';

const Tab = createBottomTabNavigator();
const TabNavigation = () =>{
    return(
    <Tab.Navigator>
        <Tab.Screen name="Exercise" component={Exercise}/>
        <Tab.Screen name="Calendar" component={Calendar}/>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="User" component={User}/>

    </Tab.Navigator>
    )

}

export default TabNavigation;