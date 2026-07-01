import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "#FFF7EB"
                },
                headerTitle: "Recipe App",
                headerStyle: {
                    backgroundColor: "#752424ff",

                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                tabBarActiveTintColor: "#752424ff",
                tabBarInactiveTintColor: "#090909ff",



            }}


        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    tabBarLabel: "Explore",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color={color} />
                    ),
                    title: "Explore"
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                    title: "Profile",
                    tabBarBadge: 3,
                }}
            />
        </Tabs>
    );
}