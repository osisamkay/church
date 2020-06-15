import React, {useRef, useState} from 'react';
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
import {Avatar, CheckBox, Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Inputs from '../Components/Inputs';
import EditInfo from './EditInfo';
import EditPassWord from './EditPassword';

export default function Settings() {
  const [not, setNot] = useState(false);
  const [view, setView] = useState(false);
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View>
        <Avatar
          size={120}
          rounded
          icon={{name: 'user', type: 'font-awesome', color: 'black'}}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={styles.Avatar}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.group}>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>Change Info</Text>
            <TouchableOpacity
              onPress={() => {
                setView(false);
                refRBSheet.current.open();
              }}>
              <Icon name="edit" color="#fff" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>Change Password</Text>
            <TouchableOpacity
              onPress={() => {
                setView(true);
                refRBSheet.current.open();
              }}>
              <Icon name="edit" color="#fff" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>Notification</Text>
            <CheckBox
              checked={not}
              iconRight
              containerStyle={styles.check}
              checkedColor="#fff"
              onPress={() => {
                setNot(!not);
              }}
            />
          </View>
        </View>
        <Text style={styles.titleb}>Suspend or delete account</Text>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={heightPercentageToDP('50%')}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        {!view && <EditInfo close={() => refRBSheet.current.close()} />}
        {view && <EditPassWord close={() => refRBSheet.current.close()} />}
      </RBSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    height: heightPercentageToDP('25%'),
    width: widthPercentageToDP('100%'),
    alignSelf: 'center',
    backgroundColor: 'black',
    resizeMode: 'contain',
  },
  imageContainer: {
    height: heightPercentageToDP('25%'),
    // width: widthPercentageToDP('100%'),
    // alignSelf: 'center',
    backgroundColor: 'black',
  },
  group: {
    // alignItems: 'center',
    paddingVertical: 25,
  },
  Avatar: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: heightPercentageToDP('2.5%'),
  },
  titleb: {
    color: '#fff',
    fontSize: heightPercentageToDP('2.5%'),
    textAlign: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    width: widthPercentageToDP('60%'),
    alignSelf: 'center',
  },
  titletxt: {
    color: 'grey',
    fontSize: heightPercentageToDP('2.5%'),
    width: widthPercentageToDP('60%'),
    textAlign: 'right',
  },
  bodyContainer: {
    // marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#fff',
    height: heightPercentageToDP('8%'),
    marginHorizontal: 23,
    marginBottom: 10,
  },
  check: {
    padding: 0,
    margin: 0,
    position: 'relative',
    left: widthPercentageToDP('2.5%'),
  },
});
