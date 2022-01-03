import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Companies from "./Catalog/Companies";
import Order from "./Catalog/Order";
import Account from "./Catalog/Account";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Companies"
          component={Companies}
          options={{
            tabBarLabel: "Companies",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="palette-swatch"
                color={color}
                size={size}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarLabel: "Order",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shopping"
                color={color}
                size={size}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
