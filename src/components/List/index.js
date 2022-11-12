import React from 'react';
import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
//import {FlashList, MasonryFlashList} from '@shopify/flash-list';

import styles from './styles';

const List = props => {
  const {data} = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
        numColumns={2}
        estimatedItemSize={200}
      />
    </View>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export {List};
