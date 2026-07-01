import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const notfoundpage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Page not found page</Text>
            <Link href="/" style={styles.link}> Home</Link>
        </View>
    )
}

export default notfoundpage

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