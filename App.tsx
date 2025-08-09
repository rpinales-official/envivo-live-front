import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ color, size }) => {
						let iconName: keyof typeof Ionicons.glyphMap;

						if (route.name === 'Home') iconName = 'home';
						else if (route.name === 'All Events') iconName = 'calendar';
						else iconName = 'ellipsis-horizontal';

						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				{/* @Todo: create All events screen */}
				<Tab.Screen name="All Events" component={() => <View><Text>All Events</Text></View>} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
