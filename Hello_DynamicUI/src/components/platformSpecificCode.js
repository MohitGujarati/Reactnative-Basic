import { Platform, Text, View, StyleSheet } from 'react-native';
// 1. Import the hook instead of the wrapper component
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PlatformSpecificCode() {
    // 2. Call the hook to get the exact pixel dimensions of the safe zones
    const insets = useSafeAreaInsets();

    return (
        // 3. Manually apply the top inset as padding to your main container!
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Text style={[styles.text, { paddingTop: insets.top }]}>Welcome</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
    },
    text: {
        ...Platform.select({
            ios: {
                fontFamily: 'Arial',
                color: "yellow",
                fontWeight: "bold",
            },
            android: {
                fontFamily: 'monospace',
                color: "red",
                fontWeight: "bold",
                fontStyle: "italic",
            }
        }),
        textAlign: 'center',

        fontSize: 20,

    },
});