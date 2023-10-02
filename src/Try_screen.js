import React, {useReducer, useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Listview_Data} from './common/Listview_Data';
import {Text} from 'react-native';

export const Try_screen = () => {
  const api_data = useSelector(state => state.get_api_data);

  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState(
    api_data.data.results,
  );
  const [filteredDataSource, setFilteredDataSource] =
    useState(masterDataSource);
  console.log(masterDataSource, 'data ------');

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
      {filteredDataSource == [] ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderWidth: 1,
            borderColor: 'red',
          }}>
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
