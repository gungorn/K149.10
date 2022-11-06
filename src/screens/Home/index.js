import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {AddButton, InputModal, List} from '../../components';

import styles from './styles';

const Home = props => {
  const [inputModalVisible, setInputModalvisible] = useState(false);
  const [list, setList] = useState([]);

  const onClose = d => {
    setInputModalvisible(false);
    const newList = [...list];
    newList.push({
      createDate: new Date().getTime(),
      text: d,
    });
    setList(newList);
  };

  return (
    <View style={styles.container}>
      <List data={list} />

      {inputModalVisible && (
        <InputModal visible={inputModalVisible} onClose={onClose} />
      )}

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
