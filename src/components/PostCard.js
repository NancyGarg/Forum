/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const PostCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Post', {id: item.item.id});
      }}
      style={styles.Container}>
      <View style={styles.postContainer}>
        <Image style={styles.image} source={require('../images/img.jpg')} />
        <View style={{width: '70%'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.item.title}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile', {id: item.item.userId});
            }}>
            <Text style={styles.user}>
              Posted by: {'username@' + item.item.userId + '.com'}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.desc}>{item.item.body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',

    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 4,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  postContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
  },
  image: {
    width: 100,
    height: 100,
  },
  user: {
    paddingTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: '#384089',
    textDecorationLine: 'underline',
  },
  titleContainer: {
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    paddingBottom: 8,
    width: '100%',
  },
  desc: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
});

export default PostCard;
