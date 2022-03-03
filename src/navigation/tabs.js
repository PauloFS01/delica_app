import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomePage from "../screens/HomePage";
import Categories from "../screens/Categories";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabIcon = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "home-sharp" : "home-outline";
    } else if (route.name === "Categories") {
      iconName = focused ? "albums-sharp" : "albums-outline";
    } else if (route.name === "Favorites") {
      iconName = focused ? "heart-sharp" : "heart-outline";
    } else if (route.name === "Profile") {
      iconName = focused ? "person-sharp" : "person-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={TabIcon}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
