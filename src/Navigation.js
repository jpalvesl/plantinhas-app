import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeRoute from './routes/HomeRoute';
import ListRoute from './routes/ListRoute';
import SyncRoute from './routes/SyncRoute';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeRoute} />
        <Tab.Screen name="List" component={ListRoute} />
        <Tab.Screen name="Sync" component={SyncRoute} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;