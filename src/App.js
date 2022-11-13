import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import {Home} from './screens';
import styles from './AppStyles';

import store from './redux';

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <View style={styles.container}>
          <Home />
        </View>
      </PersistGate>
    </Provider>
  );
};

export {App};
