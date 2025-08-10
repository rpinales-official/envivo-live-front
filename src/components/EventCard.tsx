import React from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

type EventCardProps = {
    id: string;
    title: string;
    subtitle?: string;
    imageUrl?: string;
    onPress?: (id: string) => void;
};

export default function EventCard({
    id,
    title,
    subtitle,
    imageUrl,
    onPress,
}: EventCardProps) {
    return (
        <Pressable
            onPress={() => onPress?.(id)}
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        >
            <Image
            // @TODO: replace with a working image
                source={imageUrl ? { uri: imageUrl } : require('../../assets/placeholder.png')}
                style={styles.image}
            />
            <View style={styles.textWrap}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                {!!subtitle && (
                    <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text>
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
        width: ITEM_HEIGHT - 8,   // keep square
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
    subtitle: {
        color: '#cfcfcf',
        fontSize: 12,
        marginTop: 2,
    },
});