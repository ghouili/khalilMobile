import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
} from "react-native";
import {
  Provider as PaperProvider,
  Card,
  Button,
  Title,
  Paragraph,
} from "react-native-paper";

const SecurityScreen = () => {
  const [alarmStatus, setAlarmStatus] = useState(false);

  const toggleAlarm = () => {
    setAlarmStatus(!alarmStatus);
    // Placeholder for alarm control API call
    console.log(`Alarm ${alarmStatus ? "deactivated" : "activated"}`);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Security Control</Title>
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>Motion Detection Alarm</Paragraph>
          <Paragraph>Status: {alarmStatus ? "Active" : "Inactive"}</Paragraph>
          {/* <Button
            mode="contained"
            onPress={toggleAlarm}
            style={styles.button}
            color={alarmStatus ? "#FF5252" : "#6200EE"}
          >
            {alarmStatus ? "Deactivate Alarm" : "Activate Alarm"}
          </Button> */}
          <Switch
            trackColor={{ false: "#ECECEC", true: "#fcd4bb" }}
            thumbColor="#FE786F"
            value={alarmStatus}
            onValueChange={toggleAlarm}
          />
        </Card.Content>
      </Card>
    </View>
  );
};

export default SecurityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: "#F5F5F5",
  },
  title: {
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    marginBottom: 16,
    elevation: 4,
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
  button: {
    marginTop: 8,
  },
  list: {
    paddingBottom: 16,
  },
});
