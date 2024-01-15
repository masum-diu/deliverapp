import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResCard from "./ResCard";

const FeaturedRow = ({ title, descr }) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color={"#00ccbb"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{descr}</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4  bg-gray-100 pt-4 pb-4"
      >
        <ResCard
          imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          title="item 1"
          rating={4.5}
          genre="Japan"
          address="12243 area"
          short_descr="this is a test descr"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResCard
          imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          title="item 1"
          rating={4.5}
          genre="Japan"
          address="12243 area"
          short_descr="this is a test descr"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResCard
          imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          title="item 1"
          rating={4.5}
          genre="Japan"
          address="12243 area"
          short_descr="this is a test descr"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
