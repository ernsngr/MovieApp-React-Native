import { View, Text, Image, ScrollView } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";

const Details = ({route}) => {

    const {idMovie} = route.params;
    const {data, loading, error} = useFetch(`https://api.themoviedb.org/3/movie/${idMovie}?language=en-US&api_key=533d6c01bd864e5904e5a82b81c2f0a2`)
    const imageUrl = 'https://image.tmdb.org/t/p/w500'


    return(
        <ScrollView className="bg-[#fafafa]" scrollEnabled showsVerticalScrollIndicator={false} >

            <View className="flex-1 items-center justify-center  bg-[#fafafa] " >
                <View className="w-[270] h-[370] items-center justify-center bg-[#454545] mt-6 rounded-[24px] ">
                    <Image
                        source={{uri: imageUrl + data.poster_path}}
                        className="w-[250] h-[350] object-contain rounded-[18px] bg-[#454545] "
                    />
                </View>
                <View className="w-full h-auto items-center p-8 mt-5 mb-10 ">
                    <Text className="m-2 font-bold text-2xl tracking-[2px] text-center text-[#454545] w-[100%] ">{data.title}</Text>
                    <Text className="m-2 font-semibold text-xl text-left text-[#454545] ">{data.tagline}</Text>
                    <Text className="text-lg m-2 text-justify text-[#454545]">About The Movie: {data.overview}</Text>
                    <View className="flex-row w-[55%] items-center justify-around ">
                        <Text className="text-xl text-[#454545]" >Popularity:</Text>
                        <Text className="text-xl text-[#C7253E] text-semibold">{Math.round(data.popularity)}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Details;