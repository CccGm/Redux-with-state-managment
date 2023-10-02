import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Header} from './Header';
import VideoPlayer from 'react-native-video-player';

export const Item_Details = props => {
  const DATA = props.route.params.data;
  return (
    <View style={{flex: 1}}>
      <Header name={DATA.name} goback={true} />
      <View style={{flex: 1, marginHorizontal: 10, marginTop: 8}}>
        {DATA.video_url == null ? (
          <View
            style={{
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#01090743',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 22}}>No Video Source found</Text>
          </View>
        ) : (
          <VideoPlayer
            video={{
              uri: DATA.video_url,
            }}
            showDuration={true}
            thumbnail={{uri: DATA.thumbnail_url}}
            endThumbnail={{uri: DATA.thumbnail_url}}
            pauseOnPress={true}
            style={{borderRadius: 20}}
          />
        )}
        {/* resizeMode="cover","contain","stretch","repeat","center" */}

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
              borderWidth: 1,
            }}>
            <Icon
              name={'like1'}
              size={30}
              color={'#09890770'}
              style={{paddingHorizontal: 12}}
            />
            <Text style={{fontSize: 16, fontWeight: 700}}>
              {DATA.user_ratings.count_positive}
            </Text>
            <Icon
              name={'dislike2'}
              size={30}
              color={'#09890770'}
              style={{paddingHorizontal: 12}}
            />
            <Text style={{fontSize: 14, fontWeight: 500, marginRight: 10}}>
              {DATA.user_ratings.count_negative}
            </Text>
          </View>
          <View
            style={{
              marginRight: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: 800, color: '#000000cc'}}>
              {DATA.credits[0].name}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, paddingHorizontal: 8}}>
          <Text style={{fontSize: 14, fontWeight: 500}}>
            {DATA.description}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#000000bb',
              marginTop: 5,
            }}>
            Intoduction
          </Text>
          <ScrollView
            contentContainerStyle={{
              marginHorizontal: 5,
              padding: 10,
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}>
            {DATA.instructions.map((item, key) => {
              return (
                <View key={item.id} style={{paddingTop: 5}}>
                  <Text style={{fontSize: 12, fontWeight: '500'}}>
                    <Text
                      style={{color: 'black', fontWeight: 700, fontSize: 12}}>
                      {key + 1}.{'  '}
                    </Text>
                    {item.display_text}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
