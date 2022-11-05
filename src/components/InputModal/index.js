import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const InputModal = props => {
  const [value, setValue] = useState('');

  return (
    <Modal
      statusBarTranslucent
      animationType="slide"
      transparent={true}
      visible={props.visible}>
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPress={() => props.onClose(value)}>
        <View style={styles.modalView}>
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
        </View>

        <TouchableOpacity
          style={styles.modalButtonView}
          onPress={() => props.onClose(value)}>
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
