import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Switch } from "react-native";
import { Button } from "react-native-paper";

const RoomListCard = ({ rooms, GoToDetails }) => {
  // Initialize switch states based on each room's 'on' property
  const [switchStates, setSwitchStates] = useState(() =>
    rooms.reduce((acc, room) => {
      // Set the initial switch state to the room's 'on' value
      acc[room.title] = room.on;
      return acc;
    }, {})
  );

  const renderItem = ({ item }) => (
    <RoomCard
      title={item.title}
      devices={item.devices}
      isOn={switchStates[item.title]}
      onToggle={() => {
        setSwitchStates((prev) => ({
          ...prev,
          [item.title]: !prev[item.title],
        }));
      }}
    />
  );

  const RoomCard = ({ title, devices, isOn, onToggle }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.devices}>{devices} devices</Text>
        <View style={styles.switchRow}>
          {/* Display "ON" if isOn is true, "OFF" if false */}
          <Text style={styles.onText}>{isOn ? "ON" : "OFF"}</Text>
          <Button  mode="text" onPress={GoToDetails}>
            View Details
          </Button>
          {/* <Switch value={isOn} onValueChange={onToggle} /> */}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={rooms}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      numColumns={2}
      style={{ flex: 1 }} // Ensure FlatList takes available space for scrolling
      contentContainerStyle={{ paddingBottom: 20 }} // Add padding for better UX
    />
  );
};

export default RoomListCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    
  },
  devices: {
    fontSize: 14,
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  onText: {
    fontSize: 16,
  },
});
