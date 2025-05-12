import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { launchImageLibrary } from "react-native-image-picker";

const SettingsScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(null); // State to hold the profile picture

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // Simple validation (you can expand this with more complex rules)
    if (!email || !password || !name || !phone || !address) {
      Alert.alert("Validation Error", "Please fill out all required fields!");
      return;
    }

    Alert.alert(
      "Profile Updated",
      "Your profile has been updated successfully!"
    );
  };

  const handleImageChange = () => {
    launchImageLibrary({ mediaType: "photo" }, (res) => {
      if (res.assets && res.assets.length > 0) {
        setPreviewUrl(res.assets[0].uri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <ScrollView>
        {/* Profile Picture Section */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.imageContainer}>
            {previewUrl ? (
              <Image source={{ uri: previewUrl }} style={styles.image} />
            ) : (
              <View style={styles.placeholder}>
                <Icon name="account" size={80} color="#ccc" />
                <Text style={styles.placeholderText}>No Picture</Text>
              </View>
            )}

            {/* Edit Button */}
            <TouchableOpacity
              style={styles.editButton}
              onPress={handleImageChange}
            >
              <Icon name="pencil" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Username Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your username"
          />
          <Icon name="account" size={24} color="#000" style={styles.icon} />
        </View>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone"
            keyboardType="phone-pad"
          />
          <Icon name="phone" size={24} color="#000" style={styles.icon} />
        </View>

        {/* Address Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
          />
          <Icon name="home" size={24} color="#000" style={styles.icon} />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Icon name="email" size={24} color="#000" style={styles.icon} />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={handlePasswordToggle}
            style={styles.eyeIcon}
          >
            <Icon
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  imageContainer: {
    position: "relative",
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    // marginLeft: 90,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f0f0",
  },
  placeholderText: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 10,
  },
  editButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#007BFF",
    borderRadius: 50,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingsScreen;
