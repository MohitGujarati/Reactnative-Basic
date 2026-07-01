import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

export default function CatchAllProductDetails() {
    const { rest } = useLocalSearchParams<{
        rest: string[]
    }>()

    return (
        <View style={styles.container}>
            <Text>Product Detail</Text>
            <Text>Product ID: {rest.join("/")}</Text>
            <Link href="/" style={styles.link}> Home</Link>

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
    },
    link: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        margin: 10,
    }
})