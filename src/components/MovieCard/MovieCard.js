import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableWithoutFeedback
} from 'react-native'

const MovieCard = ({name, image, onSelect}) => {

    const imageUrl = 'https://image.tmdb.org/t/p/w500'

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View 
                style={{
                    shadowColor: "#000000",
                    shadowOffset: {
                    width: 0,
                    height: 18,
                    },
                    shadowOpacity:  0.7,
                    shadowRadius: 10.00,
                    elevation: 15
                }} 
                className="w-[220px] h-[310px] bg-[#d0d0d0] rounded-2xl overflow-hidden items-center justify-center ml-3 mr-3 ">
                <ImageBackground source={{uri: imageUrl + image}} style={{width:220, height:310}} >
                    <Text style={{
                        textShadowColor: 'rgba(0, 0, 0, 0.9)',
                        textShadowOffset: {width: 0, height: 0},
                        textShadowRadius: 12}} 
                        className="text-lg text-[#f5f5f5] font-bold absolute bottom-5 ml-3 shadow-black"
                    >
                        {name}
                    </Text>
                    
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MovieCard;