import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type DetailsRoute = RouteProp<RootStackParamList, 'EventDetails'>;

export default function EventDetailsScreen() {
    const { params } = useRoute<DetailsRoute>();
    const { id } = params;

    console.error(`EventDetailsScreen event ID: ${id}`);

    return (
        <View style={styles.container}>
            {/* @ToDo:
          - read event by id from context/cache
          - render hero image, title, venue/time, actions, etc.
        */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
        padding: 16
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 8
    },
    subtitle: {
        color: '#bbb',
        fontSize: 14
    },
});