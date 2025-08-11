import React, { useEffect } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import FeaturedEventsCarousel from '../components/FeaturedEventsCarousel';
import VerticalEventsList from '../components/VerticalEventsList';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useEvents } from '../context/EventsProvider';
import { fetchTicketmasterRaw } from '../services/ticketmaster';
import { toTmStart } from '../utils/datetime';

export default function HomeScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { featuredEvents, upcomingEvents, isLoading } = useEvents();

    // ============================================

    useEffect(() => {
    (async () => {
      try {
        // const nowIso = new Date().toISOString();
        const startDateTime = toTmStart(new Date());
        const data = await fetchTicketmasterRaw({
          countryCode: 'US',
          city: 'Boston',
          radius: 50,
          startDateTime,
          size: 50,
          sort: 'date,asc',
        });

        const events = data._embedded?.events ?? [];
        console.log('[TM] Total fetched:', events.length);
        console.log('[TM] First event sample:', events[0]);
      } catch (e) {
        console.log('[TM] Error:', e);
      }
    })();
  }, []);


    // ============================================

    return (
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    upcomingWrap: {
        flex: 1
    },
});