import React from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type TopNavBarProps = { title: string; showBackButton?: boolean };

export default function TopNavBar({ title, showBackButton = false }: TopNavBarProps) {
    const navigation = useNavigation();

    return (
        <SafeAreaView edges={['top']} style={styles.safe}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" translucent={false} />
            <View style={styles.row}>
                <View style={styles.side}>
                    {showBackButton && (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </TouchableOpacity>
                    )}
                </View>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.side} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: '#0a0a0a'
    },
    row: {
        height: 56,
        backgroundColor: '#0a0a0a',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    side: {
        width: 40,
        alignItems: 'flex-start'
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
    },
});