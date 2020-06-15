import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SettingsInfoData} from '../Components/SettingsInfoData';
import Inputs from '../Components/Inputs';
import {ScrollView} from 'react-native-gesture-handler';

import {Button} from 'react-native-elements';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default function EditPassWord({close}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Inputs placeholders="Password" name="lock" right />

      <Button
        title="Save Profile"
        raised
        type="clear"
        buttonStyle={styles.Button}
        titleStyle={{color: '#fff'}}
        onPress={close}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#000',
    height: heightPercentageToDP('8%'),
    marginHorizontal: 23,
    marginBottom: 10,
  },
});
