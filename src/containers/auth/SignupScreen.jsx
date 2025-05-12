import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import BGImg from "../../../assets/images/smart-H3.jpg";
import { WindowHeight, WindowWidth } from "../../utils/Variables";

const SignUpScreen = ({ navigation }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Showpassword , setShowPassword] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.backgroundContainer}>
        <Image source={BGImg} style={styles.backgroundImage} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0, 0.85)", "rgba(0,0,0, 1)"]}
          style={styles.overlay}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>WELCOME!</Text>

        <TextInput
          label="Username"
          value={username}
          onChangeText={setUserName}
          right={<TextInput.Icon icon="account" color="white" />}
          style={styles.input}
          textColor="white"
          

        />
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
          secureTextEntry
          right={<TextInput.Icon icon="eye" color="white" onPress={()=>setShowPassword(!Showpassword)}/>}
          style={styles.input}
          textColor="white"
        />

        <View style={styles.btnContainer}>
          <Button
            icon="account-plus"
            mode="contained"
            textColor="black"
            onPress={() => console.log("Sign Up Pressed")} 
            buttonColor="white"
          >
            Sign up
          </Button>

          <View style={styles.endView}>
            <Text style={styles.endTxt}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
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
    width: WindowWidth * 0.5,
    alignSelf: "center",
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

export default SignUpScreen;
