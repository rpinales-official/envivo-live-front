import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useEvents } from '../context/EventsProvider';
import EventTitleBlock from '../components/event-details/EventTitleBlock';
import EventDescription from '../components/event-details/EventDescription';
import EventCTA from '../components/event-details/EventCTA';
import EventHero from '../components/event-details/EventHero';
import ScreenLayout from '../components/ScreenLayout';

type DetailsRoute = RouteProp<RootStackParamList, 'EventDetails'>;

export default function EventDetailsScreen() {

    const { params } = useRoute<DetailsRoute>();
    const { getEventById } = useEvents();
    const event = getEventById(params.id);

    if (!event) {
        return <View style={styles.container} />;
    }

    return (
        <ScreenLayout title={event.title} showBackButton>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                    <EventHero imageUrl={event.imageUrl} />
                    <EventTitleBlock
                        title={event.title}
                        venueName={event.venueName}
                        startDateTime={event.startDateTime}
                        timeZone={event.timeZone} />
                    <EventDescription text={event.description} />
                    <EventCTA ticketUrl={event.ticketUrl} />
                </ScrollView>
            </View>
        </ScreenLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
        padding: 16,
    },
    content: {
        paddingBottom: 24
    },
});