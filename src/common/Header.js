import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = props => {
  const BACK = props.goback;
  const navigation = useNavigation();
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
          <TouchableOpacity
            style={{
              alignItems: 'flex-start',
              marginLeft: '5%',
              justifyContent: 'center',
              paddingHorizontal: 5,
            }}
            onPress={() => navigation.goBack()}>
            <Icon name={'caret-back'} size={22} color={'#5e4dca'} />
          </TouchableOpacity>
        ) : null}

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: BACK == true ? '75%' : '100%',
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
