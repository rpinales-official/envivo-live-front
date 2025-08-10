import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import EventCard from './EventCard';

export type VerticalEvent = {
    id: string;
    title: string;
    subtitle?: string;
    imageUrl?: string;
};

type Props = {
    title?: string;
    data: VerticalEvent[];
    onPressItem?: (id: string) => void;
};

export default function VerticalEventsList({
    title,
    data,
    onPressItem,
}: Props) {
    const renderItem: ListRenderItem<VerticalEvent> = ({ item }) => (
        <EventCard
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            imageUrl={item.imageUrl}
            onPress={onPressItem}
        />
    );

    return (
        <View style={styles.section}>
            {title && <Text style={styles.sectionTitle}>{title}</Text>}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 12,
        flex: 1
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 16,
        marginBottom: 6,
    },
    content: {
        paddingBottom: 24
    },
    separator: {
        height: 8
    },
});