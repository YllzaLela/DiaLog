import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../config/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';

const MedicationCard = ({ medicationName, dosage, time, notes }) => {
    return (
        <Card containerStyle={{ borderRadius: 10, marginVertical: 5, backgroundColor: theme.colors.card }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 10 }}>
                    <Icon name="pill" size={24} color={theme.colors.text} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.smallText, { color: theme.colors.secondary }]}>Time: {time}</Text>
                    <Text style={[styles.text, { color: theme.colors.text }]}>Medication Name: {medicationName}</Text>
                    <Text style={[styles.text, { color: theme.colors.text }]}>Dosage: {dosage}</Text>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="exclamation-circle" size={16} color={theme.colors.accent} />
                        <Text style={[styles.smallText, { color: theme.colors.text, marginLeft: 5 }]}>Notes: {notes}</Text>
                    </View>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.regular,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    smallText: {
        fontSize: 14,
        marginBottom: 5,
    },
});

export default MedicationCard;