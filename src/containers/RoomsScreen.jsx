import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import RoomDetails from "./RoomDetails";
import { RoomListCard } from "../components";
import { useNavigation } from "@react-navigation/native";

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

const RoomsScreen = () => {

  const navigation = useNavigation();

  const GoToDetails = () => navigation.navigate("roomDetails");
  return (
    <View style={styles.container}>
      {/* <RoomDetails /> */}

      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          marginTop: 40,
          marginBottom: 10,
          color: '#FE786F'
        }}
      >
        Rooms
      </Text>

      <RoomListCard rooms={rooms} GoToDetails={GoToDetails} />
    </View>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
    paddingTop: 20,
  },
  title: {
    marginBottom: 16,
    textAlign: "center",
    color: '#FE786F'
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  button: {
    marginTop: 8,
  },
  list: {
    paddingBottom: 16,
  },
});
