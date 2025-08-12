import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
import TopNavBar from './TopNavBar';

export default function ScreenLayout({
    title,
    showBackButton = false,
    children,
}: {
    title: string;
    showBackButton?: boolean;
    children: React.ReactNode;
}) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
            <TopNavBar title={title} showBackButton={showBackButton} />
            <View style={styles.content}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a'
    },
    content: {
        flex: 1
    },
});