import { Stack } from "expo-router";
import { Text } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Text
            style={{
              fontSize: 28,
              color: "#2260FF",
              marginLeft: 10,
              fontWeight: "900",
              fontFamily: "Outfit",
            }}
          >
            {"<"}
          </Text>
        ),
      }}
    >
      {/* Index Screen */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Edit Profile Screen */}
      <Stack.Screen
        name="edit-profile"
        options={{
          title: "Edit Profile",
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: {
            fontFamily: "Outfit",
            fontWeight: "800",
            color: "#2260FF",
          },
        }}
      />

      {/* History Screen */}
      <Stack.Screen
        name="history"
        options={{
          title: "History",
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: {
            fontFamily: "Outfit",
            fontWeight: "800",
            color: "#2260FF",
          },
        }}
      />

      {/* Logout Screen */}
      <Stack.Screen
        name="logout"
        options={{
          title: "Logout",
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: {
            fontFamily: "Outfit",
            fontWeight: "800",
            color: "#2260FF",
          },
        }}
      />

      {/* Details Screen */}
      <Stack.Screen
        name="details"
        options={{
          title: "History Detail",
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: {
            fontFamily: "Outfit",
            fontWeight: "800",
            color: "#2260FF",
          },
        }}
      />
    </Stack>
  );
}
