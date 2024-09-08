import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './src/screens/Home';
import Details from './src/screens/Details/index'
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';


const App = () => {


  const Stack = createStackNavigator();

  return (
    <View className="flex-1" >
      <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='Details' component={Details} options={{
          headerBackTitleVisible: false,
          headerBackImage: () => <Ionicons name="chevron-back" size={34} color="black" style={{marginLeft: 10}} />,
          headerTitleStyle:{
            fontSize: 24,
            letterSpacing: 2,
          },
          headerStyle:{
            backgroundColor: "#f5f5f5"
          }
        }}/>
        <Stack.Screen name='Search' component={Search} options={{
          headerBackTitleVisible: false,
          headerBackImage: () => <Ionicons name="chevron-back" size={34} color="black" style={{marginLeft: 10}} />,
          headerTitleStyle:{
            fontSize: 24,
            letterSpacing: 2,
          },
          headerTransparent: true,
        }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;