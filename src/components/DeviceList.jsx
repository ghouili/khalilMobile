import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Switch } from "react-native";

const DeviceList = ({ devices }) => {
  // Initialize switch states based on each device's 'on' property
  const [switchStates, setSwitchStates] = useState(() =>
    devices.reduce(
      (acc, device) => {
        // Set the initial switch state to the device's 'on' value
        acc[device.title] = device.on;
        return acc;
      },
      {}
    )
  );

  const renderItem = ({ item }) => (
    <DeviceCard
      title={item.title}
      isOn={switchStates[item.title]}
      onToggle={() => {
        setSwitchStates((prev) => ({
          ...prev,
          [item.title]: !prev[item.title],
        }));
      }}
    />
  );

  const DeviceCard = ({ title, isOn, onToggle }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.switchRow}>
          {/* Display "ON" if isOn is true, "OFF" if false */}
          <Text style={styles.onText}>{isOn ? "ON" : "OFF"}</Text>
          <Switch value={isOn} onValueChange={onToggle} />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={devices}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      numColumns={2}
      style={{ flex: 1 }} // Ensure FlatList takes available space for scrolling
      contentContainerStyle={{ paddingBottom: 20 }} // Add padding for better UX
    />
  );
};

export default DeviceList;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
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