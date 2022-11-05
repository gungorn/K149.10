import {StyleSheet} from 'react-native';
import {theme1} from '../../themes/palettes';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme1.main,
    width: 48,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme1.white
  },
});

export default styles;
