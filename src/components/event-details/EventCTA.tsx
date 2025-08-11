import React from 'react';
import {
    Linking,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

type EventCTAProps = {
    label?: string;
    ticketUrl?: string;
};

export default function EventCTA({
    label = 'Buy Tickets',
    ticketUrl,
}: EventCTAProps) {

    const handlePress = async () => {
        if (ticketUrl) await Linking.openURL(ticketUrl);
    };

    return (
        <View style={styles.wrap}>
            <Pressable onPress={handlePress} style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
                <Text style={styles.btnText}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    btn: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.9
    },
    btnText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '700'
    },
});