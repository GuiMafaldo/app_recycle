import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native'; 

import MainTabNavigator from './routes';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './src/components/Auth';
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';



const Stack = createStackNavigator();

const App =() => {
  const { isAuthenticated } = useAuth();
  return (
      <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={MainTabNavigator} options={{headerShown: false}}/>
              {isAuthenticated ? (
                <Stack.Screen name="Login" component={LoginScreen} />
              ): (    
                
                <Stack.Screen name="Home" component={HomeScreen} />
                
              )}
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  headerLoginPage: {
    backgroundColor: '#006836'
  },
  headerHomePage:{
    backgroundColor: '#f0f0f0'
  }
})
export default App;


