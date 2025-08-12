import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import VerticalEventsList from '../components/VerticalEventsList';
import { useEvents } from '../context/EventsProvider';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import ScreenLayout from '../components/ScreenLayout';

export default function AllEventsScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { events, isLoading } = useEvents();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <ScreenLayout title="All Events">
            <View style={styles.container}>
                <VerticalEventsList
                    data={events}
                    onPressItem={(id) => navigation.navigate('EventDetails', { id })}
                />
            </View>
        </ScreenLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a'
    },
});