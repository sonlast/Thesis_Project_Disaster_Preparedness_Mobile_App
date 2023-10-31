import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import Categories from './app/screens/Categories';
import Storm from './app/screens/categories/Storm';
import Typhoon from './app/screens/categories/Typhoon';
import Earthquake from './app/screens/categories/Earthquake';
import Flood from './app/screens/categories/Flood';
import Drought from './app/screens/categories/Drought';
import VolcanicEruption from './app/screens/categories/Volcanic Eruption';
import Landslide from './app/screens/categories/Landslide';
import Tsunami from './app/screens/categories/Tsunami';
import Wildfires from './app/screens/categories/Wildfires';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown:false}} /> 
        <Stack.Screen name="Categories" component={Categories} options={{ headerShown:false}} />
        <Stack.Screen name="Storm" component={Storm} options={{ headerShown:false}} />
        <Stack.Screen name="Typhoon" component={Typhoon} options={{ headerShown:false}} />
        <Stack.Screen name="Earthquake" component={Earthquake} options={{ headerShown:false}} />
        <Stack.Screen name="Flood" component={Flood} options={{ headerShown:false}} />  
        <Stack.Screen name="Drought" component={Drought} options={{ headerShown:false}} />
        <Stack.Screen name="Volcanic Eruption" component={VolcanicEruption} options={{ headerShown:false}} />
        <Stack.Screen name="Landslide" component={Landslide} options={{ headerShown:false}} />
        <Stack.Screen name="Tsunami" component={Tsunami} options={{ headerShown:false}} />
        <Stack.Screen name="Wildfires" component={Wildfires} options={{ headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textt: {
    color: '#fff',
  },
});

export default App;

// fix categories & image backgrounds for category pickers