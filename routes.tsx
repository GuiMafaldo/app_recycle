import { Ionicons } from "@expo/vector-icons";
import AgendarColeta from "./AgendarColeta";
import { useAuth } from "./Auth";
import Contact from "./Contact";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Tab.Navigator screenOptions={{headerShown: true}}>
      {!isAuthenticated ? (
        <>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              title: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
              headerTitleAlign:'center',
              headerTitleStyle:{fontSize:32, fontWeight: '700'}
            }}
          />
          <Tab.Screen 
            name="AgendarColeta" 
            component={AgendarColeta}
            options={{ 
              title: 'Agendar Coleta',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" size={size} color={color} />
              ),
              headerTitleAlign:'center',
              headerTitleStyle:{fontSize:32, fontWeight: '700'}
            }}
          />
          <Tab.Screen 
            name="Contact" 
            component={Contact}
            options={{ 
              title: 'Contato',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubble" size={size} color={color} />
              ),
              headerTitleAlign:'center',
              headerTitleStyle:{fontSize:32, fontWeight: '700'}
            }}
          />
        </>
      ) : ('')}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;