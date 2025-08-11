import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

type EventTitleBlockProps = {
    title: string;
    subtitle?: string
};

export default function EventTitleBlock({
    title,
    subtitle,
}: EventTitleBlockProps) {

    return (
        <View style={styles.wrap}>
            <Text style={styles.title}>{title}</Text>
            {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        paddingHorizontal: 16,
        paddingTop: 16
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800'
    },
    subtitle: {
        color: '#bbb',
        fontSize: 14,
        marginTop: 4
    },
});