import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Clock from "react-live-clock";
import { SegmentedButtons, useTheme } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DeviceList, RoomList } from "../components";

// Define rooms data
const rooms = [
  { title: "Living Room", devices: 5, on: true },
  { title: "Kitchen", devices: 3, on: false },
  { title: "Bedroom", devices: 2, on: true },
  { title: "Bathroom", devices: 1, on: true },
  { title: "Garage", devices: 4, on: true },
  { title: "Office", devices: 3, on: true },
  { title: "Basement", devices: 2, on: true },
  { title: "Attic", devices: 1, on: true },
];

// Define devices data
const devices = [
  { title: "Shutters controller", on: true },
  { title: "Lights", on: false },
  { title: "Light detector", on: true },
  { title: "Air quality detector", on: false },
  { title: "Motion sensor", on: true },
  { title: "A/C", on: true },
];

const HomeScreen = () => {
  const theme = useTheme();
  const [value, setValue] = useState("rooms");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.locContainer}>
          <View>
            <Text style={styles.loc}>My Location: </Text>
            <Text style={styles.locvalue}>Tunis, Tunisia</Text>
            <Clock
              style={styles.timevalue}
              format={"HH:mm:ss"}
              ticking={true}
              element={Text}
            />
          </View>
          <View style={styles.tempContainer}>
            <Text style={styles.tempValue}>18°</Text>
            <Text style={styles.airValue}>O²: 95%</Text>
          </View>
        </View>
        <View style={styles.containerBottom}>
          <SegmentedButtons
            value={value}
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              // borderColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              
            }}
            density="medium"
            // theme={{ colors: { primary: "blue" }, roundness: 2 }}
            onValueChange={setValue}
            buttons={[
              {
                value: "rooms",
                label: "Rooms",
              },
              {
                value: "devices",
                label: "Devices",
              },
            ]}
          />
          {/* Pass rooms array to RoomList component */}
          {value === "rooms" ? (
            <RoomList rooms={rooms} />
          ) : (
            <DeviceList devices={devices} />
          )}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    // backgroundColor: "#FaFaFa",
    // borderWidth: 10,
    // borderColor: "#000",
    paddingTop: 20,
  },
  locContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 15,
    // borderWidth: 2,
    // borderColor: "#000",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  tempContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 5,
    color: "#FAFAFA",
  },
  containerBottom: {
    flex: 1,
    paddingTop: 50,
    flexDirection: "column",
    gap: 40,
  },
  loc: {
    fontSize: 26,
    marginBottom: 0,
  },
  locvalue: {
    fontSize: 18,
    marginTop: 0,
  },
  timevalue: {
    fontSize: 26,
    marginTop: 25,
    color: "#FE786F",
  },
  tempValue: {
    fontSize: 36,
    marginTop: 0,
    color: "#FE786F",
  },
  airValue: {
    fontSize: 15,
    marginTop: -10,
    color: "gray",
  },
});
