import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { EventsProvider } from './src/context/EventsProvider';

export default function App() {
	return (
		<EventsProvider>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</EventsProvider>
	);
}