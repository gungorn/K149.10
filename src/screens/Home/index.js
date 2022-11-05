import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {AddButton, InputModal} from '../../components';

import styles from './styles';

const Home = props => {
  const [inputModalVisible, setInputModalvisible] = useState(false);

  return (
    <View style={styles.container}>
      <InputModal
        visible={inputModalVisible}
        onClose={d => {
          setInputModalvisible(false);
          alert(d);
        }}
      />
      <AddButton
        right
        radius={24}
        margin={24}
        onPress={() => setInputModalvisible(true)}
      />
    </View>
  );
};

export {Home};
