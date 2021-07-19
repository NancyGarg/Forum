import React, {useState, useEffect} from 'react';

import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import PostCard from '../../components/PostCard';
import {callGetApi} from '../../apiManager/ApiManager';
import {FETCH_POSTS} from '../../constants/apiEndPoints';

const HomeScreen = ({navigation}) => {
  const [posts, postset] = useState([]);

  useEffect(() => {
    callGetApi('FETCH_POSTS', FETCH_POSTS)
      .then(res => {
        postset(res);
      })
      .catch(err => {});
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar animated={true} backgroundColor="#018FB5" />
      <FlatList
        contentContainerStyle={styles.container}
        data={posts}
        renderItem={item => <PostCard item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    paddingVertical: 16,
  },
});

export default HomeScreen;
