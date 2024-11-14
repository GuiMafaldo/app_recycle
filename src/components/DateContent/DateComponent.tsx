import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = () => {
        setIsVisible(true);
    };

    const hideDatePicker = () => {
        setIsVisible(false);
    };

    const handleConfirm = (date: any) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    return (
        <View testID="calendario">
            <Button testID="button-data" title="Escolha uma data" onPress={showDatePicker} />
            {selectedDate && (
                <Text testID="selected-date">
                    Data Selecionada: {selectedDate.toLocaleDateString()}
                </Text>
            )}
            <DateTimePickerModal
                testID="date-picker-modal"
                isVisible={isVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                
            />
        </View>
    );
};
export default DatePickerComponent;