import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import EventDetailsScreen from '../screens/EventDetailsScreen';

export type RootStackParamList = {
    Tabs: undefined;
    EventDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0a0a0a' } }}>
            <Stack.Screen name="Tabs" component={BottomTabs} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
        </Stack.Navigator>
    );
}