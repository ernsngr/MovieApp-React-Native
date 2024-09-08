import React, { useEffect } from 'react'
import {
    ActivityIndicator,
    Text,
    FlatList,
    SafeAreaView,
} from 'react-native'
import useFectch from '../../hooks/useFetch/useFetch'
import { useNavigation } from '@react-navigation/native'
import MovieCard from '../MovieCard/MovieCard'

const TopRated = () => {

    const {data, loading, error} = useFectch('https://api.themoviedb.org/3/movie/top_rated?api_key=533d6c01bd864e5904e5a82b81c2f0a2&language=en-US&page=1');

    const navigation = useNavigation()

    if(loading){
       return <ActivityIndicator size='large' />
    }
    if(error){
        return <Text>{error.message}</Text>
    }

    const selectMovie = (idMovie) => {
        navigation.navigate('Details',{idMovie})
    }

    const renderItem = ({item}) => <MovieCard name={item.title} image={item.poster_path} onSelect={() => selectMovie(item.id) } />

    return(
        <SafeAreaView className="items-center justify-center w-full h-[100%]" >
            <FlatList
                className="w-full h-full"
                data={data.results}
                renderItem={renderItem}
                scrollEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default TopRated;