import { StyleSheet, Text, View } from 'react-native'

const Hello_Styling = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, {name}</Text>
        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        padding: 10,
    },
})

export default Greet;
