import React from 'react';
import {View} from 'react-native';

import {Home} from './screens';
import styles from './AppStyles';

const App = props => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export {App};
