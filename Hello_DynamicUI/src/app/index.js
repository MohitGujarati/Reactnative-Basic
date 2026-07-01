import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import PlatformSpecificCode from '../components/platformSpecificCode';
import CustomButton from '../components/CustomButton/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      {/* <PlatformSpecificCode /> */}
      <View style={{ ...styles.container, paddingTop: insets.top }}>
        <Text style={styles.text}>Welcome</Text>
        <CustomButton title="Custom Button" onPress={() => alert("Button Pressed")} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
});



{/*
  const [dimensions, setDimensions] = useState({ window: Dimensions.get('window') });

  useEffect(() => {

    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window });
    });
    return () => subscription.remove();
  }, []);

  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height; 


    <SafeAreaProvider style={styles.safeContainer}>
      <SafeAreaView style={styles.container}>
        <View style={[styles.box, {
          width: windowWidth > 500 ? "80%" : "90%",
          height: windowHeight > 600 ? "30%" : "100%",
        }]}>
          <Text style={{ fontSize: windowWidth > 500 ? 50 : 14 }}>Hello Mohit</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

    
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log('width', windowWidth);
console.log('height', windowHeight);

  usewindow dimensions hooks is used to get the dimensions of the screen in real time
  and it is more efficient than the Dimensions.get('window') method 
*/}