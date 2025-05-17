import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "./global.css";

import PreloginScreen from "./Screens/PreloginScreen";
export default function App() {
  return (
    <View className="flex-1 bg-red-500  ">
      <PreloginScreen />
      <StatusBar style="auto" />
    </View>
  );
}
