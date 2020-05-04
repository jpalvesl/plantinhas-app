import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SyncScreen from '../../screens/SyncScreen';

const SyncStack = createStackNavigator();

function HomeRoute() {
  return (
    <SyncStack.Navigator>
      <SyncStack.Screen name="Sync" component={SyncScreen} />
    </SyncStack.Navigator>
  );
}

export default HomeRoute;
