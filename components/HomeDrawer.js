import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Medication from "../screens/Medication";
import { theme } from "../config/theme";
import getGreeting from "./Greeting";
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return (
        <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
            drawerPosition: 'left',
            drawerStyle: {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 0, // remove the border
                fontFamily: 'Montserrat_600SemiBold',
                fontColor: theme.colors.text,
              },
              headerTintColor: theme.colors.text,
              headerTitleStyle: {
                fontFamily: 'Montserrat_400Regular',
                fontSize: theme.fonts.sizes.xlarge,
              },
              headerStyle: {
                backgroundColor: theme.colors.background,
                borderBottomWidth: 0, // remove the border
            },
              drawerLabelStyle: {
                fontFamily: 'Montserrat_400Regular',
                color: theme.colors.text,
              },
            }}
        >
        <Drawer.Screen name="Home" component={Home} options={{
            headerShown:true,
            headerTitle: getGreeting(),
        }}/>

        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Medication" component={Medication} />
        </Drawer.Navigator>
    );
    }

