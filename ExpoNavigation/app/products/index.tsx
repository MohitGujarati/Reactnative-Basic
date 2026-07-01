import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProductsList = () => {
    return (
        <View style={styles.container}>
            <Text>index</Text>
            <Link href="./1" relativeToDirectory style={styles.link}> Product 1</Link>
            <Link href="/products/2" style={styles.link}> Product 2</Link>
            <Link href="/products/3" style={styles.link}> Product 3</Link>
            <Link href="/products/4" style={styles.link}> Product 4</Link>

            <Link href="/products/best-seller/playstation5" style={styles.link}> Product 5</Link>
            <Link href="/products/new/ipad-pro" style={styles.link}> Product 6</Link>
            <Link href="/products/new/macbook-pro-14-inch" style={styles.link}> Product 7</Link>
            <Link href="/products/best-seller/iphone-15-pro-max" style={styles.link}> Product 8</Link>
            <Link href="/products/new/samsung-galaxy-s24-ultra" style={styles.link}> Product 9</Link>


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

export default ProductsList
