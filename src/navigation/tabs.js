import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../screens/HomePage";
import Categories from "../screens/categories";
import Favorites from "../screens/favorites";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
