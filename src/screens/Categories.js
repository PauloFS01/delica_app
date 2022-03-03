import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text>This is the index categories page!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C",
    alignItems: "center",
    justifyContent: "center",
  },
});
