import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Service Details</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
