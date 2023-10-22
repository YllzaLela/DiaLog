import React from 'react';
import { Button } from 'react-native-elements';
import { useTheme } from '@rneui/themed';
import { theme } from '../config/theme';

const FormButton = ({ title, buttonType, buttonColor, backgroundColor, ...rest }) => (
    <Button
        {...rest}
        type={buttonType}
        title={title}
        buttonStyle={{ backgroundColor: backgroundColor, borderRadius: 20 }}
        titleStyle={{ color: buttonColor, fontWeight: 'bold', fontFamily: 'Montserrat_700Bold' }}
    />
);

export default FormButton;
