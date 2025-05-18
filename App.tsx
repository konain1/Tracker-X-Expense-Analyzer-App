import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen";
import {
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_300Light,
  Montserrat_100Thin,
} from "@expo-google-fonts/montserrat";
import "./global.css";
export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_300Light,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return <StatusBar style="auto" />; // or a splash screen
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-4xl">TrackerX</Text>
      <LoginScreen />
    </View>
  );
}
