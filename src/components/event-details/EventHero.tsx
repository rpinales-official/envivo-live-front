import React from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';

type EventHeroProps = {
    imageUrl?: string;
};

export default function EventHero({
    imageUrl,
}: EventHeroProps) {

    return (
        <View style={styles.wrap}>
            <Image
                source={imageUrl ? { uri: imageUrl } : require('../../../assets/placeholder.png')}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        aspectRatio: 16 / 9,
        backgroundColor: '#111'
    },
    image: {
        width: '100%',
        height: '100%'
    },
});