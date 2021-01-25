import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';
import TestScreen from './TestScreen';
import {NetworkProvider} from 'react-native-offline';
import {NetworkConsumer} from 'react-native-offline';
import {ReduxNetworkProvider} from 'react-native-offline';
import SingIn from './screens/singin';

const App = () => {
  return (
    <Provider store={store}>
      <ReduxNetworkProvider>
        <NetworkProvider
          pingServerUrl={'http://www.med.com'}
          pingInBackground
          pingInterval={200}>
          <SingIn></SingIn>
        </NetworkProvider>
      </ReduxNetworkProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
