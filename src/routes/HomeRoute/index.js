import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import CreateFolderScreen from '../../screens/CreateFolderScreen';
import FolderInsideScreen from '../../screens/FolderInsideScreen';
import EditItemScreen from '../../screens/EditItemScreen';
import AddItemScreen from '../../screens/AddItemScreen';
import EditFolderScreen from '../../screens/EditFolderScreen';
import AddPartScreen from '../../screens/AddPartScreen';
import PartInsideScreen from '../../screens/PartInsideScreen';
import EditPartScreen from '../../screens/EditPartScreen';

const HomeStack = createStackNavigator();

function HomeRoute() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}
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
      <HomeStack.Screen 
        name="EditFolder" 
        component={EditFolderScreen} 
      />
      <HomeStack.Screen 
        name="AddPart" 
        component={AddPartScreen} 
      />
      <HomeStack.Screen 
        name="PartInside" 
        component={PartInsideScreen} 
      />
      <HomeStack.Screen 
        name="EditPart" 
        component={EditPartScreen} 
      />
    </HomeStack.Navigator>
  );
}

export default HomeRoute;

