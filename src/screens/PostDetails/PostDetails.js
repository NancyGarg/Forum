import React, {useState, useEffect} from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {callPostApi, callGetApi} from '../../apiManager/ApiManager';
import {FETCH_POSTS, FETCH_COMMENTS} from '../../constants/apiEndPoints';

const PostDetails = ({route, navigation}) => {
  const [post, setpost] = useState({});
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    callGetApi('FETCH_POST', FETCH_POSTS + '/' + route.params.id)
      .then(res => {
        setpost(res);
      })
      .catch(err => {});

    callGetApi('FETCH_COMMENTS', FETCH_COMMENTS)
      .then(res => {
        setcomments(res.slice(0, 10));
      })
      .catch(err => {});
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar animated={true} backgroundColor="#018FB5" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.postcontainer}>
            <Image
              style={styles.image}
              source={require('../../images/img.jpg')}
            />

            <Text style={styles.head}>{post.title}</Text>

            <Text style={styles.head2}>{post.body}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile', {id: post.userId})}>
              <Text style={styles.user}>
                Posted by: {'username@' + post.userId + '.com'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.commentcontainer}>
            <View style={styles.innercontainer}>
              <Text style={styles.commenthead}>Comments-</Text>
            </View>

            {comments.map((comment, cin) => {
              return (
                <View key={cin} style={styles.comment}>
                  <Text style={styles.email}>{comment.email}</Text>
                  <Text style={styles.title}>{comment.name}</Text>
                  <Text style={styles.body}>{comment.body}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
  },
  postcontainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  image: {
    width: 150,
    height: 150,
    marginVertical: 32,
  },
  innercontainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  head: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '600',
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  head2: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.4)',
    fontWeight: '600',
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  user: {
    alignSelf: 'flex-end',
    paddingVertical: 24,
    color: '#018FB5',
    fontSize: 14,
  },
  commentcontainer: {
    //backgroundColor:'yellow'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // backgroundColor:'pink',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  commenthead: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '600',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  body: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.4)',
    fontWeight: '600',
    paddingHorizontal: 8,
  },
  comment: {
    paddingVertical: 8,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  email: {
    color: '#018FB5',
    fontSize: 14,
  },
});

export default PostDetails;
