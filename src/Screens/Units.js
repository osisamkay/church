import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Card} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Item, Input, Icon, Button} from 'native-base';
import {churchData} from '../Components/churchUnitData';

export default function Units({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.group}>
          {churchData.map(data => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('unitDetails', {
                    detail: data.desc,
                    title: data.title,
                  });
                }}>
                <Card style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('../../assets/churchLogo.png')}
                      style={styles.image}
                      resizeMode="stretch"
                    />
                  </View>
                  <View style={styles.details}>
                    <View>
                      <Text style={styles.title}>{data.title}</Text>
                      {/* <Text
                      //   numberOfLines={3}
                      //   ellipsizeMode="tail"
                      style={styles.body}>
                      {data.desc}
                    </Text> */}
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
    height: heightPercentageToDP('8%'),
    width: widthPercentageToDP('18%'),
    // backgroundColor: 'grey',
    padding: 7,
  },
  image: {
    height: heightPercentageToDP('6%'),
    width: widthPercentageToDP('18%'),
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
  },
  next: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
