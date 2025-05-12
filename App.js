import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigations/AuthNavigation";
import "./global.css";
import { verifyInstallation } from "nativewind";
import {
  HomeScreen,
  RoomDetails,
  RoomsScreen,
  SecurityScreen,
} from "./src/containers";
// import { PaperProvider } from "react-native-paper";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  // colors: {
  //   ...DefaultTheme.colors,
  //   myOwnColor: '#BADA55',
  // },
  colors: {
    primary: "#FE786F",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 218, 213)",
    onPrimaryContainer: "rgb(65, 0, 1)",
    secondary: "rgb(149, 74, 0)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 220, 198)",
    onSecondaryContainer: "rgb(254, 121, 107)",
    tertiary: "rgb(149, 74, 0)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 220, 198)",
    onTertiaryContainer: "rgb(48, 20, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(32, 26, 25)",
    surface: "rgb(255, 251, 255)",
    onSurface: "#363636",
    surfaceVariant: "rgb(245, 221, 218)",
    onSurfaceVariant: "rgb(83, 67, 65)",
    outline: "#363636",
    outlineVariant: "rgb(216, 194, 191)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(54, 47, 46)",
    inverseOnSurface: "rgb(251, 238, 236)",
    inversePrimary: "rgb(255, 180, 170)",
    elevation: {
      level0: "transparent",
      level1: "rgb(251, 241, 245)",
      level2: "rgb(248, 235, 238)",
      level3: "rgb(245, 230, 232)",
      level4: "rgb(244, 228, 230)",
      level5: "rgb(243, 224, 226)",
    },
    surfaceDisabled: "rgba(32, 26, 25, 0.12)",
    onSurfaceDisabled: "rgba(32, 26, 25, 0.38)",
    backdrop: "rgba(59, 45, 43, 0.4)",
  },
};

export default function App() {
  verifyInstallation();

  return (
    // <SafeAreaView style={{}}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthNavigation />
        {/* <RoomDetails /> */}
        {/* <HomeScreen /> */}
        {/* <SecurityScreen /> */}
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "center",
     
  },
});
