import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ color: 'white' }}>Home content goes here...</Text>
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