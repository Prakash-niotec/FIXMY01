import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end", // Align the popup at the bottom
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  popupContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 15, // Notch corner radius
    borderTopRightRadius: 15, // Notch corner radius
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.9, // 90% of the screen width
    alignSelf: "center", // Center the popup horizontally
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    fontFamily: "Outfit",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#007BFF", // Same as the cancel button in other screens
    paddingVertical: 12,
    borderRadius: 30, // Button radius
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    fontFamily: "Outfit",
  },
  logoutButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#FF3B30", // Red for logout
    paddingVertical: 12,
    borderRadius: 30, // Button radius
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    fontFamily: "Outfit",
  },
});
