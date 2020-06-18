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
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import saga from './src/saga/rootSaga';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './src/reducer/rootReducer';
import {Root} from 'native-base';

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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['SignUpReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root>
          <SafeAreaProvider>
            <ToastBannerProvider>
              <App />
              <ToastBannerPresenter />
            </ToastBannerProvider>
          </SafeAreaProvider>
        </Root>
      </PersistGate>
    </Provider>
  );
};
