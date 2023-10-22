import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../config/theme';
import { NavigationContainer } from '@react-navigation/native';

function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.info}>John Doe</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.info}>johndoe@example.com</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.info}>35</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
});

export default Profile;
