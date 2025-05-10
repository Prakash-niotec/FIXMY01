import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

const { width, height } = Dimensions.get("window");

export default function EditProfileScreen() {
  const router = useRouter();

  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSave = () => {
    try {
      console.log("Profile saved:", {
        firstName,
        lastName,
        username,
        email,
        phoneNumber,
        birthDate,
        gender,
        profilePicture,
      });
      router.push("/");
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  const handleProfilePictureUpload = () => {
    console.log("Profile picture upload clicked");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          {profilePicture ? (
            <Image
              source={{ uri: profilePicture }}
              style={styles.profilePicture}
            />
          ) : (
            <Image
              source={require("./assets/profile.jpg")}
              style={styles.profilePicture}
            />
          )}
          <TouchableOpacity
            onPress={handleProfilePictureUpload}
            style={styles.uploadButton}
          >
            <Text style={styles.uploadButtonText}>Upload Profile Picture</Text>
          </TouchableOpacity>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Title */}
          <Text style={styles.title}>Edit Profile</Text>

          {/* First Name Field */}
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter your first name"
            placeholderTextColor="#FFFFFF"
          />

          {/* Last Name Field */}
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
            placeholderTextColor="#FFFFFF"
          />

          {/* Username Field */}
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            placeholderTextColor="#FFFFFF"
          />

          {/* Email Field */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#FFFFFF"
            keyboardType="email-address"
          />

          {/* Phone Number Field */}
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            placeholderTextColor="#FFFFFF"
            keyboardType="phone-pad"
          />

          {/* Birth Date Field */}
          <Text style={styles.label}>Birth Date</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.datePicker}
          >
            <Text style={styles.datePickerText}>
              {birthDate.toDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={birthDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          {/* Gender Field */}
          <Text style={styles.label}>Gender</Text>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>

          {/* Save and Cancel Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => router.back()}
            >
              <Text style={[styles.buttonText, { color: "#F36B6E" }]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  uploadButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#007BFF",
    borderRadius: 4,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    fontFamily: "Outfit",
  },
  formContainer: {
    backgroundColor: "#513FF3",
    padding: 16,
    borderRadius: 30, // Updated corner radius
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    fontFamily: "Outfit",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "800",
    fontFamily: "Outfit",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color: "#FFFFFF",
    fontFamily: "Outfit",
  },
  datePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    justifyContent: "center",
  },
  datePickerText: {
    color: "#FFFFFF",
    fontFamily: "Outfit",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
    color: "#FFFFFF",
    fontFamily: "Outfit",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  saveButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 20, // Rounded corners
    alignItems: "center",
  },
  cancelButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 20, // Rounded corners
    alignItems: "center",
    color: "#FF3B30", // Red text inside the button
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    fontFamily: "Outfit",
  },
});
