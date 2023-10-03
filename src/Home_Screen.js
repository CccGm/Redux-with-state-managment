import React from 'react';
import {View} from 'react-native';
import {Header} from './common/Header';
import {useSelector} from 'react-redux';
import {Loader} from './common/Loader';
import {List_Data} from './common/List_Data';
import {Error_found} from './common/Error_found';

export const Home_Screen = () => {
  const api_data = useSelector(state => state.actions_reducer);
  const data = useSelector(state => state.actions_reducer);

  return data.error == null ? (
    <View style={{flex: 1, backgroundColor: '#09808071'}}>
      <Header name={'Home'} goback={false} />
      {api_data.loading == true ? <Loader /> : <List_Data />}
    </View>
  ) : (
    <Error_found />
  );
};
