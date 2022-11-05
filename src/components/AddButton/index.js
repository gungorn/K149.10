import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const AddButton = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {margin: props.margin, borderRadius: props.radius},
        props.left && !props.right && {left: 0},
        props.right && {right: 0},
      ]}
      onPress={props.onPress}>
      <Text style={styles.addText}>+</Text>
    </TouchableOpacity>
  );
};

AddButton.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  onPress: PropTypes.func,
  margin: PropTypes.number,
  radius: PropTypes.number,
};

export {AddButton};
