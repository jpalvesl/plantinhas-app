import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListScreen from '../../screens/ListScreen';
import ItemInfoScreen from '../../screens/ItemInfoScreen';

const Stack = createStackNavigator();

function ListInside() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000'
        }
      }}
    >
      <Stack.Screen 
        name="List" 
        component={ListScreen} 
        options={{
          title: 'Plantas sincronizadas',
        }}
      />
      <Stack.Screen 
        name="ItemInfo" 
        component={ItemInfoScreen} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

function ListRoute() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={ListInside} />
      <Tab.Screen name="Cities" component={ListInside} />
      <Tab.Screen name="Parts" component={ListInside} />
    </Tab.Navigator>
  );
}

export default ListRoute;

