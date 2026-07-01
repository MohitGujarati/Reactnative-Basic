import { View, Text, StyleSheet } from "react-native"
import { navigate, navigateWithParams, Routes } from '../src/navigation/nav';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>

            {/* Plain navigation — no data */}
            <Text style={styles.link} onPress={() => navigate(Routes.ABOUT)}>
                Go to About Screen
            </Text>

            {/* Navigation WITH data — pass a user to the Profile screen */}
            <Text
                style={styles.link}
                onPress={() => navigateWithParams(Routes.PROFILE, { id: 7, name: 'Mohit' })}
            >
                Go to Profile Screen
            </Text>
        </View>
    )
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
})