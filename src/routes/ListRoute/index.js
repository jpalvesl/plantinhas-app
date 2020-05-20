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
        headerShown: false,
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
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#00f',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#000'
      },
    }}>
      <Tab.Screen 
        name="All" 
        component={ListInside} 
        options={{
          title: 'Todas'
        }}
      />
      <Tab.Screen 
        name="Cities" 
        component={ListInside} 
        options={{
          title: 'Cidades'
        }}
      />
      <Tab.Screen 
        name="Parts" 
        component={ListInside} 
        options={{
          title: 'Partes'
        }}
      />
    </Tab.Navigator>
  );
}

export default ListRoute;

