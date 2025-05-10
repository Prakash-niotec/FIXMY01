import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  const router = useRouter();

  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: colors.primary } }}
    >
      <Tab.Screen name="Profile" component={() => router.push("/index")} />
      <Tab.Screen name="History" component={() => router.push("/history")} />
    </Tab.Navigator>
  );
}
