import { StyleSheet, Text, View, Pressable, Button } from 'react-native'
import { Link, router } from 'expo-router'

import React from 'react'

export default function login() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>login</Text>
            <Link href="/register" style={styles.button} asChild>
                <Pressable>
                    <Text >Register</Text>
                </Pressable>
            </Link>
            {/* After API calls or form submission we will use router.push('/register') for button */}
            <Button title="Register - push" onPress={() => router.push('/register')} color="#6eb0f6ff" />
            <Button title="Register - replace" onPress={() => router.replace('/register')} color="#f6d06eff" />
            <Button title="Register - back" onPress={() => router.back('/register')} color="#f6d06eff" />
            F

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

    button: {

        padding: 10,
        borderRadius: 10,
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: "#6eb0f6ff",
    }


})