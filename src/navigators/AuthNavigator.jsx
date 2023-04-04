import Colors from "../constants/Colors";
import RegisterScreen from "../screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthNavigator = ()=>{
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            statusBarStyle: "light",
            statusBarColor: Colors.primary
          }}>
            <Stack.Screen name="Auth" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator;