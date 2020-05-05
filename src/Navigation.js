import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeRoute from './routes/HomeRoute';
import ListRoute from './routes/ListRoute';
import SyncRoute from './routes/SyncRoute';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Ionicons,
    name: 'ios-home',
  },
  List: {
    lib: Ionicons,
    name: 'ios-list',
  },
  Sync: {
    lib: Ionicons,
    name: 'ios-sync',
  },
}

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons[route.name]
            return <Icon name={name} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          labelPosition: "below-icon",
          style: {
            backgroundColor: '#fff',
            borderTopColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          },
          activeTintColor: '#00f',
          inactiveTintColor: '#000',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeRoute} 
          options={{
            title: 'Início',
          }}
        />
        <Tab.Screen 
          name="List" 
          component={ListRoute} 
          options={{
            title: 'Lista sincronizada',
          }}
        />
        <Tab.Screen 
          name="Sync" 
          component={SyncRoute} 
          options={{
            title: 'Sincronizar',
            
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;