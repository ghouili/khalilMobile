import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import BGImg from "../../../assets/images/smart-H3.jpg";
import { WindowHeight, WindowWidth } from "../../utils/Variables";

let url = "http://0.0.0.0:4000/";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Showpassword, setShowPassword] = useState(true);

  // Fonction pour stocker les données utilisateur après connexion
  const storeUserData = async (userData) => {
    try {
      const jsonValue = JSON.stringify(userData);
      await AsyncStorage.setItem("userData", jsonValue);
    } catch (e) {
      console.error("Error saving user data", e);
    }
  };

  // Fonction pour récupérer les données utilisateur stockées
  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("userData");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
     
      // if (jsonValue != null) {
      //   return JSON.parse(jsonValue)
      // } else {
      //  return  null
      // }


    } catch (e) {
      console.error("Error loading user data", e);
    }
  };

  // Vérifier si un utilisateur est déjà connecté au démarrage
  useEffect(() => {
    const checkUserSession = async () => {
      const userData = await getUserData();
      if (userData) {
        navigation.reset({
          index: 0,
          routes: [{ name: "main" }],
        });
      }
    };
    checkUserSession();
  }, []);

  // Fonction de connexion
  const submit = async () => {
    console.log(email);
    console.log(password);
    try {
      // const res = await axios.post(`${url}user/login`, { email, password });
      // console.log(res);

      // if (res.data && res.data.success) {
      //   const userData = res.data.data;
      //   await storeUserData(userData); // Stocker les infos de l'utilisateur

      //   Alert.alert("Welcome", "Enjoy our app Mr(s) " + userData?.name, [
      //     { text: "Ok" },
      //   ]);

        // Navigation après connexion réussie
        navigation.reset({
          index: 0,
          routes: [{ name: "main" }],
        });
      // } else {
      //   Alert.alert("Error", res.data?.message || "Unknown error", [
      //     { text: "Ok" },
      //   ]);
      // }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response);
        Alert.alert(
          "Error",
          error.response.data.message || "Authentication failed",
          [{ text: "OK" }]
        );
      } else {
        console.log("Error:", error);
        Alert.alert("Error", error.message || "Something went wrong", [
          { text: "OK" },
        ]);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Background Image & Gradient Overlay */}
      <View style={styles.backgroundContainer}>
        <Image source={BGImg} style={styles.backgroundImage} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0, 0.85)", "rgba(0,0,0, 1)"]}
          style={styles.overlay}
        />
      </View>

      {/* Login Form */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>WELCOME!</Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          right={<TextInput.Icon icon="email" color="white" />}
          style={styles.input}
          textColor="white"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={Showpassword}
          right={
            <TextInput.Icon
              icon="eye"
              color="white"
              onPress={() => setShowPassword(!Showpassword)}
            />
          }
          style={styles.input}
          textColor="white"
        />
        <View style={styles.edView}>
          <TouchableOpacity onPress={() => navigation.navigate("forgetpass")}>
            <Text
              style={[
                styles.loginTxt,
                { textAlign: "right", width: "100%", fontSize: 13 },
              ]}
            >
              Forget password ?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <Button
            icon="lock"
            mode="contained"
            textColor="black"
            onPress={submit}
            buttonColor="white"
          >
            Log In
          </Button>
        </View>

        <View style={styles.endView}>
          <Text style={styles.endTxt}>Create an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.loginTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    width: WindowWidth,
    height: WindowHeight,
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  textContainer: {
    width: WindowWidth,
    height: WindowHeight * 0.45,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    gap: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  input: {
    backgroundColor: "transparent",
  },
  btnContainer: {
    width: WindowWidth * 0.4,
    alignSelf: "center",
    marginTop: 0,
  },
  edView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 0,
  },
  endView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  endTxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  loginTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00BFFF",
    marginLeft: 5,
  },
});

export default LoginScreen;
