import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors'
import utils from '../utils/Utils';
import _ from 'lodash';

const generateIcon = (description, sys) => {
    const { pod } = sys;
    const dayTime = pod === 'd';
    let icon;
    switch (description) {
        case 'Haze':
            icon = dayTime ?
                (<Icon name="ios-cloudy" style={styles.weatherIcon} size={40} color="#FFFFFF" />) :
                (<Icon name="ios-cloudy-night" style={styles.weatherIcon} size={40} color="#FFFFFF" />);
            break;
        case 'Snow':
            icon = (<Icon name="ios-snow" style={styles.weatherIcon} size={40} color="#FFFFFF" />);
            break;
        case 'Clouds':
            icon = (<Icon name="ios-cloudy" style={styles.weatherIcon} size={40} color="#FFFFFF" />);
            break;
        case 'Clear':
            icon = dayTime ?
                (<Icon name="ios-sunny" style={styles.weatherIcon} size={40} color="#FFFF44" />) :
                (<Icon name="ios-moon" style={styles.weatherIcon} size={40} color="#FFFFFF" />);
            break;
        case 'Rain':
            icon = (<Icon name="ios-rainy" style={styles.weatherIcon} size={40} color="#FFFFFF" />);
            break;
        case 'Fog':
            icon = (<Icon name="ios-partly-sunny" style={styles.weatherIcon} size={40} color="#FFFFFF" />);
            break;
        default:
            icon = (<Icon name="ios-sunny" style={styles.weatherIcon} size={40} color="#FFFFFF" />);
            break;
    }
    return icon;
};


const renderWeatherContent = data => (
    <View>
        {_.isEmpty(data) ?
            <Text style={styles.emptyData} >{'Search for a location'}</Text>
            :
            <View style={{ marginBottom: 12 }}>

                <Text style={styles.title}>{data.city.name},{data.city.country}</Text>

                <FlatList
                    data={data.list}
                    keyExtractor={({ dt }, index) => dt.toString()}
                    renderItem={({ item }) =>
                        <Card containerStyle={styles.cardContainer}>
                            <View style={styles.viewContainer}>
                                <View style={{ flex: 1, alignSelf: 'center' }}>
                                    <Text style={styles.description}>{`${utils.dateToFormat(item.dt_txt)}`}</Text>
                                </View>

                                <View style={styles.tempContainer}>
                                    <Text style={styles.tempratureText}>{`${utils.toCelsius(item.main.temp)} °C`}</Text>
                                    <Text style={styles.weatherDesc}>{item.weather[0].main},{item.weather[0].description}</Text>
                                </View>

                                <View style={{ flex: 1, alignSelf: 'center' }}>
                                    {generateIcon(item.weather[0].main, item.sys)}
                                </View>

                            </View>

                        </Card>
                    }
                />
            </View>

        }
    </View>
)

const errorRendering = errorMessage => (
    <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
)


const Weather = props => {
    const { data, errorMessage, isLoading } = props
    const container = _.isEmpty(errorMessage) ?
        renderWeatherContent(data) :
        errorRendering(errorMessage);
    return (
        <View>
            {isLoading ?
                <ActivityIndicator color={colors.primary} size='large' /> :
                container
            }
        </View>
    );
};

const styles = StyleSheet.create({
    emptyData: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        color: colors.white,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    cardContainer: {
        elevation: 5,
        backgroundColor: colors.primary
    },
    cardContainer: {
        elevation: 5,
        backgroundColor: colors.primary
    },
    viewContainer: {
        flex: 1,
        width: 280,
        alignItems: 'flex-start',
        padding: 5,
        flexDirection: 'row',
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.white,
        textAlign: 'center',
    },
    tempContainer: {
        flex: 2,
        marginHorizontal: 20,
        flexGrow: 2,
        flexDirection: 'column'
    },
    tempratureText: {
        color: '#f4511e',
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'stretch',
        fontSize: 22,
        fontWeight: 'bold',
    },
    weatherDesc: {
        color: colors.white,
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'stretch'
    },
    errorContainer: {
        borderColor: colors.red,
        borderWidth: 1,
        backgroundColor: colors.pink,
        padding: 5,
    },
    errorText: {
        textAlign: 'center',
        color: colors.red,
        fontSize: 20,
        margin: 10,
    },
    weatherIcon: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

export default Weather;