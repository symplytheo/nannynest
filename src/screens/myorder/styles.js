import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.white },
  container: { padding: 16 },
  title: { marginBottom: 4, fontWeight: '500' },
  form: { marginVertical: 24 },
  dp: { height: 56, width: 56, borderRadius: 16 },
  rowCentered: { flexDirection: 'row', alignItems: 'center' },
  topBordered: { borderTopWidth: 1, borderColor: Colors.grey + '33' },
  ml16: { marginLeft: 16 },
  timestamp: { color: Colors.grey, marginTop: 4 },
  mb8: { marginBottom: 8 },
  mt8: { marginTop: 8 },
  section: { paddingVertical: 16 },
});

export default styles;
