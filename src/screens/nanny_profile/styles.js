import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    position: 'relative',
  },
  image: {
    height: 300,
    width: '100%',
  },
  mainContent: {
    padding: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
  },
  section: {
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingBottom: 24,
  },
  lastSection: {
    borderBottomWidth: 0,
    marginBottom: 80,
  },
  sectionTitle: {
    marginBottom: 16,
    fontFamily: 'Montserrat-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
  },
  fabBack: {
    position: 'absolute',
    top: 40,
    left: 16,
    flexDirection: 'row',
  },
  bottomBtn: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 52,
    flexDirection: 'row',
  },
  bookBtn: {
    flexGrow: 1,
    marginLeft: 16,
  },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: {
    borderRadius: 24,
    marginRight: 8,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  rating: {
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  paddingTop: {
    paddingTop: 16,
  },
  distance: { flexDirection: 'row', alignItems: 'flex-end' },
});

export default styles;
