import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../themes/colors";

import IconCard from "../../components/svg/IconCard";
import IconOptions from "../../components/svg/IconOptions";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <IconOptions size={40} />
        <IconCard size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${colors.secundary}`,
    height: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 40,
  },
  topContent: {
    flexDirection: "row",
    // position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Header;
