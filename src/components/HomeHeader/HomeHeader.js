import { 
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {

    const navigation = useNavigation();

    const handleSettings = () => {

    }
    const handleSearch = () => {
        navigation.navigate('Search')

    }

    return(
        <View className="w-full h-[50] flex-row items-center justify-between pl-5 pr-5 mb-3">
            <TouchableOpacity onPress={handleSettings}>
                <Text>
                    <Ionicons name="settings-sharp" size={30} color="black" />
                </Text>
            </TouchableOpacity>
            <View className="flex-row">
                <Text className="text-3xl font-bold tracking-[4] text-[#CD5C08]">
                    M
                </Text>
                <Text className="text-3xl font-bold tracking-[4] text-[]">
                   ovie 
                </Text>
            </View>
            <TouchableOpacity onPress={handleSearch}>
                <Text>
                    <Ionicons name="search" size={30} color="black" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader;