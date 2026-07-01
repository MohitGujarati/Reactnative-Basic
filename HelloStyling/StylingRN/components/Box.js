import { View, Text, StyleSheet } from "react-native";


export default function Box({ children, style }) {
    return (
        < View style={[styles.box, style]}>
            <Text style={styles.boxText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        padding: 20,
        backgroundColor: "red",
        borderWidth: 1,
        flexGrow: 1,
        height: 100,
        width: 100,
        borderColor: "black",

    },
    boxText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "Black",
    }
});