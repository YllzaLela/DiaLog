//Simple pie chr=art component using react-native-chart-kit
import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import theme from '../config/theme';
import { Text } from 'react-native-elements';
import { Card } from '@rneui/themed'

const MacroPieChart = () => {
    
    const screenWidth = Dimensions.get('window').width - 30;
    const data = [
        {
            name: 'Protein',
            value: 50, // Example value for protein could be something like this: user.macros.protein
            color: theme.colors.tertiary,
            legendFontColor: theme.colors.text,
            legendFontSize: 15
        },
        {
            name: 'Carbs',
            value: 30, // Example value for carbs
            color: theme.colors.secondary,
            legendFontColor: theme.colors.text,
            legendFontSize: 15
        },
        {
            name: 'Fats',
            value: 20, // Example value for fats
            color: theme.colors.gray,
            legendFontColor: theme.colors.text,
            legendFontSize: 15
        }
    ];
    const chartConfig = {
        color: (opacity = 1) => theme.colors.background,
        labelColor: (opacity = 1) => theme.colors.text,
        style: {
            borderRadius: 16,
            alignSelf: 'center',
        },
    };

    return (
        <View style={{margin: 20}}>   
        <Text style=
            {{
                fontSize: 20,
                fontFamily: theme.fonts.bold,
                color: theme.colors.text,
                textAlign: 'left'
            }}>Your Macros</Text>

            <View style= {{marginTop: 5, backgroundColor: theme.colors.card, borderRadius: 16}}>
            <PieChart
                data={data}
                width={screenWidth}
                height={200}
                chartConfig={chartConfig}
                accessor="value"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
            </View>
        </View>
    );
};

export default MacroPieChart;


