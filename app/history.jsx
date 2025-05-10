import { View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HistoryScreen() {
  const router = useRouter();

  return (
    <View>
      <Button
        title="Clear All"
        onPress={() => console.log("History Cleared")}
      />
      <Button title="More" onPress={() => router.push("/details")} />
    </View>
  );
}
