import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import useNetworkStatus from './src/hooks/useNetworkStatus';

const App = () => {
  const isConnected = useNetworkStatus();
  return (
    <Provider store={store}>
      <AppNavigator isConnected={isConnected} />
    </Provider>
  );
};

export default App;
