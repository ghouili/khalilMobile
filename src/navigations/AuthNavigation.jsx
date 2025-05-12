import { createStackNavigator } from "@react-navigation/stack";
import { ForgetPassScreen, LoginScreen, SignUpScreen, SplashScreen ,} from "../containers";
import BottomTabNav from "./BottomTabNav";

const AuthNavigation = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <stack.Screen name="splash" component={SplashScreen} />
      <stack.Screen name="main" component={BottomTabNav} />
      <stack.Screen name="login" component={LoginScreen} />
      <stack.Screen name="signup" component={SignUpScreen} />
      <stack.Screen name="forgetpass" component={ForgetPassScreen} />

    </stack.Navigator>
  );
};

export default AuthNavigation;
