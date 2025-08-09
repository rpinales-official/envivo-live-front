import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AllEventsScreen from '../screens/AllEventsScreen';
import { Ionicons } from '@expo/vector-icons';

export type BottomTabParamList = {
    Home: undefined;
    AllEvents: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#0a0a0a' },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#888',
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    if (route.name === 'Home') iconName = 'home-outline';
                    else iconName = 'calendar-outline';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="AllEvents" component={AllEventsScreen} />
        </Tab.Navigator>
    );
}