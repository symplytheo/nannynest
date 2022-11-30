import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: { padding: 16 },
  dp: { height: 56, width: 56, borderRadius: 16 },
  mb8: { marginBottom: 8 },
  bold: { fontWeight: Platform.OS === 'ios' ? '700' : '600' },
  tabActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderColor: Colors.grey + '33',
  },
});

export default styles;
