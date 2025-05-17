import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import "./global.css";
export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className=" text-4xl font-bold">TrackerX</Text>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}
