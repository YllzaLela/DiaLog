import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { theme } from '../config/theme'
import { Text } from '@rneui/themed'
import { View } from 'react-native'

export default function Home({navigation})
{
    return 
    (
    <View>
        <Text h1 style={{}}>
              Home Page
        </Text>;
    </View>
    );
}