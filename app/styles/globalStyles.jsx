import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";

const screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    alignItems: "center",
  },
  profileImage: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
    borderRadius: screenWidth * 0.15,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  email: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.button,
    padding: 12,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  historyButton: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  historyText: {
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
  versionText: {
    marginTop: 20,
    fontSize: 14,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "90%",
  },
  picker: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  phoneInput: {
    flex: 1,
    marginLeft: 10,
  },
  datePickerInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 15,
    width: "90%",
    borderRadius: 8,
  },
});
