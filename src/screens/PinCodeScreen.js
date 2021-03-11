import React from 'react';
import { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import colors from '../constants/colors';


/**
 * PinCodeScreen
 */

const PinCodeScreen = props => {
    const [pincode, setPincode] = useState('');
    const validation = (pincode) => {
        if (pincode.length <= 0) {
            Alert.alert('PINCODE IS REQUIRED')
            return false;
        }
        else if (pincode.length > 0 && pincode.length < 6) {
            Alert.alert('ENTER A VALID PINCODE')
            return false;
        }
        return true;
    }
    return (
        <View style={styles.body}>
            <Input
                keyboardType={'numeric'}
                placeholder='Enter Pincode'
                errorStyle={{ color: 'red' }}
                onChangeText={(pincode) => setPincode(pincode)}
                onSubmitEditing={() => {
                    validation(pincode) ? props.navigation.navigate('WeatherScreen', {
                        pincode: pincode
                    }) : ''
                }}
            />

            <TouchableOpacity style={styles.submitButton}
                onPress={() => {
                    validation(pincode) ? props.navigation.navigate('WeatherScreen', { pincode: pincode })
                        : ''
                }}>
                <Text style={styles.submitText}> Submit </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#C5C5C5',
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        padding: 20
    },
    container: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    submitButton: {
        backgroundColor: colors.primary,
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 16,

    }

});

export default PinCodeScreen;