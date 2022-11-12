import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {AddButton, InputModal, List} from '../../components';

import * as mmkv from '../../utils/mmkv';

import styles from './styles';

const Home = props => {
  const [inputModalVisible, setInputModalvisible] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const listStr = mmkv.getItem('@list');

    if (listStr) {
      setList(JSON.parse(listStr));
    }
    return () => null;
  }, []);

  const onClose = d => {
    setInputModalvisible(false);

    if ((d.text || '').trim().length > 0) {
      const newList = [
        ...list,
        {
          ...d,
          createDate: new Date().getTime(),
        },
      ];
      setList(newList);

      mmkv.setItem('@list', JSON.stringify(newList));
    }
  };

  return (
    <View style={styles.container}>
      <List data={list} />

      {inputModalVisible && (
        <InputModal visible={inputModalVisible} onClose={onClose} />
      )}

      <AddButton
        right
        radius={48}
        margin={0}
        onPress={() => setInputModalvisible(true)}
      />
    </View>
  );
};

export {Home};
