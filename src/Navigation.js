import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeRoute from './routes/HomeRoute';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeRoute} />
        <Tab.Screen name="List" component={HomeRoute} />
        <Tab.Screen name="Sync" component={HomeRoute} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;