import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const modal = () => {
    return (
        <View style={styles.overlay}>
            <View style={styles.modalContent}>
                <Text style={styles.title}>Modal</Text>
                <Pressable style={styles.button} onPress={() => router.back()}>
                    <Text style={styles.buttonText}>Close</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#6eb0f6",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    }
})

export default modal