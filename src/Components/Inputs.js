import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default function Inputs({TextInput, placeholders, Value, name}) {
  return (
    <View>
      <Input
        inputContainerStyle={styles.input}
        inputStyle={styles.in}
        placeholder={placeholders}
        leftIcon={<Icon name={name} size={24} color="black" />}
        onChangeText={TextInput}
        value={Value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 23,
    paddingBottom: 0,
  },
  in: {
    fontSize: heightPercentageToDP('2%'),
  },
});
