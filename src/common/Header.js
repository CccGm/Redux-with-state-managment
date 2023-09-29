import React from 'react';
import {Text, View} from 'react-native';

export const Header = props => {
  const BACK = props.goback;
  return (
    <View
      style={{
        justifyContent: 'center',
        paddingVertical: 10,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        backgroundColor: '#a3eef090',
      }}>
      <View style={{flexDirection: 'row'}}>
        {BACK == true ? (
          <View
            style={{
              alignItems: 'flex-start',
              marginLeft: '5%',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>Go back</Text>
          </View>
        ) : null}

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: BACK == true ? '70%' : '100%',
            marginHorizontal: BACK == true ? 12 : null,
          }}>
          <Text
            style={{fontSize: 18, fontWeight: '700', color: '#5e4dca'}}
            numberOfLines={1}>
            {props.name}
          </Text>
        </View>
      </View>
    </View>
  );
};
