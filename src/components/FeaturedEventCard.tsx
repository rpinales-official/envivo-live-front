import React from 'react';
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

// @TODO: revisit this after getting access to the API
type FeaturedEventCardProps = {
    id: string;
    title: string;
    subtitle?: string;
    imageUrl?: string;
    onPress?: (id: string) => void;
};

export default function FeaturedEventCard({
    id,
    title,
    subtitle,
    imageUrl,
    onPress,
}: FeaturedEventCardProps) {

    return (
        <Pressable
            onPress={() => onPress?.(id)}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        >
            <ImageBackground
                source={imageUrl ? { uri: imageUrl } : undefined}
                // @TODO: replace with a working image
                defaultSource={require('../../assets/placeholder.png')}
                style={styles.image}
                imageStyle={styles.imageRadius}
                resizeMode="cover"
            >
                {/* gradient-ish overlay for text readability */}
                <View style={styles.overlay} />
                <View style={styles.textWrap}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    {!!subtitle && (
                        <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text>
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
    subtitle: {
        color: '#ddd',
        fontSize: 12,
        marginTop: 2,
    },
});