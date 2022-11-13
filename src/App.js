import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import {Home} from './screens';
import styles from './AppStyles';

import store from './redux';

const App = props => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
};

export {App};
