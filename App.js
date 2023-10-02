import React from 'react';
import {SafeAreaView} from 'react-native';
import {Routs} from './src/routes/Routs';
import {Provider, useDispatch} from 'react-redux';
import {Store} from './src/redux/store';

function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <Routs />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
