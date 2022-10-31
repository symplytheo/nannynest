import { Platform, StyleSheet } from 'react-native';
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
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
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
  otp: { justifyContent: 'center' },
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
    borderWidth: 2,
    height: 56,
  },
  inputContainer: { marginBottom: 24 },
  form: {
    marginTop: 24,
    marginBottom: 24,
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#0005',
  },
  modalView: {
    backgroundColor: Colors.background,
    borderRadius: 24,
    padding: 16,
    paddingBottom: 36,
    alignItems: 'center',
    width: '100%',
  },
  uppercase: { textTransform: 'uppercase' },
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: Colors.primaryContainer,
  },
  socialBtn: {
    height: 56,
    marginVertical: 8,
  },
});

export default styles;
