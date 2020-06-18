import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Card} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Item, Input, Icon, Button} from 'native-base';
import useDevotion from './hooks/useDevotion';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const Devotional = () => {
  const [loading, setLoading, getDevotion, devotion] = useDevotion();
  const navigation = useNavigation();
  navigation.addListener('focus', () => {
    getDevotion();
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Item rounded style={styles.search}>
        <Icon name="ios-search" />
        <Input placeholder="Search Devotional" />
        <Icon name="ios-arrow-round-forward" />
      </Item>
      <ScrollView style={styles.container}>
        <View style={styles.group}>
          {devotion.map(data => {
            return (
              <Card style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri: `${data.cover_photo}`}}
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
                      {data.description}
                    </Text>
                  </View>
                  <View style={styles.next}>
                    <Text>{moment(data.created_at).fromNow()}</Text>

                    <Icons name="long-arrow-right" size={25} />
                  </View>
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Devotional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: heightPercentageToDP('20%'),
    width: widthPercentageToDP('40%'),
    // backgroundColor: 'grey',
    padding: 7,
  },
  image: {
    height: heightPercentageToDP('18%'),
    width: widthPercentageToDP('40%'),
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 3,
    backgroundColor: 'grey',
  },
  group: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    width: widthPercentageToDP('93%'),
    borderRadius: 5,
    flexDirection: 'row',
  },
  search: {
    width: widthPercentageToDP('93%'),
    borderRadius: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 4,
    marginTop: 20,
    marginBottom: 7,
  },
  details: {
    marginLeft: 7,
    padding: 7,
    justifyContent: 'space-between',
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
  },
});
