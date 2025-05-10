import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles/globalStyles";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require("./assets/profile.jpg")}
        style={styles.profileImage}
      />

      {/* User Info */}
      <Text style={styles.userName}>Keerththanan Gobalakrishnan</Text>
      <Text style={styles.email}>Keeththu108@gmail.com</Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/edit-profile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => router.push("/history")}
      >
        <Text style={styles.historyText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.push("/logout")}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      {/* App Version */}
      <Text style={styles.versionText}>App Version 1.0</Text>
    </View>
  );
}
