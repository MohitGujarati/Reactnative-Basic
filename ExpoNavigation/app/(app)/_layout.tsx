import { Slot } from "expo-router";
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
    <SafeAreaProvider>

      <View style={styles.container}>
        <Text style={styles.text}>My Expo App</Text>
        <Slot />
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>

    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  footer: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'blue',
  },
});

