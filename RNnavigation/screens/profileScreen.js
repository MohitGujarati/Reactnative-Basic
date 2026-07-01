import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { goBack, navigate, Routes } from '../src/navigation/nav';

export default function profileScreen() {
    // Read the values passed via navigateWithParams(Routes.PROFILE, {...}).
    // Note: params come back as strings, so id is "7", not 7.
    const { id, name } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>

            {/* Show the data that was passed in */}
            <Text style={styles.body}>Name: {name ?? 'unknown'}</Text>
            <Text style={styles.body}>User ID: {id ?? 'unknown'}</Text>

            {/* Navigate straight to Home */}
            <Text style={styles.link} onPress={() => navigate(Routes.HOME)}>
                Go to Home
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
    body: {
        marginTop: 8,
        fontSize: 16,
    },
    link: {
        marginTop: 20,
        fontSize: 18,
        color: 'blue',
    }
});