import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export const Error_found = () => {
  const {error} = useSelector(state => state.actions_reducer);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
        {error.message}
      </Text>
      <Text
        style={{fontSize: 20, color: 'red', fontWeight: 'bold', marginTop: 20}}>
        {error.code}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'blue',
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        Please Restart App
      </Text>
    </View>
  );
};
