import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";

import {
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_300Light,
  Montserrat_100Thin,
} from "@expo-google-fonts/montserrat";
import "./global.css";

import PreloginScreen from "./Screens/PreloginScreen";
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
    <View className="flex-1  justify-center items-center">
      <PreloginScreen />
    </View>
  );
}
