import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.background },
  container: { padding: 16 },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
  ml16: { marginLeft: 16 },
  search: {
    borderWidth: 1,
    borderColor: Colors.primaryContainer,
  },
  searchInput: { height: 56, width: '100%' },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 8,
  },
  chip: {
    borderRadius: 24,
    margin: 8,
    marginLeft: 0,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  section: { marginVertical: 24 },
  sectionTitle: { fontWeight: '500', marginBottom: 4 },
  fab: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginBottom: 16,
  },
  card: { backgroundColor: Colors.white, borderRadius: 16, marginBottom: 12 },
  cardTitle: { fontWeight: '600' },
});

export default styles;
