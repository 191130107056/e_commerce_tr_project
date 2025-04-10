import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from '../screens/Products';
import ProductDetailScreen from '../screens/ProductDetails';
import WishListScreen from '../screens/WishList';
import {NavScreen} from '../constants/constant';
import NoInternetScreen from '../screens/NoInternet';

const Stack = createNativeStackNavigator();

const AppNavigator = ({isConnected}) => {
  const [retryTrigger, setRetryTrigger] = useState(0);

  const handleRetry = () => {
    setRetryTrigger(prevTrigger => prevTrigger + 1);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isConnected ? (
          <Stack.Screen
            name={NavScreen.NoInternet}
            component={NoInternetScreen}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name={NavScreen.ProductsList}
              component={ProductListScreen}
            />
            <Stack.Screen
              name={NavScreen.ProductDetail}
              component={ProductDetailScreen}
            />
            <Stack.Screen
              name={NavScreen.WishList}
              component={WishListScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
