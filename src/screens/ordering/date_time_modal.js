import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FAB, Text, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DatePickerModal from '../../components/datepicker_modal';
import { Colors } from '../../styles/colors';
import { styles } from './styles';
import TimePickerModal from '../../components/timepicker_modal';

const OrderDateTimeModalScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [modal, setModal] = useState({
    startDate: false,
    startTime: false,
    endDate: false,
    endTime: false,
  });

  const openModal = type => {
    setModal(prev => ({ ...prev, [type]: true }));
  };

  const closeModal = type => {
    setModal(prev => ({ ...prev, [type]: false }));
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={navigation.goBack}
      style={styles.transContainer}>
      <View
        style={[styles.orderDate, { paddingBottom: insets.bottom }]}
        onStartShouldSetResponder={event => true}
        onTouchEnd={e => {
          e.stopPropagation();
        }}>
        <Text variant="bodyLarge" style={styles.orderDateTitle}>
          Set a date and time
        </Text>
        <View style={styles.mb16}>
          <Text variant="bodyMedium" style={styles.orderDateLabel}>
            From
          </Text>
          <View style={styles.orderDateInputContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ width: styles.orderDateInput.width }}
              onPress={() => openModal('startDate')}>
              <View pointerEvents="none">
                <TextInput
                  value={startDate}
                  mode="outlined"
                  placeholder="Thu 19 Sept"
                  style={{ height: styles.orderDateInput.height }}
                  editable={false}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ width: styles.orderDateInput.width }}
              onPress={() => openModal('startTime')}>
              <View pointerEvents="none">
                <TextInput
                  value={startTime}
                  mode="outlined"
                  placeholder="1:00 PM"
                  style={{ height: styles.orderDateInput.height }}
                  editable={false}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mb16}>
          <Text variant="bodyMedium" style={styles.orderDateLabel}>
            To
          </Text>
          <View style={styles.orderDateInputContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ width: styles.orderDateInput.width }}
              onPress={() => openModal('endDate')}>
              <View pointerEvents="none">
                <TextInput
                  value={endDate}
                  mode="outlined"
                  placeholder="Thu 19 Sept"
                  style={{ height: styles.orderDateInput.height }}
                  editable={false}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ width: styles.orderDateInput.width }}
              onPress={() => openModal('endTime')}>
              <View pointerEvents="none">
                <TextInput
                  value={endTime}
                  mode="outlined"
                  placeholder="1:00 PM"
                  style={{ height: styles.orderDateInput.height }}
                  editable={false}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orderDateFabView}>
          <FAB
            icon="check"
            style={styles.orderDateFab}
            color={Colors.white}
            onPress={navigation.goBack}
          />
        </View>
      </View>

      {/* Modals */}
      <DatePickerModal
        title="Start Date"
        open={modal.startDate}
        selected={startDate}
        onSelectedChange={setStartDate}
        onClose={() => closeModal('startDate')}
      />
      <DatePickerModal
        title="End Date"
        open={modal.endDate}
        selected={endDate}
        onSelectedChange={setEndDate}
        onClose={() => closeModal('endDate')}
      />
      <TimePickerModal
        title="Start Time"
        open={modal.startTime}
        timeString={startTime}
        onConfirmChange={setStartTime}
        onClose={() => closeModal('startTime')}
      />

      <TimePickerModal
        title="End Time"
        open={modal.endTime}
        timeString={endTime}
        onConfirmChange={setEndTime}
        onClose={() => closeModal('endTime')}
      />
    </TouchableOpacity>
  );
};

export default OrderDateTimeModalScreen;
