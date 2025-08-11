import React from 'react';
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Event } from '../types/event';
import { buildEventMeta } from '../utils/format';

type FeaturedEventCardProps = {
    event: Event;
    onPress?: (id: string) => void;
};

export default function FeaturedEventCard({
    event,
    onPress,
}: FeaturedEventCardProps) {

    const meta = buildEventMeta(event.venueName, event.startDateTime, event.timeZone);

    return (
        <Pressable
            onPress={() => onPress?.(event.id)}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        >
            <ImageBackground
                source={event.imageUrl ? { uri: event.imageUrl } : undefined}
                // @TODO: replace with a working image
                defaultSource={require('../../assets/placeholder.png')}
                style={styles.image}
                imageStyle={styles.imageRadius}
                resizeMode="cover"
            >
                {/* gradient-ish overlay for text readability */}
                <View style={styles.overlay} />
                <View style={styles.textWrap}>
                    <Text numberOfLines={1} style={styles.title}>{event.title}</Text>
                    {!!meta && (
                        <Text numberOfLines={1} style={styles.meta}>{meta}</Text>
                    )}
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 260,
        height: 160,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
        marginRight: 16,
    },
    cardPressed: { opacity: 0.9 },
    image: { flex: 1, justifyContent: 'flex-end' },
    imageRadius: { borderRadius: 12 },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    textWrap: {
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    meta: {
        color: '#ddd',
        fontSize: 12,
        marginTop: 2,
    },
});