import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import API from '../../../api';

export const UPDATE_WEATHER_DATA = 'UPDATE_WEATHER_DATA';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const updateWeatherData = (data) => {
    return {
        type: UPDATE_WEATHER_DATA,
        data,
    };
}

export const setErrorMessage = (errorMessage) => {
    return {
        type: SET_ERROR_MESSAGE,
        errorMessage,
    };
}

export const setISLoading = (isLoading) => {
    return {
        type: SET_IS_LOADING,
        isLoading,
    };
}

export const searchByPincode = (pincode) => {
    return async (dispatch) => {
        const { url, appid } = API;
        dispatch(setISLoading(true));
        try {
            const response = await Axios.get(`${url}?zip=${pincode},in&appid=${appid}`)
            dispatch(setErrorMessage(''));
            dispatch(setISLoading(false));
            dispatch(updateWeatherData(response.data));
            saveDataInLocalStorage(pincode, response.data);
        }
        catch (error) {
            console.log(`Error In API Response ${error}`)
            dispatch(updateWeatherData({}));
            dispatch(setErrorMessage(`could not fetch weather data for ${pincode}`))
        }
    };
}


export const getDataFromLocalStorage = (pincode) => {
    return async (dispatch) => {
        const data = await AsyncStorage.getItem(pincode);
        if (!data) {
            dispatch(updateWeatherData({}));
            dispatch(setErrorMessage(`Could not fetch weather for ${pincode} , check network connection`));
        }
        else {
            dispatch(setErrorMessage(''));
            dispatch(setISLoading(false));
            dispatch(updateWeatherData(JSON.parse(data)));
        }
    }
}

const saveDataInLocalStorage = async (pincode, weatherData) => {
    try {
        await AsyncStorage.setItem(pincode, JSON.stringify(weatherData))
    }
    catch (error) {
        console.log(`Error${error}`)
    }
}