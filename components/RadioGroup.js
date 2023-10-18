import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, CheckBox, ThemeProvider } from 'react-native-elements';
import theme from '../config/theme';
import { color } from '@rneui/base';

export default function RadioGroup({ options, selectedValue, onValueChange }) {

    const styles = StyleSheet.create({
        container: {
            borderRadius: 10,
        },
        title: {
            fontWeight: 'bold',
            marginBottom: 10,
        },
        listItem: {
            borderWidth: 0,
            padding: 0,
            marginLeft: 20,
            backgroundColor: '',
        },
        checkBox: {
            borderWidth: 0,
            backgroundColor: '',
        },
    });

    return (
            <View style={styles.container} >
                {options.map((option, index) => (
                    <ListItem key={index} bottomDivider containerStyle={styles.listItem}>
                        <CheckBox
                            containerStyle={styles.checkBox}
                            title={option.label}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checked={selectedValue === option.value}
                            onPress={() => onValueChange(option.value)}
                        />
                    </ListItem>
                ))}
            </View>
    );
}

