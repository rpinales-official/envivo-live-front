import React from 'react';
import {
    FlatList,
    ListRenderItem,
    View,
    StyleSheet,
    Text
} from 'react-native';
import FeaturedEventCard from './FeaturedEventCard';
import { Event } from '../types/event';

type FeaturedEventsCarouselProps = {
    title?: string;
    data: Event[];
    onPressItem?: (id: string) => void;
};

export default function FeaturedEventsCarousel({
    title,
    data,
    onPressItem
}: FeaturedEventsCarouselProps) {

    const renderItem: ListRenderItem<Event> = ({ item }) => (
        <FeaturedEventCard
            event={item}
            onPress={() => onPressItem?.(item.id)}
        />
    );

    return (
        <View style={styles.section}>
            {title && <Text style={styles.sectionTitle}>{title}</Text>}
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.content}
                snapToAlignment="start"
                decelerationRate="fast"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 8
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    content: {
        paddingHorizontal: 16
    },
});