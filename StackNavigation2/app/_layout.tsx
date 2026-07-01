import { Stack } from "expo-router";
import { Pressable, Text, Image } from "react-native";

export default function RootLayout() {

  function LogoTitle() {
    return (
      <Image
        source={{ uri: "https://firebasestorage.googleapis.com/v0/b/tech-career-growth.appspot.com/o/company_logos%2Fgoogle.jpeg?alt=media&token=780356ef-3efc-4728-9eb4-d909b75bb4a6" }}
        style={{ width: 50, height: 50 }}
      />
    );
  }




  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "HOME",
        headerLargeTitle: true,
        headerShadowVisible: false,
        headerStyle: { backgroundColor: '#6a51ae' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
        headerRight: () => (
          <Pressable onPress={() => alert('About button pressed')}>
            <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 16 }}>Menu</Text>
          </Pressable>
        ),

      }} />
      <Stack.Screen name="about" options={{
        title: "ABOUT",

      }} />
    </Stack>
  )
}

