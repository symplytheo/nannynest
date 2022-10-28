import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textContent: {
    marginBottom: 32,
    padding: 8,
    alignSelf: 'flex-start',
  },
  text: {
    color: Colors.onPrimary,
  },
  title: {
    color: Colors.onPrimary,
    fontFamily: 'Montserrat-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
    marginBottom: 16,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: Colors.primary,
  },
  dotStyle: { backgroundColor: 'rgba(255, 255, 255, .2)' },
  nextBtn: {
    backgroundColor: Colors.onPrimary,
    borderRadius: 8,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextBtnText: {
    color: Colors.primary,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
  },
});

export default styles;
