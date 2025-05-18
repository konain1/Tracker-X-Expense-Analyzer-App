import { Text, View } from "react-native";

function PreloginScreen() {
  return (
    <View className="flex-1 bg-yellow-300 w-100">
      <View className="bg-black text-white h-[40%] justify-center items-center">
        <View className="bg-black w-[100%]  h-[100%] justify-center items-center gap-3">
          <Text className="text-emerald-700 text-6xl">Manage</Text>
          <Text className="text-emerald-700 text-7xl">Your Finance</Text>
          <Text className="text-emerald-700 text-6xl">Right Now</Text>
        </View>
      </View>
      <View className="bg-black text-white h-[40%] rounded-b-[50%] ">
        <View>
          <View className=" w-40 h-40 rounded-[50%] bg-white items-end justify-end relative  top-[80%] left-[20%] ">
            <View
              className="h-0 w-0 rotate-90 absolute top-[45%] left-[45%]"
              style={{
                borderLeftWidth: 50,
                borderRightWidth: 50,
                borderBottomWidth: 100,
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: "black",
                borderStyle: "solid",
              }}
            ></View>
            <View className="bg-yellow-200 w-[35%] h-[35%] rounded-full top-8"></View>
          </View>
        </View>
      </View>

      <View className="bg-yellow-50 h-[30%] rounded-t-[50%] justify-start  items-center ">
        <View className="h-[20%] w-[20%] bg-black m-10">
          <Text>Arrow</Text>
        </View>
      </View>
    </View>
  );
}

export default PreloginScreen;
