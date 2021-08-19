/**
 * RNSampleApp
 */

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';

type TabParams = {
  Home: undefined;
  Product: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

const App: React.FC = () => {
  /* Get Icon Name depending on route name & status */
  const getIcon = (routeName: 'Home' | 'Product' | 'Profile'): string => {
    switch (routeName) {
      case 'Home':
        return 'home';
      case 'Product':
        return 'list';
      case 'Profile':
        return 'body';
      default:
        return 'home';
    }
  };

  return (
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              /* Display icon depending on focused state & getIcon function */
              return (
                <Ionicons
                  name={
                    focused
                      ? getIcon(route.name)
                      : `${getIcon(route.name)}-outline`
                  }
                  size={size}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Product" component={ProductScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
