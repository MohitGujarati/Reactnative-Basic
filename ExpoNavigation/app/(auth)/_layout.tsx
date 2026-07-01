import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function AuthLayout() {
    return (
        <View style={styles.container}>
            <Slot />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})