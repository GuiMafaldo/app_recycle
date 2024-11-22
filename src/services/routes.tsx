import React, { useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from "../utils/Auth";
import HomeScreen from "../pages/HomePage/HomeScreen";
import AgendarColeta from '../../src/pages/AgendarColeta/AgendarColeta'
import Contact from "../pages/Contato/Contact";
import LoginScreen from "../pages/Login/LoginScreen";
import { RootTabParamList, HomeStackParamList, AgendarColetaStackParamList, ContactStackParamList, CreateStackParamList } from '../types/types';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator<RootTabParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const AgendarColetaStack = createStackNavigator<AgendarColetaStackParamList>();
const ContactStack = createStackNavigator<ContactStackParamList>();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: true,
    headerTintColor: '#fff',
    headerStyle:{
      height: 120,
      backgroundColor: '#006836'
    }, ...stackScreenOptions
  }}
  id={undefined}>
    <HomeStack.Screen name="Home" component={HomeScreen}  />
  </HomeStack.Navigator>
);


const AgendarColetaStackScreen = () => (
  <AgendarColetaStack.Navigator screenOptions={{ headerShown: true,
    headerTintColor: '#fff',
    headerStyle: {
      height: 120,
      backgroundColor: '#006836',
      }, ...stackScreenOptions
  }}
  id={undefined}>
    <AgendarColetaStack.Screen name="Coleta" component={AgendarColeta} options={{ title: 'Agendar Coleta'}} />
  </AgendarColetaStack.Navigator>
);

const ContactStackScreen = () => (
  <ContactStack.Navigator screenOptions={{headerShown: true,
    headerTintColor: '#fff',
    headerStyle: {
      height: 120,
      backgroundColor:'#006836'
      }, ...stackScreenOptions
    }}
    id={undefined}
    >
    <ContactStack.Screen name="Contact" component={Contact} options={{ title: 'Contate-nós' }} />
  </ContactStack.Navigator>
);

const stackScreenOptions = {
  headerTitleAlign: 'center' as const,
  headerTitleStyle: { fontSize: 32, fontWeight: '700' as const },
};

const tabScreenOptions = {
  headerShown: false,
};
type IconName = React.ComponentProps<typeof Ionicons>['name'];

const MainTabNavigator = () => {

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      ...tabScreenOptions,
      tabBarIcon: ({ color, size }) => {
        let iconName: IconName = 'alert-circle';

        if (route.name === 'HomeStack') {
          iconName = 'home';
        } else if (route.name === 'AgendarColetaStack') {
          iconName = 'calendar';
        } else if (route.name === 'ContactStack') {
          iconName = 'chatbubble';
        }

        return   <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    id={undefined}
    >
      <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{ title: 'Home'}} />
      <Tab.Screen name="AgendarColetaStack" component={AgendarColetaStackScreen} />
      <Tab.Screen name="ContactStack" component={ContactStackScreen} options={{ title: 'Contato' }} />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Main' as never);
    }
  }, [isAuthenticated])

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} id={undefined} >
      <AuthStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name='Main' component={MainTabNavigator} />
    </AuthStack.Navigator>
  );
};

export default RootNavigator;