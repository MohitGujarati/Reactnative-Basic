import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (

    <View style={styles.container}>
      <Box style={{ ...styles.color1, position: 'absolute', top: 105, left: 105 }}>Box 1 </Box>
      <Box style={{ ...styles.color2, }}>Box 2 </Box>
      <Box style={{ ...styles.color3, }}>Box 3</Box>
      <Box style={{ ...styles.color4, position: 'absolute', top: 155, left: 155 }}>Box 4</Box>
      <Box style={{ ...styles.color5, flexGrow: 1 }}>Box 5</Box>
      <Box style={{ ...styles.color6, flexGrow: 3 }}>Box 6</Box>
      <Box style={{ ...styles.color7, }}>Box 7</Box>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'white',
    borderWidth: 6,
    borderColor: 'red',
    //gap: 5,
    // height: 35,
    // flexWrap: 'wrap',
    // rowGap: 20,
    //columnGap: 20,
    // alignContent: 'flex-end',
    //alignContent: "space-between",
    //flexDirection: "row",
    //justifyContent: "space-between",
    //alignSelf: "flex-start"
    // alignItems: "flex-start",


  },

  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
    fontSize: 14,
    padding: 10,

  },

  boldText: {
    fontWeight: "bold",
  },

  box: {
    width: 250,
    height: 250,
    padding: 10,
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    alignContent: "center",
    justifyContent: "center",
  },

  boxShodow: {
    shadowColor: "#f10e0eff",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 15,
    borderWidth: 2,
  },

  boxText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },

  color1: { backgroundColor: "#E3F2FD" },
  color2: { backgroundColor: "#BBDEFB" },
  color3: { backgroundColor: "#90CAF9" },
  color4: { backgroundColor: "#64B5F6" },
  color5: { backgroundColor: "#42A5F5" },
  color6: { backgroundColor: "#2196F3" },
  color7: { backgroundColor: "#1E88E5" },
  color8: { backgroundColor: "#1976D2" },
  color9: { backgroundColor: "#1565C0" },
  color10: { backgroundColor: "#0D47A1" }
});



{
    /*
        <View style={styles.container}>

      <View>
        <Text style={[styles.darkMode, styles.darkModeText]}>
          inheritance <Text style={styles.boldText}>Style</Text>
        </Text>
      </View>

      <View style={[styles.lightBlue, styles.box, styles.boxShodow]}>
        <Text style={styles.boxText}>Light Blue texts </Text>
      </View>
      <View style={[styles.box, styles.lightGreen, styles.boxShodow]}>
        <Text style={styles.boxText}>Light green text </Text>
      </View>

    </View>

    */}