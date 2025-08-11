import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import VerticalEventsList from '../components/VerticalEventsList';
import { useEvents } from '../context/EventsProvider';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

export default function AllEventsScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { events } = useEvents();

    return (
        <View style={styles.container}>
            <VerticalEventsList
                // title="All Events"
                data={events}
                onPressItem={(id) => navigation.navigate('EventDetails', { id })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a'
    },
});