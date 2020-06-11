import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ViewSlider from 'react-native-view-slider';
import {Card} from 'native-base';
import Icons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const Homepage = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const data = [
    {
      pic:
        'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg',
    },
    {
      pic:
        'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg',
    },
    {
      pic:
        'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg',
    },
    {
      pic:
        'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg',
    },
  ];

  const Data = [
    {title: 'Devotional'},
    {title: 'Beacon'},
    {title: 'Media'},
    {title: 'Podcast'},
    {title: 'Events'},
    {title: 'Church Units'},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000"
        translucent={true}
      />
      <ViewSlider
        renderSlides={
          <>
            {data.map(datas => {
              return (
                <View style={styles.viewBox}>
                  <Image
                    source={{
                      uri: datas.pic,
                    }}
                    style={{height: 200, width}}
                  />
                </View>
              );
            })}
          </>
        }
        style={styles.slider} //Main slider container style
        height={200} //Height of your slider
        slideCount={4} //How many views you are adding to slide
        dots={true} // Pagination dots visibility true for visibile
        dotActiveColor="white" //Pagination dot active color
        dotInactiveColor="gray" // Pagination do inactive color
        dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
        autoSlide={false} //The views will slide automatically
        slideInterval={5000} //In Miliseconds
      />
      <ScrollView contentContainerStyle={styles.botcontainer}>
        {Data.map(data => {
          return (
            <TouchableOpacity
              onPress={() => {
                data.title === 'Devotional'
                  ? navigation.navigate('Devotional')
                  : data.title === 'Media'
                  ? navigation.navigate('Media')
                  : data.title === 'Podcast'
                  ? navigation.navigate('Podcast')
                  : data.title === 'Events'
                  ? navigation.navigate('Events')
                  : data.title === 'Church Units'
                  ? navigation.navigate('Units')
                  : data.title === 'Beacon'
                  ? navigation.navigate('Beacon')
                  : '';
              }}>
              <Card style={styles.drawerCards}>
                <Icons
                  name={
                    data.title === 'Media'
                      ? 'ios-play-circle'
                      : data.title === 'Podcast'
                      ? 'ios-headset'
                      : data.title === 'Devotional'
                      ? 'ios-bookmarks'
                      : data.title === 'Offering'
                      ? 'ios-cash'
                      : data.title === 'Church Units'
                      ? 'md-people'
                      : data.title === 'Events'
                      ? 'ios-calendar'
                      : 'ios-people'
                  }
                  size={60}
                />
                <Text style={styles.Label}>{data.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    padding: 10,
    alignItems: 'center',
    height: 200,
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15,
  },
  botcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 23,
    borderBottomColor: 'rgba(255, 255, 255, .25)',
  },
  name: {
    fontFamily: 'GT Walsheim Pro Regular Regular',
    fontSize: 20,
    color: 'white',
    width: widthPercentageToDP('42%'),
  },
  number: {
    fontFamily: 'GT Walsheim Pro Regular Regular',
    fontSize: 12,
    color: 'white',
  },
  Label: {
    color: '#000',
    fontSize: heightPercentageToDP('2.6%'),
    fontFamily: 'GT Walsheim Pro Regular Regular',
  },
  imaged: {
    width: widthPercentageToDP('50%'),
    height: heightPercentageToDP('15.5%'),
    // borderRadius: 100,
    marginRight: 10,
  },
  drawerCards: {
    width: widthPercentageToDP('40%'),
    height: heightPercentageToDP('20%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
});

export default Homepage;
