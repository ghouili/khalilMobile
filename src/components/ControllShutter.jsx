import { Alert, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import WheelPicker from "@quidone/react-native-wheel-picker";
import { Button } from "react-native-paper";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const ControllShutter = () => {
  const [value, setValue] = useState(0);
  const min = 0;
  const max = 100;
  const step = 5; // ← change this to 10 for every-10%
  const itemCount = (max - min) / step + 1;

  const data = Array.from({ length: itemCount }, (_, i) => {
    const val = min + i * step;
    return {
      value: val,
      label: `${val}`, // adds the “%” suffix in the label
    };
  });
  return (
    <View style={styles.controller}>
      {value === 0 ? (
        <Text style={styles.label}>Shutter Is Closed</Text>
      ) : value === 100 ? (
        <Text style={styles.label}>Shutter Is Open</Text>
      ) : (
        <Text style={styles.label}>Shutter Opening: {value}%</Text>
      )}
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
            value - 5 >= 0 && value - 5 <= 100
            ? setValue(value - 5)
            : Alert.alert("Can't Open this Shutter More!");
          }}
          >
          <FontAwesome6 name="angles-down" size={20} />
        </Button>
        <Button
          mode="elevated"
          textColor="#FE796B"
          onPress={() => {
            value + 5 >= 0 && value + 5 <= 100
              ? setValue(value + 5)
              : Alert.alert("Can't close this Shutter More!");
          }}
        >
          <FontAwesome6 name="angles-up" size={20} />
        </Button>
      </View>
    </View>
  );
};

export default ControllShutter;

const styles = StyleSheet.create({
  controller: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    // borderWidth :2
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: "80%",
    height: 40,
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
