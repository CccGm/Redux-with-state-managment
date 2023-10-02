import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Listview_Data} from './common/Listview_Data';
import {Header} from './common/Header';
import {TextInput} from '@react-native-material/core';
import DATA1 from './database/data1';
import {useSelector} from 'react-redux';
import {Loader} from './common/Loader';

export const List_Show = () => {
  const api_data = useSelector(state => state.get_api_data);

  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState(
    api_data.data.results,
  );
  const [filteredDataSource, setFilteredDataSource] = useState(
    api_data.data.results,
  );

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const handleLoadMore = () => {
    setTimeout(() => {
      let last_data = 1;
      console.log('data called', last_data);
      let data;

      if (last_data == 1) {
        data = masterDataSource.push(...DATA2[0].results);
        last_data = last_data + 1;
      } else if (last_data == 2) {
        data = masterDataSource.push(...DATA3[0].results);
        last_data + 1;
      } else {
        data = masterDataSource.push(...DATA1[0].results);
        last_data = last_data + 1;
      }
      setMasterDataSource(data);
    }, 2000);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#09808071'}}>
      <Header name={'Home'} goback={false} />
      {api_data.loading == true ? (
        <Loader />
      ) : (
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Search"
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 20,
              color: '#8ebd19',
              borderRadius: 20,
            }}
            value={search}
            onChangeText={data => searchFilterFunction(data)}
            borderRadius={50}
            color="#8ebd19"
            fontSize={16}
          />
          {filteredDataSource.length == 0 ? (
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={{fontSize: 28, color: '#5e4dca'}}>
                No Data Found
              </Text>
            </View>
          ) : (
            <FlatList
              data={filteredDataSource}
              renderItem={({item}) => <Listview_Data data={item} />}
              keyExtractor={item => item.id}
              // onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
            />
          )}
        </View>
      )}
    </View>
  );
};
