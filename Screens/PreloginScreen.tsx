import { Pressable, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

function PreloginScreen() {
  return (
    <View className="flex-1 bg-brightYellow w-[100%]">
      <View className="bg-black text-white h-[40%] justify-center items-center">
        <View className="bg-black w-[100%]  h-[100%] justify-center items-center gap-3">
          <Text className="text-white font-semiBold text-5xl">Manage</Text>
          <Text className="text-white font-semiBold  text-5xl">
            Your Finance
          </Text>
          <Text className="text-white font-semiBold text-5xl">Right Now</Text>
        </View>
      </View>
      <View className="bg-black text-white h-[40%] rounded-b-[50%] ">
        <View>
          <View className=" w-40 h-40 rounded-[50%] bg-white items-end justify-end relative  top-[80%] left-[20%] ">
            <View className="h-0 w-0 rotate-90 absolute top-[45%] left-[45%] border-l-[50px] border-r-[50px] border-b-[100px] border-l-transparent border-r-transparent border-b-black border-solid"></View>
            <View className="bg-brightYellow w-[35%] h-[35%] rounded-full top-8"></View>
          </View>

          <View className="w-10 h-10 bg-purple-300 absolute rotate-45 right-8 top-10 "></View>
        </View>
      </View>
      <Pressable
        onPress={() => {
          console.log("pressed");
        }}
        className="bg-yellow-50 h-[30%] rounded-t-[50%]   justify-start  items-center "
      >
        <View className="h-[20%] w-[20%]  bg-black m-10 justify-center items-center rounded-lg transform-gpu  ">
          <MaterialCommunityIcons name="greater-than" size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
}

export default PreloginScreen;
