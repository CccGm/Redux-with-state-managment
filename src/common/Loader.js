import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export const Loader = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: '#09756925',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color={'#009797'} />
      </View>
    </View>
  );
};
