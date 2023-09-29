import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import DATA from './common/data';
import {Listview_Data} from './common/Listview_Data';
import {Header} from './common/Header';
import {TextInput} from '@react-native-material/core';

export const List_Show = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(DATA[0].results);
  const [masterDataSource, setMasterDataSource] = useState(DATA[0].results);

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

  return (
    <View style={{flex: 1, backgroundColor: '#09808071'}}>
      <Header name={'Home'} goback={false} />
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
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{fontSize: 28, color: '#5e4dca'}}>No Data Found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredDataSource}
          renderItem={({item}) => <Listview_Data data={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
