import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SegmentedButtons } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import {
  ControllAC,
  ControllShutter,
  RadiasSliderController,
} from "../components";

// Define devices
const RoomDevices = [
  {
    label: "Light",
    value: "light",
    icon: ({ color }) => <Ionicons name="bulb" size={24} color={color} />,
  },
  {
    label: "Shutter",
    value: "shutter",
    icon: ({ color }) => (
      <Ionicons name="swap-vertical" size={24} color={color} />
    ),
  },
  {
    label: "A/C",
    value: "ac",
    icon: ({ color }) => <Ionicons name="snow" size={24} color={color} />,
  },
];

// Define modes for each device
const DeviceModes = {
  light: [
    {
      label: "Bright",
      value: "bright",
      description: "Full brightness for a well-lit room",
      icon: "sunny",
    },
    {
      label: "Dim",
      value: "dim",
      description: "Soft light for relaxation",
      icon: "partly-sunny",
    },
    {
      label: "Off",
      value: "off",
      description: "Lights turned off",
      icon: "moon",
    },
  ],
  shutter: [
    {
      label: "Open",
      value: "open",
      description: "Shutter fully raised",
      icon: "arrow-up",
    },
    {
      label: "Half",
      value: "half",
      description: "Shutter halfway open",
      icon: "remove",
    },
    {
      label: "Closed",
      value: "closed",
      description: "Shutter fully lowered",
      icon: "arrow-down",
    },
  ],
  ac: [
    {
      label: "Cool",
      value: "cool",
      description: "Cool temperature setting",
      icon: "snow",
    },
    {
      label: "Comfort",
      value: "comfort",
      description: "Comfortable temperature",
      icon: "thermometer",
    },
    {
      label: "Warm",
      value: "warm",
      description: "Warm temperature setting",
      icon: "flame",
    },
    {
      label: "Off",
      value: "off",
      description: "A/C turned off",
      icon: "power",
    },
  ],
};

// Define settings for each mode of each device
const ModeSettings = {
  light: {
    bright: { brightness: 100 },
    dim: { brightness: 50 },
    off: { brightness: 0 },
  },
  shutter: {
    open: { shutterLevel: 100 },
    half: { shutterLevel: 50 },
    closed: { shutterLevel: 0 },
  },
  ac: {
    cool: { temperature: 18 },
    comfort: { temperature: 22 },
    warm: { temperature: 25 },
    off: { temperature: null },
  },
};

const RoomDetails = ({ navigation }) => {
  const [brightness, setBrightness] = useState(25);
  const [shutterLevel, setShutterLevel] = useState(50);
  const [temperature, setTemperature] = useState(22);
  const [roomDeviceValue, setRoomDeviceValue] = useState("light");
  const [selectedModes, setSelectedModes] = useState({
    light: "bright",
    shutter: "open",
    ac: "comfort",
  });
  const [currentIcon, setCurrentIcon] = useState(
    DeviceModes.light.find((mode) => mode.value === "bright").icon
  );
  const modeIconOpacity = useRef(new Animated.Value(1)).current;

  const applySettings = (settings) => {
    if (settings.brightness !== undefined) {
      setBrightness(settings.brightness);
    }
    if (settings.shutterLevel !== undefined) {
      setShutterLevel(settings.shutterLevel);
    }
    if (settings.temperature !== undefined) {
      setTemperature(settings.temperature);
    }
  };

  useEffect(() => {
    const mode = selectedModes[roomDeviceValue];
    const settings = ModeSettings[roomDeviceValue][mode];
    applySettings(settings);
  }, [roomDeviceValue, selectedModes]);

  useEffect(() => {
    const currentMode = DeviceModes[roomDeviceValue].find(
      (mode) => mode.value === selectedModes[roomDeviceValue]
    );
    if (currentMode) {
      Animated.timing(modeIconOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIcon(currentMode.icon);
        Animated.timing(modeIconOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [selectedModes, roomDeviceValue]);

  const currentDescription =
    DeviceModes[roomDeviceValue].find(
      (mode) => mode.value === selectedModes[roomDeviceValue]
    )?.description || "";

  const customTheme = {
    colors: { primary: "black" },
    roundness: 2,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Room Title</Text>
      <Text style={styles.detail}>Devices: Light, Shutter, A/C</Text>
      <Text style={styles.detail}>Status: ON</Text>
      <View style={styles.devicesContainer}>
        <SegmentedButtons
          value={roomDeviceValue}
          onValueChange={setRoomDeviceValue}
          buttons={RoomDevices}
          style={styles.segmentedButtons}
          density="medium"
          
          // theme={customTheme}
        />
        {roomDeviceValue === "light" && (
          <RadiasSliderController
            data={{ brightness, min: 0, max: 100, setBrightness }}
          />
        )}
        {roomDeviceValue === "shutter" && (
          <ControllShutter value={shutterLevel} onChange={setShutterLevel} />
        )}
        {roomDeviceValue === "ac" && (
          <ControllAC value={temperature} onChange={setTemperature} />
        )}
      </View>
      <View style={styles.modesContainer}>
        <Animated.View
          style={{
            opacity: modeIconOpacity,
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          <Ionicons name={currentIcon} size={40} color="rgb(254, 121, 107)" />
        </Animated.View>
        <Text style={styles.modesTitle}>Modes:</Text>
        <SegmentedButtons
          value={selectedModes[roomDeviceValue]}
          onValueChange={(newMode) =>
            setSelectedModes({ ...selectedModes, [roomDeviceValue]: newMode })
          }
          buttons={DeviceModes[roomDeviceValue].map((mode) => ({
            value: mode.value,
            label: mode.label,
            icon: ({ color }) => (
              <Ionicons name={mode.icon} size={24} color={color} />
            ),
          }))}
          style={styles.segmentedButtons}
          density="medium"
        />
        <Text style={styles.description}>{currentDescription}</Text>
      </View>
    </SafeAreaView>
  );
};

export default RoomDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color:'#FF746C',
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  devicesContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  modesContainer: {
    marginTop: 20,
  },
  modesTitle: {
    fontSize: 22,
    marginBottom: 10,
  },
  segmentedButtons: {
    color: "#FE796B",
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
    textAlign: "center",
  },
});
