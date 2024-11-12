import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/services/routes';

import { AuthProvider} from './src/utils/Auth';

const App = () => (
  <AuthProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </AuthProvider>
);

export default App;
