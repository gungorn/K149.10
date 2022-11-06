import {StyleSheet} from 'react-native';

import {W} from '../../utils/ui/dimensions';

import {theme1} from '../../themes/palettes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: W(4),
  },

  itemContainer: {
    width: W(44),
    backgroundColor: theme1.yellow,
    margin: W(1),
    padding: 8,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default styles;
