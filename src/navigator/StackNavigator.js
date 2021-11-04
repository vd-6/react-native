import React, {useRef, useEffect, forwardRef, useImperativeHandle} from 'react';

import {CardStyleInterpolators} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const StackNavigator = forwardRef((props, ref) => {
  const navigationRef = useRef();
  // useReduxDevToolsExtension(navigationRef);

  useImperativeHandle(ref, () => ({
    navigate: navigationRef.current.navigate,
  }));
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => console.log(navigationRef.current.getCurrentRoute().name)}
      onStateChange={() =>
        console.log(`Screen :: `, navigationRef.current.getCurrentRoute().name)
      }>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default StackNavigator;
