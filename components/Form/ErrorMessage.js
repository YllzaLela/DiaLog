import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../config/theme';

const ErrorMessage = ({ errorValue }) => (
    <View style={styles.container}>
        <Text style={styles.errorText}>{errorValue}</Text>
    </View>
    );

    const styles = StyleSheet.create({
        container: {
            marginLeft: 25
        },
        errorText: {
            color: 'red',
            fontFamily: 'Montserrat_400Regular',
        }
    });

export default ErrorMessage;
