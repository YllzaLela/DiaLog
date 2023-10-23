import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { theme } from '../config/theme';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const GlucoseChart = () => {
    const navigation = useNavigation();

    const data = {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00'],
        datasets: [{ 
            data: [90, 88, 120, 105, 95, 85, 88, 99, 87],  
            strokeWidth: 3,
        }],
    };

    const screenWidth = Dimensions.get('window').width - 30;

    return (
        <View style={{ margin: 20, marginTop: 30 }}>
            
            <Text style=
            {{
                fontSize: 20,
                fontFamily: theme.fonts.bold,
                color: theme.colors.text,
                textAlign: 'left',
            }}>Today's Glucose</Text>
            <LineChart
                data={data}
                width={screenWidth}
                height={200}
                chartConfig={{
                    backgroundGradientFrom: theme.colors.card,
                    backgroundGradientTo: theme.colors.tertiary,
                    decimalPlaces: 0,
                    color: (opacity = 1) => theme.colors.accent,
                    labelColor: (opacity = 1) => theme.colors.text,
                    style: {
                        borderRadius: 16,
                        alignSelf: 'center',
                    },
                    propsForDots: {
                        r: '3',
                        strokeWidth: '1',
                        stroke: theme.colors.text,
                    },
                }}
                bezier
                style={{
                    marginVertical: 5,
                    borderRadius: 20, 
                }}
            />
        <Button
         buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 16,
            paddingHorizontal: 10, 
            alignSelf: 'flex-start',
            }}
            onPress={() => navigation.navigate('Glucose Log')}
            title="Log Glucose"
            titleStyle={{
              color: theme.colors.text,
              fontFamily: 'Montserrat_400Regular',
            }}/>

        </View>
    );
};


export default GlucoseChart;
