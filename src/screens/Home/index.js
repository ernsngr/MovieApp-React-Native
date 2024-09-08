import { 
    View,
    Text,
    ScrollView,
} from "react-native";
import TrendMovies from "../../components/TrendMovies/TrendMovies";
import UpComing from '../../components/UpComing/UpComing'
import TopRated from "../../components/TopRated/TopRated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import { StatusBar } from "expo-status-bar";

const Home = ({navigation}) => {

    const handleSearch = () => {
        navigation.navigate('Search')
    }

    return(

        <ScrollView scrollEnabled >


            <View className="w-full h-full items-center justify-center bg-[#f5f5f5] pt-[80] pb-16">

                    <HomeHeader/>

                    <View className="w-[100%] h-[33%]">
                        <Text className="font-semibold text-4xl tracking-[2.4] ml-5 mb-5 ">
                            Populars
                        </Text>
                        <TrendMovies /> 
                    </View>
                    <View className="w-[100%] h-[33%]">
                        <Text className="font-semibold text-4xl tracking-[2.4] ml-5 mb-5 mt-5 ">
                            Top Rateds
                        </Text>
                        <TopRated /> 
                    </View>
                    <View className="w-[100%] h-[33%]">
                        <Text className="font-semibold text-4xl tracking-[2.4] ml-5 mb-5 mt-5 ">
                            Up Coming
                        </Text>
                        <UpComing /> 
                    </View>
                    
                    
                    <View className="w-full h-[30px] pb-2 items-center justify-center ">
                        <Text className="text-sm text-[#454545] tracking-[1.6] " >
                            © 2024 MovieApp. Tüm hakları saklıdır.
                        </Text>
                    </View>
            </View>
        </ScrollView>


    )
};

export default Home;