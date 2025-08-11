import React from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Event } from '../types/event';
import { buildEventMeta } from '../utils/format';

type EventCardProps = {
    event: Event;
    onPress?: (id: string) => void;
};

export default function EventCard({
    event,
    onPress,
}: EventCardProps) {

    const meta = buildEventMeta(event.venueName, event.startDateTime, event.timeZone);

    return (
        <Pressable
            onPress={() => onPress?.(event.id)}
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        >
            <Image
                source={event.imageUrl ? { uri: event.imageUrl } : require('../../assets/placeholder.png')}
                style={styles.image}
            />
            <View style={styles.textWrap}>
                <Text numberOfLines={1} style={styles.title}>{event.title}</Text>
                {!!meta && (
                    <Text numberOfLines={1} style={styles.meta}>{meta}</Text>
                )}
            </View>
        </Pressable>
    );
}

const ITEM_HEIGHT = 80;

const styles = StyleSheet.create({
    row: {
        minHeight: ITEM_HEIGHT,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#0f0f0f',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowPressed: { opacity: 0.9 },
    image: {
        width: ITEM_HEIGHT - 8,
        height: ITEM_HEIGHT - 8,
        borderRadius: 10,
        backgroundColor: '#1a1a1a',
        marginRight: 12,
    },
    textWrap: {
        flex: 1
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    meta: {
        color: '#cfcfcf',
        fontSize: 12,
        marginTop: 2,
    },
});