import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type TopNavBarProps = {
    title: string;
    showBackButton?: boolean;
};

export default function TopNavBar({
    title,
    showBackButton = false
}: TopNavBarProps) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <View style={styles.sideContainer}>
                {showBackButton && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                )}
            </View>
            <Text style={styles.title}>{title}</Text>
            {/* Right side empty for symmetry */}
            <View style={styles.sideContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 14,
        backgroundColor: '#0a0a0a',
    },
    sideContainer: {
        width: 40,
        alignItems: 'flex-start',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
});