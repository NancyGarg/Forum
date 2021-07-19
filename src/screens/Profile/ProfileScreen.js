import {createNavigatorFactory} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {callPostApi, callGetApi} from '../../apiManager/ApiManager';
import {FETCH_USER} from '../../constants/apiEndPoints';

const ProfileScreen = ({route, navigation}) => {
  const [userprofile, setuserprofile] = useState({});

  useEffect(() => {
    callGetApi('FETCH_USER', FETCH_USER + '/' + route.params.id)
      .then(res => {
        let obj = {
          name: res.name,
          email: res.email,
          username: res.username,
          addr: res.address.street + ',' + res.address.city,
          phone: res.phone,
          website: res.website,
          company: res.company.name,
        };
        setuserprofile(obj);
      })
      .catch(err => {});
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar animated={true} backgroundColor="#018FB5" />
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../images/user.png')} />
        <View style={styles.row}>
          <Text style={styles.title}>Username</Text>
          <Text style={styles.value}>
            {userprofile.username ? userprofile.username : '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Full Name</Text>
          <Text style={styles.value}>
            {userprofile.name ? userprofile.name : '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.value}>
            {userprofile.email ? userprofile.email : '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Address</Text>
          <Text style={styles.value}>
            {userprofile.addr ? userprofile.addr : '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Phone Number</Text>
          <Text style={styles.value}>
            {userprofile.phone ? userprofile.phone : '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Website</Text>
          <Text style={styles.value}>
            {userprofile.website ? userprofile.website : '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Company</Text>
          <Text style={styles.value}>
            {userprofile.company ? userprofile.company : '--'}
          </Text>
        </View>
      </View>
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

  image: {
    width: 150,
    height: 150,
    marginVertical: 32,
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
  title: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '600',
    width: '40%',
  },
  value: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.4)',
    fontWeight: '600',
    width: '60%',
  },
});

export default ProfileScreen;
