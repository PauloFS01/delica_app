import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../themes/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${colors.secundary}`,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
