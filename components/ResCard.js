import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const ResCard = ({
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_descr,
    dishes,
    long,
    lat
}) => {
    return (
        <TouchableOpacity className=" bg-white mr-3 shadow" >
            <Image className="h-36 w-64 rounded-sm" source={{ uri: imgUrl }} />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row space-x-1 items-center mt-1">
                    <StarIcon color={"green"} opacity={.5} size={22}/>
                    <Text className="text-xs text-gray-500">
                    <Text className=" text-geen-500">{rating}</Text>. {genre}
                    </Text>
                </View>
                <View className="flex-row space-x-1 items-center mt-1">
                    <MapPinIcon color={"gray"} opacity={.5} size={22}/>
                    <Text className="text-xs text-gray-500">
                    <Text>Nearby -{address}</Text>
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ResCard