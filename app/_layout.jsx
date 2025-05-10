import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Index Screen */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Edit Profile Screen */}
      <Stack.Screen
        name="edit-profile"
        options={{
          title: "Edit Profile", // Set the correct title
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: {
            fontFamily: "Outfit", // Ensure the font is applied
            fontWeight: "800", // ExtraBold
            color: "#2260FF", // Title color
          },
        }}
      />

      {/* History Screen */}
      <Stack.Screen
        name="history"
        options={{
          title: "History", // Set the correct title
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: {
            fontFamily: "Outfit", // Ensure the font is applied
            fontWeight: "800", // ExtraBold
            color: "#2260FF", // Title color
          },
        }}
      />
    </Stack>
  );
}
