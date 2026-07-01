import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


export default function about() {
    return (
        <View style={styles.con}>
            <Text> This is about screen</Text>
            <Image
                source={{ uri: "https://firebasestorage.googleapis.com/v0/b/tech-career-growth.appspot.com/o/company_logos%2Fgoogle.jpeg?alt=media&token=780356ef-3efc-4728-9eb4-d909b75bb4a6" }}
                style={{ width: 30, height: 30 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})