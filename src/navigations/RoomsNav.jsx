import { createStackNavigator } from "@react-navigation/stack";
import { RoomDetails, RoomsScreen } from "../containers";

const RoomsNav = () => {
  const stack = createStackNavigator();

  return (
    <stack.Navigator
      initialRouteName="rooms"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="rooms" component={RoomsScreen} />
      <stack.Screen name="roomDetails" component={RoomDetails} />
      {/* <stack.Screen name="login" component={LoginScreen} /> */}
    </stack.Navigator>
  );
};

export default RoomsNav;
