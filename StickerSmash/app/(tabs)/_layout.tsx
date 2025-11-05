import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00ADB5",
        tabBarInactiveTintColor: "#eeeeeeab",
        tabBarStyle: {
          backgroundColor: "#393E46",
        },
        headerStyle: {
          backgroundColor: "#393E46",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home Screen",
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About Screen",
          title: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? "information-circle-sharp"
                  : "information-circle-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          headerTitle: "Contact Screen",
          title: "Contact",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "call-sharp" : "call-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen name="+not-found" options={{}} />
    </Tabs>
  );
}
