import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type EventDescriptionProps = {
    text?: string
};

export default function EventDescription({
    text,
}: EventDescriptionProps) {

    if (!text) return null;
    return (
        <View style={styles.wrap}>
            <Text style={styles.header}>About</Text>
            <Text style={styles.body}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        paddingHorizontal: 16,
        paddingTop: 14
    },
    header: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 6
    },
    body: {
        color: '#d7d7d7',
        fontSize: 14,
        lineHeight: 20
    },
});