import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Card} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Item, Input, Icon, Button} from 'native-base';

const data = [
  {
    title: "God's Love",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    source: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  },
];

export default function Beacon({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Item rounded style={styles.search}>
        <Icon name="ios-search" />
        <Input placeholder="Search Beacon" />
        <Icon name="ios-arrow-round-forward" />
      </Item>
      <ScrollView style={styles.container}>
        <View style={styles.group}>
          {data.map(data => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('pdf');
                }}>
                <Card style={styles.card}>
                  <View style={styles.details}>
                    <View>
                      <Text style={styles.title}>{data.title}</Text>
                      {/* <Text
                      numberOfLines={3}
                      ellipsizeMode="tail"
                      style={styles.body}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </Text> */}
                    </View>
                    <View style={styles.next}>
                      <Text>20/12/2020</Text>
                      <Icons name="long-arrow-right" size={25} />
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  },
  group: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    width: widthPercentageToDP('93%'),
    borderRadius: 5,
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
    flexDirection: 'row',
  },
  title: {
    fontSize: heightPercentageToDP('2.25%'),
    width: widthPercentageToDP('42%'),
  },
  body: {
    fontSize: heightPercentageToDP('1.525%'),
    // width: widthPercentageToDP('47%'),
    // height: heightPercentageToDP('5%'),
    textAlign: 'justify',
    // flexShrink: 1,
  },
  next: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: widthPercentageToDP('30%'),
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
