import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchResults from '../../components/SearchResults/SearchResults';
import useFectch from '../../hooks/useFetch/useFetch'
import { FlatList } from 'react-native-gesture-handler';

const Search = () => {

    const [search, setSearch] = useState('');
    const {data, loading, error} = useFectch(`https://api.themoviedb.org/3/search/movie?query=god&include_adult=false&language=en-US&page=1&api_key=533d6c01bd864e5904e5a82b81c2f0a2`)

    const renderItem = ({item}) => <SearchResults MovieName={item.name}  />

    return(
        <View className="w-full h-full items-center absolute top-[100px]">
            <View className="flex-row">
                <TextInput
                    value={search}
                    onChangeText={text => setSearch(text)}
                    placeholder='What do you want to watch'
                    className="w-[80%] h-[48] bg-[#d0d0d0] rounded-l-[20px] pl-5 pb-1.5 pr-3 text-left text-lg shadow-xl tracking-[1.4px] "
                />
                <View className="w-[15%] h-[48] bg-[#d0d0d0] rounded-r-[20px] items-center justify-center ">
                    <Ionicons name="search" size={25} color="black" />
                </View>
            </View>
            <View className="w-full h-[80%] items-center justify-center ">
                <ScrollView style={{width: '100%', height: '100%', paddingTop: 20}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    <FlatList
                        data={data.results}
                        renderItem={renderItem}
                        keyExtractor={(index) => index}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default Search;