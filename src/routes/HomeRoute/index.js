import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import CreateFolderScreen from '../../screens/CreateFolderScreen';
import FolderInsideScreen from '../../screens/FolderInsideScreen';
import EditItemScreen from '../../screens/EditItemScreen';
import AddItemScreen from '../../screens/AddItemScreen';

const HomeStack = createStackNavigator();

function HomeRoute() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#000',
        }
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Pastas',
        }}
      />
      <HomeStack.Screen 
        name="CreateFolder" 
        component={CreateFolderScreen} 
      />
      <HomeStack.Screen 
        name="FolderInside" 
        component={FolderInsideScreen} 
      />
      <HomeStack.Screen 
        name="EditItem" 
        component={EditItemScreen} 
      />
      <HomeStack.Screen 
        name="AddItem" 
        component={AddItemScreen} 
      />
    </HomeStack.Navigator>
  );
}

export default HomeRoute;
