import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopNavBar from '../components/TopNavBar';
import BottomTabs from './BottomTabs';
import EventDetailsScreen from '../screens/EventDetailsScreen';

export type RootStackParamList = {
    Tabs: undefined;
    EventDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                header: ({ route, options, back }) => (
                    <TopNavBar
                        title={options.title ?? route.name}
                        showBackButton={!!back}
                    />
                ),
            }}
        >
            <Stack.Screen
                name="Tabs"
                component={BottomTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EventDetails"
                component={EventDetailsScreen}
                options={{ title: 'Event Details' }}
            />
        </Stack.Navigator>
    );
}