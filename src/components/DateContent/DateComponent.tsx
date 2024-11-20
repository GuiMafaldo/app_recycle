import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerComponent = ({ onDateSelect }: any) => {
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
        onDateSelect(date); // Passa a data selecionada para o componente pai
        hideDatePicker();
    };

    return (
        <View>
            <Button title="Escolha uma data" onPress={showDatePicker} />
            {selectedDate && (
                <Text>Data Selecionada: {selectedDate.toLocaleDateString()}</Text>
            )}
            <DateTimePickerModal
                isVisible={isVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DatePickerComponent;
