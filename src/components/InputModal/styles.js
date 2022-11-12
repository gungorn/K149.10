import {StyleSheet} from 'react-native';
import {theme1} from '../../themes/palettes';
import {W} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  container: {},

  centeredView: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: theme1.blackOpaque,
  },
  modalView: {
    width: '85%',
    minHeight: '30%',
    backgroundColor: theme1.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: theme1.yellow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
  },

  colorsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: -20,
    marginHorizontal: -20,
    justifyContent: 'space-between',
  },
  color: {
    width: W(8),
    height: W(8),
    borderRadius: W(5),
  },
  colorSelected: {
    width: W(3),
    height: W(3),
    borderRadius: 20,
    position: 'absolute',
    left: W(2.5),
    top: W(2.5),
    backgroundColor: theme1.white,
  },

  modalButtonView: {
    width: '40%',
    backgroundColor: theme1.white,
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  modalButton: {
    borderWidth: 1,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
