import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import FeaturedEventCard from '../components/FeaturedEventCard';
import FeaturedEventsCarousel, { FeaturedEvent } from '../components/FeaturedEventsCarousel';

const MOCK_FEATURED: FeaturedEvent[] = [
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
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FeaturedEventsCarousel
                    title="Featured Events"
                    data={MOCK_FEATURED}
                    onPressItem={(id) => console.error(`EAdd navigation to event details page event ID: ${id}`)}
                />
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
});