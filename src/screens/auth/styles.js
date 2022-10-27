import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    marginBottom: 8,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
  },
  subtitle: {
    color: '#555',
  },
  subtitle_alt: {
    color: Colors.primary,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    marginTop: 10,
  },
  phoneInput: {
    marginTop: 24,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  country: {
    width: '35%',
  },
  number: {
    width: '60%',
    height: 56,
  },
  flag: {
    width: 24,
    height: 16,
  },
  input: {
    height: 56,
    lineHeight: 16,
  },
  roundedTextInput: {
    borderRadius: 8,
    borderWidth: 1,
    height: 56,
  },
});

export default styles;
