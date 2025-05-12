import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import BGImg from "../../../assets/images/smart-H3.jpg";
import { WindowHeight, WindowWidth } from "../../utils/Variables";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.backgroundContainer}>
        <Image source={BGImg} style={styles.backgroundImage} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0, 0.8)", "rgba(0,0,0, 1)"]}
          style={styles.overlay}
        />
      </View>
      <View style={styles.textContainer}>
        <Animatable.Text animation="slideInDown" duration={3000} style={styles.title}>Make Life Smouth With Smart House</Animatable.Text>
        <Text style={styles.subTitle}>
          Control Your All Type Smart Devices Using Smart House App
        </Text>
        <Animatable.View animation="bounceIn" duration={3000} style={styles.btnContainer}>
          <Button
          
            icon="handshake"
            mode="elevated"
            textColor="black"
            onPress={() => navigation.navigate("login")}
            // style={styles.backgroundContainer}
          >
            Join us
          </Button>
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    // backgroundColor: "#000",
  },
  textContainer: {
    width: WindowWidth,
    height: WindowHeight * 0.35,
    // backgroundColor: "red",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    gap: 5,
    paddingHorizontal: 15,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
  },
  subTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 500,
    textAlign: "center",
  },
  btnContainer: {
    width: WindowWidth * 0.4,
    marginHorizontal: "auto",
    paddingTop: WindowHeight * 0.05,
  },
});

export default SplashScreen;
