import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PinCodeScreen from '../screens/PinCodeScreen';
import WeatherScreen from '../screens/WeatherScreen';
import colors from '../constants/colors';

const stackNavigator = createStackNavigator();

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}

const Navigation = props => {
    return <NavigationContainer>
        <stackNavigator.Navigator screenOptions={defaultNavOptions} initialRouteName="PinCodeScreen">
            <stackNavigator.Screen name="WeatherScreen" component={WeatherScreen}
                options={{ title: 'Weather Forcast' }} />
            <stackNavigator.Screen name="PinCodeScreen" component={PinCodeScreen}
                options={{ title: 'Pincode' }} />
        </stackNavigator.Navigator>
    </NavigationContainer>
}

export default Navigation;