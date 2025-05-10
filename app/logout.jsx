import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LogoutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title="Cancel"
        onPress={() => {
          try {
            router.back();
          } catch (error) {
            console.error("Error navigating back:", error);
          }
        }}
      />
      <Button
        title="Yes, Logout"
        onPress={() => {
          try {
            router.replace("/");
          } catch (error) {
            console.error("Error navigating to home:", error);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
