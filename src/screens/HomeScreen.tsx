import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import FeaturedEventsCarousel from '../components/FeaturedEventsCarousel';
import VerticalEventsList from '../components/VerticalEventsList';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useEvents } from '../context/EventsProvider';
import ScreenLayout from '../components/ScreenLayout';

export default function HomeScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { featuredEvents, upcomingEvents, isLoading } = useEvents();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <ScreenLayout title="enVivo">
            <View style={styles.container}>
                <View style={styles.content}>
                    <FeaturedEventsCarousel
                        title="Featured Events"
                        data={featuredEvents}
                        onPressItem={(id) => navigation.navigate('EventDetails', { id })}
                    />
                    <View style={styles.upcomingWrap}>
                        <VerticalEventsList
                            title="Upcoming Events"
                            data={upcomingEvents}
                            onPressItem={(id) => navigation.navigate('EventDetails', { id })}
                        />
                    </View>
                </View>
            </View>
        </ScreenLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    content: {
        flex: 1,
    },
    upcomingWrap: {
        flex: 1
    },
});