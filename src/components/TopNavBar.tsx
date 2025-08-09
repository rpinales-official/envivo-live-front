import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type TopNavBarProps = {
    title: string;
    showBackButton?: boolean;
};

export default function TopNavBar({ title, showBackButton = false }: TopNavBarProps) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Left side (Back button if needed) */}
            <View style={styles.sideContainer}>
                {showBackButton && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Center title */}
            <Text style={styles.title}>{title}</Text>

            {/* Right side (empty for now, keeps title centered) */}
            <View style={styles.sideContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomColor: '#1a1a1a',
        borderBottomWidth: 1,
        backgroundColor: '#0a0a0a',
    },
    sideContainer: {
        width: 40, // keeps spacing symmetrical
        alignItems: 'flex-start',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
});