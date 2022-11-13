import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import MasonryList from '@react-native-seoul/masonry-list';
import styles from './styles';

const List = props => {
  const {data} = props;

  return (
    <View style={styles.container}>
      <MasonryList
        data={data}
        keyExtractor={(d, i) => i + ''}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.itemContainer,
                styles.shadow,
                {backgroundColor: item.color},
              ]}>
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export {List};
