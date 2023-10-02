import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Listview_Data} from './common/Listview_Data';
import {Header} from './common/Header';
import {TextInput} from '@react-native-material/core';
import DATA1 from './database/data1';
import {useSelector} from 'react-redux';
import {Loader} from './common/Loader';
import {Try_screen} from './Try_screen';

export const List_Show = () => {
  const api_data = useSelector(state => state.get_api_data);

  return (
    <View style={{flex: 1, backgroundColor: '#09808071'}}>
      <Header name={'Home'} goback={false} />
      {api_data.loading == true ? <Loader /> : <Try_screen />}
    </View>
  );
};
