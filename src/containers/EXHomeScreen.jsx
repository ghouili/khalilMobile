import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { WindowHeight, WindowWidth } from "../utils/Variables";

const HomeScreen = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Light", state: true, icon: "lightbulb-outline" },
    { id: 2, name: "Wifi", state: false, icon: "wifi" },
    { id: 3, name: "Ac", state: false, icon: "air-conditioner" },
    { id: 4, name: "Tv", state: false, icon: "television" },
    { id: 5, name: "Fan", state: true, icon: "fan" },
    { id: 6, name: "Heater", state: false, icon: "fire" },
  ]);

  const [shortcuts, setShortcuts] = useState([
    { id: 1, name: "My Home", icon: "home-outline" },
    { id: 2, name: "Add Room", icon: "plus-circle-outline" },
    { id: 3, name: "Living Room", icon: "sofa-outline" },
  ]);

  const toggleDevice = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, state: !device.state } : device
      )
    );
  };

  const renderDevice = ({ item }) => (
    <View style={[styles.deviceCard, item.state && styles.deviceActive]}>
      <Icon name={item.icon} size={30} color={item.state ? "#fff" : "#000"} />
      <Text style={item.state ? styles.deviceTextActive : styles.deviceText}>{item.name}</Text>
      <Switch
        value={item.state}
        onValueChange={() => toggleDevice(item.id)}
        trackColor={{ false: "#767577", true: "#4CAF50" }}
        thumbColor={item.state ? "#fff" : "#f4f3f4"}
      />
    </View>
  );

  const renderShortcut = ({ item }) => (
    <TouchableOpacity style={styles.shortcutCard}>
      <Icon name={item.icon} size={30} color="#000" />
      <Text style={styles.shortcutText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={devices}
      renderItem={renderDevice}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <>
          <Text style={styles.header}>Welcome Home</Text>

          {/* Shortcuts */}
          <Text style={styles.sectionTitle}>Shortcuts</Text>
          <FlatList
            data={shortcuts}
            renderItem={renderShortcut}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.shortcutsContainer}
          />

          {/* Devices Header + Add Button */}
          <View style={styles.deviceHeader}>
            <Text style={styles.sectionTitle}>Devices</Text>
            <TouchableOpacity style={styles.addDeviceButton}>
              <Icon name="plus" size={24} color="black" />
              <Text style={styles.sectionTitle}>Add device</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },

  // Shortcuts
  shortcutsContainer: { marginBottom: 20 },
  shortcutCard: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
    elevation: 2,
    width: 100,
    justifyContent: "center",
  },
  shortcutText: { fontSize: 14, marginTop: 5, color: "#000" },

  // Devices
  deviceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  deviceCard: {
    width: "48%",
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
    marginHorizontal: 5,
  },
  deviceActive: { backgroundColor: "#4CAF50" },
  deviceText: { fontSize: 16, marginVertical: 5, color: "#000" },
  deviceTextActive: { fontSize: 16, marginVertical: 5, color: "#fff" },

  addDeviceButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
