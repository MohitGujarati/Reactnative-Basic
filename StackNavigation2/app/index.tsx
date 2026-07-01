import { Text, View, StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>

      <Text >Home screen.</Text>
      <Link href="/about">About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 20,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',

  },
})

