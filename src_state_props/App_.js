import React from 'react';
import {View, Text, TextInput} from 'react-native';

import {MyInput} from './components/MyInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    this.myState = {
      inputValue: '',
    };
  }

  setMyState(newStateObj) {
    this.myState = {...this.myState, ...newStateObj};
    this.forceUpdate();
  }

  //ilk render dan sonra
  componentDidMount() {
    console.log('componentDidMount');
  }
  //ilk render hariç her render sonrasında
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  //component kill olduktan sonra
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  //return true: component render edilir, return false: component render edilmez
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextState);
    return nextState.inputValue.length <= 5;
  }

  topla(...a) {
    console.log(a);
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result += a[i];
    }
    console.log(result);
    return result;
  }

  render() {
    console.log('render');
    this.topla(1, 2, 3, 4, 5, 6, 7);
    return (
      <View>
        <Text>Hello World!</Text>
        <Text>{this.myState.inputValue}</Text>
        <MyInput
          title="Telefon"
          titleStyle={{color: 'red'}}
          showTitle
          secondTitle={() => <Text>Hello World!</Text>}
          initValue="asd"
          onChangeText={d => {
            console.log('ben bir callback');
            this.setMyState({inputValue: d});
          }}
        />
      </View>
    );
  }
}

export {App};
