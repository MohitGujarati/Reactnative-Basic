// ROOT LAYOUT — the navigator for the whole app.
// This is the first thing Expo Router renders. It's where the old App.js
// setup goes: global providers (theme, auth, redux), fonts, splash screen, etc.
//
// <Stack> = a native stack navigator. It gives you the header bar and the
// swipe/back-button behavior automatically. Each <Stack.Screen name="..." />
// maps to a file in src/app/ and lets you configure that screen's header.
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack
            // screenOptions apply to EVERY screen (shared header style).
            screenOptions={{
                headerStyle: { backgroundColor: '#208AEF' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            {/* name must match the filename in src/app/ (without extension) */}
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
            <Stack.Screen name="profile" options={{ title: 'Profile' }} />
        </Stack>
    );
}
