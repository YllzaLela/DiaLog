import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
//import { MedicationList } from '../components/MedicationList';
import { NavigationContainer } from '@react-navigation/native';

export function Medication({navigation}) {
    const [medications, setMedications] = useState([]);
    const [name, setName] = useState('');
    const [dosage, setDosage] = useState('');
    const [dosageUnit, setDosageUnit] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');

    const addMedication = () => {
        const newMedication = {
            name,
            dosage,
            dosageUnit,
            time,
            notes,
        };
        setMedications([...medications, newMedication]);
        setName('');
        setDosage('');
        setDosageUnit('');
        setTime('');
        setNotes('');
    };

    const deleteMedication = (index) => {
        const newMedications = [...medications];
        newMedications.splice(index, 1);
        setMedications(newMedications);
    };

    return (
        <View>
            <Text>Medication</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Dosage"
                value={dosage}
                onChangeText={setDosage}
            />
            <TextInput
                placeholder="Dosage Unit"
                value={dosageUnit}
                onChangeText={setDosageUnit}
            />
            <TextInput
                placeholder="Time"
                value={time}
                onChangeText={setTime}
            />
            <TextInput
                placeholder="Notes"
                value={notes}
                onChangeText={setNotes}
            />
            <Button title="Add Medication" onPress={addMedication} />
        {/* <MedicationList medications={medications} onDelete={deleteMedication} /> */}
        </View>
    );
};

export default Medication;