import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 function GlucoseLog ( { navigation }) {
    const [reading, setReading] = useState('');
    const [readingUnit, setReadingUnit] = useState(['mg/dL', 'mmol/L']);
    const [notes, setNotes] = useState('');
    const [fasted, setFasted] = useState(false);
    const [preMeal, setPreMeal] = useState(false);
    const [postMeal, setPostMeal] = useState(false);
    const [bedtime, setBedtime] = useState(false);

    const handleFastedChange = () => setFasted(!fasted);
    const handlePreMealChange = () => setPreMeal(!preMeal);
    const handlePostMealChange = () => setPostMeal(!postMeal);
    const handleBedtimeChange = () => setBedtime(!bedtime);

    const handleSubmit = () => {
        // handle form submission here
        console.log({
            reading,
            readingUnit,
            notes,
            fasted,
            preMeal,
            postMeal,
            bedtime,
        });
    };

    return (
        <View>
            <Text>Glucose Log</Text>
            <TextInput
                placeholder="Reading"
                value={reading}
                onChangeText={setReading}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Reading Unit"
                value={readingUnit}
                onChangeText={setReadingUnit}
            />
            <TextInput
                placeholder="Notes"
                value={notes}
                onChangeText={setNotes}
            />
            <View>
                <Text>Tags:</Text>
                <View>
                    <Button title="Fasted" onPress={handleFastedChange} />
                    <Button title="Pre Meal" onPress={handlePreMealChange} />
                    <Button title="Post Meal" onPress={handlePostMealChange} />
                    <Button title="Bedtime" onPress={handleBedtimeChange} />
                </View>
            </View>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default GlucoseLog;
