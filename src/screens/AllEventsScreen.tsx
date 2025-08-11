import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import VerticalEventsList from '../components/VerticalEventsList';
import { Event } from '../types/event';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

const MOCK_ALL_EVENTS: Event[] = [
    { id: '201', title: 'Late Night Jazz', subtitle: 'Wally’s · Tonight 11:00 PM', imageUrl: 'https://picsum.photos/seed/latejazz/400/400' },
    { id: '202', title: 'Folk & Friends', subtitle: 'Club Passim · Thu 7:00 PM', imageUrl: 'https://picsum.photos/seed/folk/400/400' },
    { id: '203', title: 'Alt Rock Bash', subtitle: 'Paradise Rock Club · Fri 9:00 PM', imageUrl: 'https://picsum.photos/seed/alt/400/400' },
    { id: '204', title: 'City Strings', subtitle: 'Symphony Hall · Sat 8:00 PM', imageUrl: 'https://picsum.photos/seed/strings/400/400' },
    { id: '205', title: 'Indie Afternoon', subtitle: 'Lawn on D · Sun 4:00 PM', imageUrl: 'https://picsum.photos/seed/indiepm/400/400' },
    { id: '206', title: 'Alt Rock Bash', subtitle: 'Paradise Rock Club · Fri 9:00 PM', imageUrl: 'https://picsum.photos/seed/alt/400/400' },
    { id: '207', title: 'City Strings', subtitle: 'Symphony Hall · Sat 8:00 PM', imageUrl: 'https://picsum.photos/seed/strings/400/400' },
    { id: '208', title: 'Indie Afternoon', subtitle: 'Lawn on D · Sun 4:00 PM', imageUrl: 'https://picsum.photos/seed/indiepm/400/400' },
];

export default function AllEventsScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <VerticalEventsList
                // title="All Events"
                data={MOCK_ALL_EVENTS}
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