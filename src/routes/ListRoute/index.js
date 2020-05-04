import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../../screens/ListScreen';
import ItemInfoScreen from '../../screens/ItemInfoScreen';

const ListStack = createStackNavigator();

function HomeRoute() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={ListScreen} />
      <ListStack.Screen name="ItemInfo" component={ItemInfoScreen} />
    </ListStack.Navigator>
  );
}

export default HomeRoute;

