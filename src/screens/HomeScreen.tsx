import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import FeaturedEventCard from '../components/FeaturedEventCard';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ color: 'white' }}>Home content goes here...</Text>
                {/* @TODO: move to feat events carousel */}
                <FeaturedEventCard
                    title="Featured Event"
                    subtitle="This is a featured event description."
                    imageUrl="https://www.rgj.com/gcdn/presto/2019/10/04/PREN/0813d7ab-694f-42fb-8ee0-6901ea24d1fd-Links_Awakening_Main.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp"
                    onPress={() => console.error('Add navigation to event details page')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    content: {
        flex: 1,
        padding: 16,
    },
});