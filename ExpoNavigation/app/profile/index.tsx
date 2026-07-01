import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function profile() {

    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Redirect href="/(auth)/login" />
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})