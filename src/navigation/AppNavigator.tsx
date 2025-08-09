import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopNavBar from '../components/TopNavBar';
import BottomTabs from './BottomTabs';

export type RootStackParamList = {
    Tabs: undefined;
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
        </Stack.Navigator>
    );
}