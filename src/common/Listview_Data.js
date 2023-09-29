import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export const Listview_Data = props => {
  const NAME = props.data.name;
  const IMAGE = props.data.thumbnail_url;
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 8,
        marginVertical: 5,
        backgroundColor: '#ffffffcc',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 5}}
          source={{uri: IMAGE}}
        />
        <Text
          numberOfLines={2}
          style={{
            flexWrap: 'wrap-reverse',
            flex: 1,
            marginLeft: 20,
            fontSize: 16,
            color: '#8ebd19',
            fontWeight: '900',
          }}>
          {NAME}
        </Text>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 10,
            color: '#566d1c',
          }}>
          &#62;
        </Text>
      </View>
    </TouchableOpacity>
  );
};
