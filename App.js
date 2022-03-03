import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import Tabs from "./src/navigation/tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
