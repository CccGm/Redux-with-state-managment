import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {List_Show} from '../List_Show';
import {Item_Details} from '../common/Item_Details';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {api_call} from '../redux/action/api_call';

export const Routs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(api_call());
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={List_Show}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Deatils"
          component={Item_Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
