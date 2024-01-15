import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5 ">
      <ScrollView>
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            source={{
              uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <View className="flex-row items-center">
              <Text className="font-bold text-xl">Current Location</Text>
              <ChevronDownIcon size={20} color={"#00ccbb"} />
            </View>
          </View>
          <UserIcon size={35} color={"#00ccbb"} />
        </View>
        <View className="flex-row space-x-2  items-center pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 items-center p-3 ">
            <MagnifyingGlassIcon color={"gray"} size={20} />
            <TextInput
              placeholder="Restaurants and Cuisines"
              className="flex-1"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color={"#00ccbb"} />
        </View>
        <Categories />
        {/* featured */}
        <View>
          <FeaturedRow
            title="Offers near you!"
            descr="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Featured"
            descr="Paid placements from our partners"
          />

          {/* test discounts */}
          <FeaturedRow
            title="Testy Discounts"
            descr="Everyone's been enjoying there juicy discounts!"
          />
          {/* offer near you */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
