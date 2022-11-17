import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import { Colors } from '../styles/colors';
import AppButton from './appbutton';

const DatePickerModal = ({
  open,
  title,
  selected,
  onClose,
  onSelectedChange,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalContainer}
        onPress={onClose}>
        <View
          style={styles.modalView}
          onStartShouldSetResponder={event => true}
          onTouchEnd={e => {
            e.stopPropagation();
          }}>
          <Text style={[styles.subtitle_alt, styles.uppercase]}>{title}</Text>
          <DatePicker
            options={{
              backgroundColor: Colors.background,
              textHeaderColor: Colors.onPrimaryContainer,
              selectedTextColor: Colors.onPrimary,
              mainColor: Colors.primary,
              textSecondaryColor: Colors.onPrimaryContainer,
              borderColor: Colors.background,
            }}
            mode="calendar"
            selected={selected}
            onSelectedChange={v => onSelectedChange(v)}
          />

          <AppButton mode="text" onPress={onClose}>
            OK
          </AppButton>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

DatePickerModal.defaultProps = {
  open: false,
};

const styles = StyleSheet.create({
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
  subtitle_alt: {
    color: Colors.primary,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    marginTop: 10,
  },
});

export default DatePickerModal;
