import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SyncScreen from '../../screens/SyncScreen';

const SyncStack = createStackNavigator();

function SyncRoute() {
  return (
    <SyncStack.Navigator>
      <SyncStack.Screen 
        name="Sync" 
        component={SyncScreen} 
        options={{
          headerShown: false,
        }}
      />
    </SyncStack.Navigator>
  );
}

export default SyncRoute;

