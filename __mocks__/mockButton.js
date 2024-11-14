import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MockButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
    </TouchableOpacity>
);

export default MockButton;