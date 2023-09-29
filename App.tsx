import React from 'react';
import {SafeAreaView} from 'react-native';
import {List_Show} from './src/List_Show';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <List_Show />
    </SafeAreaView>
  );
}

export default App;
