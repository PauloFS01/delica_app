// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import Header from "../components/Header";

import colors from "../themes/colors";

export default function HomePage() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        <Header />
      </View>
      <StatusBar barStyle="dark-content" backgroundColor={colors.secundary} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.secundary}`,
  },
  content: {
    flex: 1,
    backgroundColor: `${colors.primaryDetail}`,
  },
});
