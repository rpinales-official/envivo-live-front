import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import FeaturedEventsCarousel from '../components/FeaturedEventsCarousel';
import VerticalEventsList from '../components/VerticalEventsList';
import { Event } from '../types/event';

const MOCK_FEATURED: Event[] = [
    {
        id: '1',
        title: 'Rock Night',
        subtitle: 'The Sinclair · Fri 8:00 PM',
        imageUrl: 'https://www.rgj.com/gcdn/presto/2019/10/04/PREN/0813d7ab-694f-42fb-8ee0-6901ea24d1fd-Links_Awakening_Main.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp',
    },
    {
        id: '2',
        title: 'Summer Fest',
        subtitle: 'City Park · Sat 6:30 PM',
        imageUrl: 'https://www.rgj.com/gcdn/presto/2019/10/04/PREN/0813d7ab-694f-42fb-8ee0-6901ea24d1fd-Links_Awakening_Main.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp',
    },
    {
        id: '3',
        title: 'Indie Evening',
        subtitle: 'Brighton Music Hall · Thu 9:00 PM',
        imageUrl: 'https://www.rgj.com/gcdn/presto/2019/10/04/PREN/0813d7ab-694f-42fb-8ee0-6901ea24d1fd-Links_Awakening_Main.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp',
    },
];

const MOCK_UPCOMING: Event[] = [
    {
        id: '101',
        title: 'Jazz Fusion',
        subtitle: 'Wally’s · Tonight 9:00 PM',
        imageUrl: 'https://picsum.photos/seed/jazz/400/400'
    },
    {
        id: '102',
        title: 'Acoustic Set',
        subtitle: 'Cafe Luna · Thu 7:30 PM',
        imageUrl: 'https://picsum.photos/seed/acoustic/400/400'
    },
    {
        id: '103',
        title: 'Punk Revival',
        subtitle: 'The Middle East · Fri 9:30 PM',
        imageUrl: 'https://picsum.photos/seed/punk/400/400'
    },
    {
        id: '104',
        title: 'Blues Night',
        subtitle: 'Beat Brew Hall · Sat 8:00 PM',
        imageUrl: 'https://picsum.photos/seed/blues/400/400'
    },
    {
        id: '105',
        title: 'Rock Night',
        subtitle: 'Midway · Fri 8:00 PM',
        imageUrl: 'https://picsum.photos/seed/blues/400/400'
    },
    {
        id: '106',
        title: 'R&B Night',
        subtitle: 'Rossmore · Sun 8:00 PM',
        imageUrl: 'https://picsum.photos/seed/blues/400/400'
    },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FeaturedEventsCarousel
                    title="Featured Events"
                    data={MOCK_FEATURED}
                    onPressItem={(id) => console.error(`Add navigation to event details page event ID: ${id}`)}
                />
                <View style={styles.upcomingWrap}>
                    <VerticalEventsList
                        title="Upcoming Events"
                        data={MOCK_UPCOMING}
                        onPressItem={(id) => console.error(`Add navigation to event details page event ID: ${id}`)}
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