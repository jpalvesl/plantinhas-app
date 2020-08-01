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

const HomeStack = createStackNavigator();

function HomeRoute() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
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
        options={{
          title: 'Adicionar nova pasta',
        }} 
      />
      <HomeStack.Screen 
        name="FolderInside" 
        component={FolderInsideScreen} 
        options={{
          title: 'Parcelas',
        }}
      />
      <HomeStack.Screen 
        name="EditItem" 
        component={EditItemScreen} 
        options={{
          title: 'Editar planta',
        }}
      />
      <HomeStack.Screen 
        name="AddItem" 
        component={AddItemScreen} 
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen 
        name="EditFolder" 
        component={EditFolderScreen} 
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen 
        name="AddPart" 
        component={AddPartScreen} 
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen 
        name="PartInside" 
        component={PartInsideScreen} 
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeRoute;

