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

export default function UnitDetails({route}) {
  const {detail, title} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View>
        <Image
          source={require('../../assets/church1.jpeg')}
          //   resizeMode="contain"
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.group}>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{detail}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: heightPercentageToDP('25%'),
    width: widthPercentageToDP('100%'),
    alignSelf: 'center',
    backgroundColor: 'black',
    resizeMode: 'stretch',
    marginBottom: 20,
  },
  imageContainer: {
    height: heightPercentageToDP('25%'),
    // width: widthPercentageToDP('100%'),
    // alignSelf: 'center',
    backgroundColor: 'black',
  },
  group: {
    // alignItems: 'center',
    // paddingVertical: 20,
  },
  bodyContainer: {paddingHorizontal: 15},
  title: {
    color: 'grey',
    fontSize: heightPercentageToDP('2.5%'),
    textAlign: 'center',
  },
  body: {
    color: 'grey',
    fontSize: heightPercentageToDP('1.75%'),
    textAlign: 'justify',
    lineHeight: 20,
    marginBottom: 10,
  },
  bold: {
    // fontWeight: 'bold',
    color: 'rgba(255,255,255,0.75)',
  },
});
