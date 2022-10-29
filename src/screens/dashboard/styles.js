import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    position: 'relative',
  },
  mainContent: {
    padding: 16,
    paddingRight: 4,
  },
  topContent: {
    marginBottom: 16,
    paddingRight: 12,
  },
  card: { marginRight: 16 },
  cardImage: {
    height: 128,
    width: 128,
    borderRadius: 24,
    backgroundColor: Colors.white,
  },
  cardText: { paddingVertical: 8, paddingHorizontal: 4 },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 2,
  },
  cardRating: {
    alignSelf: 'flex-start',
    marginRight: 4,
  },
  section: {
    marginVertical: 16,
  },
  bold: { fontWeight: Platform.OS === 'ios' ? '700' : '600' },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
  },
  fabContainer: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    flexDirection: 'row',
  },
  location: {
    paddingVertical: 8,
  },
  locationText: { marginLeft: 6 },
  sessionCard: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionCardText: { marginHorizontal: 16, flexGrow: 1 },
  mx0: { marginHorizontal: 0 },
  mb4: { marginBottom: 4 },
});

export default styles;
