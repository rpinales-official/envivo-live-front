import React from 'react';
import { FlatList, ListRenderItem, View, StyleSheet, Text } from 'react-native';
import FeaturedEventCard from './FeaturedEventCard';

export type FeaturedEvent = {
    id: string;
    title: string;
    subtitle?: string;
    imageUrl?: string;
};

type Props = {
    title?: string;
    data: FeaturedEvent[];
    onPressItem?: (id: string) => void;
};

export default function FeaturedEventsCarousel({ title, data, onPressItem }: Props) {
    const renderItem: ListRenderItem<FeaturedEvent> = ({ item }) => (
        <FeaturedEventCard
            title={item.title}
            subtitle={item.subtitle}
            imageUrl={item.imageUrl}
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
    section: { marginTop: 8 },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    content: { paddingHorizontal: 16 },
});