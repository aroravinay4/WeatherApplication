import WeatherReducer from '../WeatherReducer';
import { UPDATE_WEATHER_DATA, SET_IS_LOADING, SET_ERROR_MESSAGE } from '../../actions/WeatherAction';

const mockWeatherData = require('../../../../_mocks_/weatherResponse.json');

const initialState = {
    data: {},
    errorMessage: '',
    isLoading: false
};

describe('weather Reducer', () => {
    it('should return the initial state', () => {
        expect(WeatherReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle UPDATE_WEATHER_DATA', () => {
        expect(WeatherReducer(initialState, {
            type: UPDATE_WEATHER_DATA,
            data: mockWeatherData,
            errorMessage: null,
            isLoading: false,
        })
        ).toEqual({
            data: mockWeatherData,
            errorMessage: null,
            isLoading: false
        });
    });

    it('should handle SET_ERROR_MESSAGE', () => {
        expect(WeatherReducer(initialState, {
                type: SET_ERROR_MESSAGE,
                data: {},
                errorMessage: 'Something went wrong',
                isLoading: false
            })
        ).toEqual({
            data: {},
            errorMessage: 'Something went wrong',
            isLoading: false
        })
    });

    it('should handle SET_IS_LOADING', () => {
        expect(WeatherReducer(initialState, {
                type: SET_IS_LOADING,
                data: {},
                errorMessage: null,
                isLoading: true,
            })
        ).toEqual({
            data: {},
            errorMessage: null,
            isLoading: true,
        })
    });
});