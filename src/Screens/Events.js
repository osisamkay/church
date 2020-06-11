import React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import EventCalendar from 'react-native-events-calendar';
import {
  ToastBannerProvider,
  ToastBannerPresenter,
  useToastBannerToggler /* or withToastBannerToggler */,
  Transition,
} from 'react-native-toast-banner';
import {heightPercentageToDP} from 'react-native-responsive-screen';

let {width} = Dimensions.get('window');

const Events = () => {
  const {showBanner, hideBanner} = useToastBannerToggler();
  const events = [
    {
      start: '2017-09-06 22:30:00',
      end: '2017-09-06 23:30:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 00:30:00',
      end: '2017-09-07 01:30:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 01:30:00',
      end: '2017-09-07 02:20:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 04:10:00',
      end: '2017-09-07 04:40:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 01:05:00',
      end: '2017-09-07 01:45:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 14:30:00',
      end: '2017-09-07 16:30:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-08 01:20:00',
      end: '2017-09-08 02:20:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-08 04:10:00',
      end: '2017-09-08 04:40:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-08 00:45:00',
      end: '2017-09-08 01:45:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
  ];

  function _eventTapped(event) {
    // alert(JSON.stringify(event));
    let title = JSON.parse(JSON.stringify(event));

    showBanner({
      contentView: (
        <View style={{padding: 40}}>
          <Text style={styles.info}>Title: {title.title}</Text>
          <Text style={styles.info}>Summary: {title.summary}</Text>
          <Text style={styles.info}>Start: {title.start}</Text>
          <Text style={styles.info}>End: {title.end}</Text>
        </View>
      ),
      backgroundColor: '#787878' /* default: undefined */,
      duration: 3000 /* default: 3000 */,
      transitions: [
        Transition.Move,
        Transition.MoveLinear,
        Transition.FadeInOut,
      ],
      disableHideOnPress: true,
    });
  }
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <EventCalendar
        eventTapped={_eventTapped}
        events={events}
        width={width}
        numberOfDay={60}
        initDate={'2017-09-07'}
        scrollToFirst
      />
    </View>
  );
};
export default Events;

const styles = StyleSheet.create({
  info: {
    color: '#fff',
    fontSize: heightPercentageToDP('2.25%'),
    paddingTop: 10,
  },
});
