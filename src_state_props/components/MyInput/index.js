import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const MyInput = props => {
  const [value, setValue] = useState(props.initValue);

  const onChangeText = d => {
    const newValue = d.toUpperCase();
    setValue(newValue);
    props.onChangeText(newValue);
  };

  return (
    <View>
      {props.showTitle && (
        <Text style={[{fontSize: 16}, props.titleStyle]}>{props.title}</Text>
      )}
      <TextInput
        style={{borderWidth: 2, borderRadius: 8}}
        value={value}
        onChangeText={onChangeText}
      />
      {props.secondTitle()}
    </View>
  );
};

MyInput.defaultProps = {
  title: 'title is undefined',
  showTitle: true,
  initValue: 'initValue is undefined',
  titleStyle: {},
  secondTitle: () => null,
};

MyInput.propTypes = {
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  initValue: PropTypes.string,
  titleStyle: PropTypes.object,
  secondTitle: PropTypes.func,
  onChangeText: PropTypes.func.isRequired,
};

export {MyInput};
