import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import TimePicker from 'react-native-date-picker';
import { Colors } from '../styles/colors';
import AppButton from './appbutton';

const TimePickerModal = ({ open, title, onClose, onConfirmChange }) => {
  const [time, setTime] = useState(new Date());

  const handleConfirm = () => {
    let hhmm = new Date(time).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
    onConfirmChange(hhmm);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPress={onClose}>
        <View
          style={styles.modalView}
          onStartShouldSetResponder={event => true}
          onTouchEnd={e => {
            e.stopPropagation();
          }}>
          <Text style={[styles.subtitle_alt, styles.uppercase]}>{title}</Text>
          <TimePicker
            mode="time"
            date={time}
            androidVariant="nativeAndroid"
            onDateChange={val => setTime(val)}
          />
          <AppButton onPress={handleConfirm}>OK</AppButton>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

TimePickerModal.defaultProps = {
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

export default TimePickerModal;
