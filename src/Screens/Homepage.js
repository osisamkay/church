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
  ImageBackground,
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
import {useSelector} from 'react-redux';
const {width, height} = Dimensions.get('window');

const Homepage = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const {userData, isLogged, playerCalled, signal} = useSelector(
    state => state.LoginReducer,
  );
  const data = [
    {
      pic: 'https://i.ibb.co/LP43vKD/church1.jpg',
    },
    {
      pic: 'https://i.ibb.co/5RC0Fg7/church2.jpg',
    },
    {
      pic: 'https://i.ibb.co/zJnJ7p3/church3.jpg',
    },
    {
      pic: 'https://i.ibb.co/NNVL1pm/church4.jpg',
    },
    {
      pic: 'https://i.ibb.co/FsB2RBJ/church5.jpg',
    },
    {
      pic: 'https://i.ibb.co/MGRFkGT/church6.jpg',
    },
  ];

  useEffect(() => {
    if (signal) {
      navigation.navigate('Notifications');
    }
  }, [navigation, signal]);

  const Data = [
    {title: 'In His Presence'},
    {title: 'Beacon'},
    {title: 'Media'},
    {title: 'Sermons'},
    {title: 'Our Services'},
    {title: 'Church Units'},
    {title: 'Quiz'},
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
                    // source={require(`${datas.pic}`)}
                    style={{height: 200, width}}
                  />
                </View>
              );
            })}
          </>
        }
        style={styles.slider} //Main slider container style
        height={200} //Height of your slider
        slideCount={data.length} //How many views you are adding to slide
        dots={true} // Pagination dots visibility true for visibile
        dotActiveColor="white" //Pagination dot active color
        dotInactiveColor="gray" // Pagination do inactive color
        dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
        autoSlide={true} //The views will slide automatically
        slideInterval={5000} //In Miliseconds
      />
      <ImageBackground
        source={require('../../assets/church5.jpeg')}
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.botcontainer}>
          {Data.map(data => {
            return (
              <TouchableOpacity
                onPress={() => {
                  data.title === 'In His Presence'
                    ? navigation.navigate('Devotional')
                    : data.title === 'Media'
                    ? navigation.navigate('Media')
                    : data.title === 'Sermons'
                    ? navigation.navigate('Podcast')
                    : data.title === 'Our Services'
                    ? navigation.navigate('OurServices')
                    : data.title === 'Church Units'
                    ? navigation.navigate('Units')
                    : data.title === 'Beacon'
                    ? navigation.navigate('Beacon')
                    : data.title === 'Quiz'
                    ? navigation.navigate('Quiz')
                    : '';
                }}>
                <View style={styles.drawerCards}>
                  <Icons
                    name={
                      data.title === 'Media'
                        ? 'ios-play-circle'
                        : data.title === 'Sermons'
                        ? 'ios-headset'
                        : data.title === 'In His Presence'
                        ? 'ios-bookmarks'
                        : data.title === 'Offering'
                        ? 'ios-cash'
                        : data.title === 'Church Units'
                        ? 'md-people'
                        : data.title === 'Our Services'
                        ? 'ios-calendar'
                        : data.title === 'Quiz'
                        ? 'ios-help-circle'
                        : 'ios-people'
                    }
                    size={60}
                  />
                  <Text style={styles.Label}>{data.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </ImageBackground>
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
    backgroundColor: 'rgba(0,0,0,.45)',
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
    backgroundColor: 'rgba(255,255,255,.7)',
    shadowColor: 'rgba(0,0,0,.1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image: {
    flex: 1,

    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export default Homepage;
