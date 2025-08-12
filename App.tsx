import React, { useEffect } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { EventsProvider } from './src/context/EventsProvider';
import * as SystemUI from 'expo-system-ui';

const navTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		background: '#0a0a0a',
		card: '#0a0a0a',
		border: 'transparent',
		text: '#ffffff',
		primary: '#ffffff',
	},
};

export default function App() {
	// Ensure the Android window background is dark
	useEffect(() => {
		SystemUI.setBackgroundColorAsync('#0a0a0a');
	}, []);

	return (
		<EventsProvider>
			<NavigationContainer theme={navTheme}>
				<AppNavigator />
			</NavigationContainer>
		</EventsProvider>
	);
}