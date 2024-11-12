import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerComponent = () => {
    const [isVisible, setIsVisible] = useState<Boolean | any>(false);
    const [date, setDate] = useState(new Date());

    const showDatePicker = () => {
        setIsVisible(true);
    };

    const hideDatePicker = () => {
        setIsVisible(false);
    };

    const handleConfirm = (selectedDate: any) => {
        setDate(selectedDate);
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <Button title="Escolha uma data" onPress={showDatePicker} />
            <Text style={styles.selectedDate}>Data Selecionada: {date.toLocaleDateString()}</Text>
            <DateTimePickerModal
                isVisible={isVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        maxHeight: 90,
    },
    selectedDate: {
        fontSize: 16,
        marginTop: 20,
    },
});

export default DatePickerComponent;