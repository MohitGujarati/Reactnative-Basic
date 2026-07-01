import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function register() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>register</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
})