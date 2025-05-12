import { Alert, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import WheelPicker from "@quidone/react-native-wheel-picker";
import { Button } from "react-native-paper";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const ControllAC = () => {
  const minDegree = 16;
  const maxDegree = 30;
  const [value, setValue] = useState(minDegree);

  const data = Array.from({ length: maxDegree - minDegree + 1 }, (_, i) => {
    const value = minDegree + i;
    return {
      value,
      label: value.toString(),
    };
  });
  return (
    <View style={styles.controller}>
      <Text style={styles.label}>Temperature: {value}°C</Text>
      <WheelPicker
        data={data}
        value={value}
        onValueChanged={({ item: { value } }) => setValue(value)}
        style={styles.slider}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="elevated"
          textColor="#FE796B"
          onPress={() => {
            value - 1 >= minDegree && value - 1 <= maxDegree
              ? setValue(value - 1)
              : Alert.alert("Minimum A/C Degree is 16°C !");
          }}
        >
          <FontAwesome6 name="angles-down" size={20} />
        </Button>
        <Button
          mode="elevated"
          textColor="#FE796B"
          onPress={() => {
            value + 1 >= minDegree && value + 1 <= maxDegree
              ? setValue(value + 1)
              : Alert.alert("Maximum A/C Degree is 30°C !");
            //   : Alert.alert("Can't close this Shutter More!");
          }}
        >
          <FontAwesome6 name="angles-up" size={20} />
        </Button>
      </View>
    </View>
  );
};

export default ControllAC;

const styles = StyleSheet.create({
  controller: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: "80%",
    height: 40,
    color: '#FE796B',
    borderColor: '#363636',
    borderWidth: 2,
    paddingHorizontal: 35,
    borderRadius: 7,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    paddingTop: 30,
  },
});
