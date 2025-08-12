import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AllEventsScreen from '../screens/AllEventsScreen';
import { Ionicons } from '@expo/vector-icons';

export type BottomTabParamList = { Home: undefined; AllEvents: undefined; };
const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { backgroundColor: '#0a0a0a' },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#888',
                sceneContainerStyle: { backgroundColor: '#0a0a0a' },
                tabBarIcon: ({ color, size }) => {
                    const iconName: keyof typeof Ionicons.glyphMap =
                        route.name === 'Home' ? 'home-outline' : 'calendar-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="AllEvents" component={AllEventsScreen} options={{ title: 'All Events' }} />
        </Tab.Navigator>
    );
}