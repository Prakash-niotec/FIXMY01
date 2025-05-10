import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Section: Title */}
      <Text style={styles.title}>Profile</Text>

      {/* Profile Header: Image left, info right */}
      <View style={styles.profileHeader}>
        <Image
          source={require("./assets/profile.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Keerththanan Gobalakrishnan</Text>
          <Text style={styles.email}>Keeththu108@gmail.com</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => router.push("/edit-profile")}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Middle Section: History */}
      <TouchableOpacity
        style={styles.historyRow}
        onPress={() => router.push("/history")}
      >
        <Text style={styles.historyLabel}>⏰ History</Text>
        <Text style={styles.chevron}>{">"}</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Log Out Option */}
      <TouchableOpacity
        style={styles.logoutRow}
        onPress={() => router.push("/logout")}
      >
        <Text style={styles.logoutLabel}>🚪 Log Out</Text>
        <Text style={styles.chevron}>{">"}</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* App Version */}
      <Text style={styles.versionText}>App Version 1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: SCREEN_WIDTH > 500 ? 40 : 16,
    paddingTop: SCREEN_WIDTH > 600 ? 68 : 48, // Increased paddingTop for header
    alignItems: "stretch",
  },
  title: {
    fontFamily: "Outfit",
    fontWeight: "800",
    fontSize: SCREEN_WIDTH > 400 ? 26 : 22,
    color: "#2260FF", // Changed to blue
    textAlign: "center",
    marginBottom: SCREEN_WIDTH > 400 ? 32 : 22, // Increased gap below header
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SCREEN_WIDTH > 400 ? 20 : 14, // Increased gap below profile header
    gap: SCREEN_WIDTH > 400 ? 20 : 12,
  },
  profileImage: {
    width: SCREEN_WIDTH > 400 ? 100 : 80,
    height: SCREEN_WIDTH > 400 ? 100 : 80,
    borderRadius: SCREEN_WIDTH > 400 ? 50 : 40,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    marginRight: SCREEN_WIDTH > 400 ? 16 : 10,
  },
  userInfo: {
    flex: 1,
    justifyContent: "center",
  },
  userName: {
    fontFamily: "Outfit",
    fontWeight: "900",
    fontSize: SCREEN_WIDTH > 400 ? 20 : 16,
    color: "#000",
    marginBottom: 4,
  },
  email: {
    fontFamily: "Outfit",
    fontWeight: "400",
    fontSize: SCREEN_WIDTH > 400 ? 15 : 13,
    color: "#666666",
    marginBottom: 8,
  },
  editButton: {
    backgroundColor: "#2196F3",
    paddingVertical: SCREEN_WIDTH > 400 ? 8 : 6,
    paddingHorizontal: SCREEN_WIDTH > 400 ? 22 : 14,
    borderRadius: 15, // Set to 15 as requested
    alignSelf: "flex-start",
  },
  editButtonText: {
    fontFamily: "Outfit",
    fontWeight: "600",
    fontSize: SCREEN_WIDTH > 400 ? 16 : 14,
    color: "#fff",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: SCREEN_WIDTH > 400 ? 18 : 12,
    width: "100%",
    alignSelf: "center",
  },
  historyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SCREEN_WIDTH > 400 ? 14 : 10,
    paddingHorizontal: 0,
  },
  historyLabel: {
    fontFamily: "Outfit",
    fontWeight: "500",
    fontSize: SCREEN_WIDTH > 400 ? 18 : 15,
    color: "#000",
  },
  chevron: {
    fontSize: SCREEN_WIDTH > 400 ? 22 : 18,
    color: "#999",
    marginLeft: 8,
    fontWeight: "600",
    fontFamily: "Outfit",
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SCREEN_WIDTH > 400 ? 14 : 10,
    paddingHorizontal: 0,
  },
  logoutLabel: {
    fontFamily: "Outfit",
    fontWeight: "500",
    fontSize: SCREEN_WIDTH > 400 ? 17 : 15,
    color: "#000",
  },
  versionText: {
    fontFamily: "Outfit",
    fontWeight: "300",
    fontSize: SCREEN_WIDTH > 400 ? 13 : 11,
    color: "#999999",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: 10,
  },
});
