import {StyleSheet} from 'react-native';
import {theme1} from '../../themes/palettes';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -24,
    backgroundColor: theme1.main,
    width: 96,
    aspectRatio: 1,
    paddingLeft: 32,
    paddingTop: 24,
    shadowColor: theme1.main,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
  },
  addText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme1.white,
  },
});

export default styles;
