import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#39FF14", // Verde neon
                tabBarInactiveTintColor: "#FFFFFF", // Branco
                tabBarStyle: {
                    backgroundColor: "#000000", // Preto
                    borderTopWidth: 1,
                    borderTopColor: "#39FF14", // Verde neon
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#000000', // Preto
                },
                headerTintColor: '#39FF14', // Verde neon
            }}
            >
            <Tabs.Screen 
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }} 
            />
            <Tabs.Screen
            name="profile"
            options={{
                title: "Perfil",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                ),
            }}
            />
            <Tabs.Screen
            name="news"
            options={{
                title: "News",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="newspaper" size={size} color={color}/>
                ),
            }}
            />
        </Tabs>
    );
}