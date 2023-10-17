import React from 'react';
import { Button } from 'react-native-elements';
import { useTheme } from '@rneui/themed';
import { theme } from '../config/theme';

const FormButton = ({ title, buttonType, buttonColor, ...rest }) => (
    <Button
        {...rest}
        type={buttonType}
        title={title}
        buttonStyle={{ backgroundColor: theme.colors.primary, borderRadius: 20 }}
        titleStyle={{ color: buttonColor, fontWeight: 'bold' }}
    />
);

export default FormButton;
