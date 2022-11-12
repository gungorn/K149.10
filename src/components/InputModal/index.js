import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const colors = [
  '#f75c5c',
  '#4287f5',
  '#6edbb1',
  '#9ddb6e',
  '#dee64c',
  '#c558d1',
  '#d98b4c',
  '#1ea8ba',
];

const InputModal = props => {
  const [value, setValue] = useState('');
  const [selectedColor, setSelectedColor] = useState(
    Math.floor(Math.random() * colors.length),
  );

  return (
    <Modal
      statusBarTranslucent
      animationType="fade"
      transparent
      visible={props.visible}>
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPress={() => props.onClose(value)}>
        <View style={[styles.modalView, {shadowColor: colors[selectedColor]}]}>
          <TextInput
            style={styles.input}
            multiline
            returnKeyType="done"
            blurOnSubmit
            autoFocus
            value={value}
            onChangeText={setValue}
            //onBlur={() => props.onClose()}
          />

          <View style={styles.colorsContainer}>
            {colors.map((d, i) => (
              <TouchableOpacity
                key={d}
                style={[styles.color, {backgroundColor: d}]}
                onPress={() => setSelectedColor(i)}>
                {i === selectedColor && <View style={styles.colorSelected} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.modalButtonView}
          onPress={() =>
            props.onClose({
              text: value,
              color: colors[selectedColor],
            })
          }>
          <Text style={styles.modalButtonText}>Tamam</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

InputModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export {InputModal};
