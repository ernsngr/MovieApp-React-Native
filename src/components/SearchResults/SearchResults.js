import {
    View,
    Text,
    Image,
} from 'react-native';


const SearchResults = ({image, MovieName}) => {

    const imageUrl = 'https://image.tmdb.org/t/p/w500'


    return(
        <View className="w-[95%] h-[100px] bg-[#d0d0d0] items-center justify-start rounded-[15px] flex-row pl-3 pr-3 ">
            <View className="w-[18%] h-[85%] bg-[#242424] rounded-[10px] ">
                <Image
                    source={{uri: imageUrl + image}}
                    style={{width: '95%', height: 100}}
                />
            </View>
            <Text className="ml-8 text-xl font-semibold tracking-[1.4] ">
                {MovieName}
            </Text>
        </View>
    )
}

export default SearchResults;