import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TabBarHome from "../components/svg/TabBarHome";
import TabBarTrack from "../components/svg/TabBarTrack";
import TabBarFavorites from "../components/svg/TabBarFavorites";
import TabBarCategories from "../components/svg/TabBarCategories";
import TabBarProfile from "../components/svg/TabBarProfile";

import HomePage from "../screens/HomePage";
import Categories from "../screens/Categories";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";

import colors from "../themes/colors";

const Tab = createBottomTabNavigator();

const TabOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Home") {
      //   iconName = focused ? "home-sharp" : "home-outline";
      return <TabBarHome size={size} color={color} />;
    } else if (route.name === "Categories") {
      //   iconName = focused ? "albums-sharp" : "albums-outline";
      return <TabBarCategories size={size} color={color} />;
    } else if (route.name === "Favorites") {
      //   iconName = focused ? "heart-sharp" : "heart-outline";
      return <TabBarFavorites size={size} color={color} />;
    } else if (route.name === "Profile") {
      //   iconName = focused ? "person-sharp" : "person-outline";
      return <TabBarProfile size={size} color={color} />;
    }

    // You can return any component that you like here!
    // return <TabBarHome size={size} color={color} />;
  },
  tabBarActiveTintColor: `${colors.secundary}`,
  tabBarInactiveTintColor: `${colors.textColor}`,
  tabBarStyle: { backgroundColor: `${colors.inputBackground}` },
  headerShown: false,
});

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={TabOptions}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
