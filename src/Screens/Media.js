import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Card, CardItem, Body, Footer} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Header, Item, Input, Icon, Button} from 'native-base';
import YouTube from 'react-native-youtube';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';

const data = [
  {
    title: "God's Love",
    id: 'PNKCMlCyspk',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    title: "God's Love",
    id: 'glZLuHVqcOk',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

const Devotional = ({navigation}) => {
  // const [id, setId] = useState(' ');

  const Onclick = id => {
    YouTubeStandaloneAndroid.playVideo({
      apiKey: 'AIzaSyAM6yfUOmPL2D09Pubk3UYVB1Eruz3Bb5Q',
      videoId: id, // YouTube video ID
      autoplay: true, // Autoplay the video
      startTime: 120, // Starting point of video (in seconds)
    })
      .then(() => console.log('Standalone Player Exited'))
      .catch(errorMessage => console.error(errorMessage));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.group}>
          {data.map(data => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  Onclick(data.id);
                }}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require('../../assets/Joshua-1-9.jpg')}
                    style={styles.image}
                    resizeMode="stretch"
                  />
                </View>
                <View style={styles.details}>
                  <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text
                      numberOfLines={3}
                      ellipsizeMode="tail"
                      style={styles.body}>
                      Luke 10:27-37
                    </Text>
                  </View>
                  <View style={styles.next}>
                    <Iconss name="star-circle" size={40} />
                    <Icons
                      name="play-circle"
                      size={40}
                      onPress={() => {
                        Onclick(data.id);
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <Card style={styles.search}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search Media" />
          <Icon name="ios-arrow-round-forward" />
        </Item>
      </Card>
    </SafeAreaView>
  );
};

export default Devotional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // imageContainer: {
  //   height: heightPercentageToDP('20%'),
  //   width: widthPercentageToDP('40%'),
  //   // backgroundColor: 'grey',
  //   padding: 7,
  // },
  image: {
    height: heightPercentageToDP('25%'),
    width: widthPercentageToDP('85%'),
    alignSelf: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 3,
    position: 'relative',
    top: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  group: {
    alignItems: 'center',
    // paddingVertical: 20,
  },
  card: {
    width: widthPercentageToDP('93%'),
    borderRadius: 5,
    // flexDirection: 'row',
  },
  search: {
    width: widthPercentageToDP('100%'),
    borderRadius: 5,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  details: {
    height: heightPercentageToDP('13%'),
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 7,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: widthPercentageToDP('88%'),
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
  },
  title: {
    fontSize: heightPercentageToDP('2.25%'),
    width: widthPercentageToDP('42%'),
  },
  body: {
    fontSize: heightPercentageToDP('1.525%'),
    width: widthPercentageToDP('47%'),
    // height: heightPercentageToDP('5%'),
    textAlign: 'justify',
    // flexShrink: 1,
  },
  next: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: widthPercentageToDP('23%'),
  },
});
