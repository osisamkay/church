import * as React from 'react';
import {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import CustomDrawerContent from './CustomDrawerContent';
import Main from './Routes/MainRoute';
import {NavigationContainer} from '@react-navigation/native';
import {
  ToastBannerProvider,
  ToastBannerPresenter,
  useToastBannerToggler /* or withToastBannerToggler */,
  Transition,
} from 'react-native-toast-banner';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: 'rgba(0,0,0,.45)',
          width: widthPercentageToDP('80%'),
        }}
        drawerPosition="right"
        drawerContent={props => <CustomDrawerContent {...props} />}
        statusBarAnimation="fade">
        <Drawer.Screen
          name="HomePages"
          component={Main}
          options={{drawerLabel: 'Home Page', headerTitle: 'Dashboard'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <SafeAreaProvider>
      <ToastBannerProvider>
        <App />
        <ToastBannerPresenter />
      </ToastBannerProvider>
    </SafeAreaProvider>
  );
};
