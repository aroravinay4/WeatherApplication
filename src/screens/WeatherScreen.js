import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as weatherActions from '../store/actions/WeatherAction';
import { useDispatch, useSelector } from 'react-redux';
import NetworkInfo from '../utils/NetworkInfo';
import Weather from '../component/Weather';


const WeatherScreen = props => {
    const { route, navigation } = props;
    const { data, errorMessage, isLoading } = useSelector(state => state.weather);
    const dispatch = useDispatch();
    const { pincode } = route.params;
    
    useEffect(() => {
        fetchData()
    }, [dispatch]);

    const fetchData = useCallback(async () => {
        const isConnected = await NetworkInfo.isNetworkAvailable();
        dispatch(isConnected ? weatherActions.searchByPincode(pincode) :
            weatherActions.getDataFromLocalStorage(pincode))
    }, [dispatch])

    return (
        <View>
            <Weather
                data={data}
                errorMessage={errorMessage}
                isLoading={isLoading}
            />
        </View>
    );


};

export default WeatherScreen;