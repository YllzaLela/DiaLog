import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../../config/theme';

const InputLabel = ({ children, style }) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.regular,
        fontSize: theme.fonts.sizes.medium,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 20,
        color: theme.colors.text,
        },
});

export default InputLabel;
