import { Text, View, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import NetworkingRn from "../components/ui/networkingRn";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>

        <NetworkingRn />
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },



});

export default App;