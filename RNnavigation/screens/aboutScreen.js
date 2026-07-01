import { View, Text, StyleSheet } from "react-native";
import { goBack, navigate, Routes } from '../src/navigation/nav';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>

            {/* Just call navigate() with the destination — no Link needed */}
            <Text style={styles.link} onPress={() => navigate(Routes.PROFILE)}>
                Go to Profile Screen
            </Text>

            {/* Back to the previous screen */}
            <Text style={styles.link} onPress={() => goBack()}>
                Go back
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 20,
        fontSize: 18,
        color: 'blue',
    }
});