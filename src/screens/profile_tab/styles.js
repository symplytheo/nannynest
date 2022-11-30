import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: { padding: 16 },
  dp: { height: 56, width: 56, borderRadius: 16 },
  mb8: { marginBottom: 8 },
  mt8: { marginTop: 8 },
  bold: { fontWeight: Platform.OS === 'ios' ? '700' : '600' },
  tabActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderColor: Colors.grey + '33',
  },
  socials: {
    borderTopWidth: 1,
    borderColor: Colors.grey + '33',
    marginTop: 8,
    paddingVertical: 16,
  },
  profileOverview: { flexDirection: 'row', alignItems: 'center' },
  socialBtn: { height: 56, marginVertical: 8 },
  input: { height: 56, lineHeight: 16 },
  inputContainer: { marginBottom: 24 },
  form: { marginVertical: 24 },
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: Colors.primaryContainer,
  },
  title: { marginBottom: 4, fontWeight: '500' },
  phoneInput: { flexDirection: 'row', justifyContent: 'space-between' },
  country: { width: '35%' },
  number: { width: '60%', height: 56 },
  flag: { width: 24, height: 16 },
  method: { marginLeft: 16, flex: 1 },
  halfWidth: { width: '48%' },
  f1: { flex: 1 },
});

export default styles;
