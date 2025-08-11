import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { buildEventMeta } from '../../utils/format';

type EventTitleBlockProps = {
    title: string;
    venueName?: string;
    startDateTime?: string;
    timeZone?: string;
};

export default function EventTitleBlock({
    title,
    venueName,
    startDateTime,
    timeZone,
}: EventTitleBlockProps) {

    const meta = buildEventMeta(venueName, startDateTime, timeZone);

    return (
        <View style={styles.wrap}>
            <Text style={styles.title}>{title}</Text>
            {!!meta && <Text style={styles.meta}>{meta}</Text>}
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
    meta: {
        color: '#bbb',
        fontSize: 14,
        marginTop: 4
    },
});