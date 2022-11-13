import React, {useEffect} from 'react';
import {View} from 'react-native';

import {connect} from 'react-redux';

import {setList, setInputModalVisible} from '../../redux/actions/app';

import {AddButton, InputModal, List} from '../../components';

import * as mmkv from '../../utils/mmkv';

import styles from './styles';

const mapStateToProps = state => {
  return {app: state.app};
};
const mapDispatchToProps = dispatch => {
  return {dispatch};
};

// const Homefunc = connect(mapStateToProps, mapDispatchToProps);
// const Home = Homefunc(component);

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app} = props;
  const {list} = app;

  useEffect(() => {
    const listStr = mmkv.getItem('@list');

    if (listStr) {
      props.dispatch(setList(JSON.parse(listStr)));
    }
    return () => null;
  }, []);

  const onClose = d => {
    props.dispatch(setInputModalVisible(false));

    if ((d.text || '').trim().length > 0) {
      const newList = [
        ...list,
        {
          ...d,
          createDate: new Date().getTime(),
        },
      ];
      props.dispatch(setList(newList));

      mmkv.setItem('@list', JSON.stringify(newList));
    }
  };

  return (
    <View style={styles.container}>
      <List data={list} />
      <InputModal visible={props.app.inputModalVisible} onClose={onClose} />
      <AddButton
        right
        radius={48}
        margin={0}
        onPress={() => props.dispatch(setInputModalVisible(true))}
      />
    </View>
  );
});

export {Home};
