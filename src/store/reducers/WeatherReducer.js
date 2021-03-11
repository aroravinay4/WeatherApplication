import { UPDATE_WEATHER_DATA, SET_ERROR_MESSAGE, SET_IS_LOADING } from '../actions/WeatherAction';

const initialState = {
    data: {},
    errorMessage: '',
    isLoading: false
};

const WeatherReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_WEATHER_DATA:
            return {
                ...state,
                data: action.data,
                isLoading: false,
                errorMessage: null
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
                errorMessage: null,
                data: {}
            };

        case SET_ERROR_MESSAGE:
            return {
                ...state,
                data: {},
                isLoading: false,
                errorMessage: action.errorMessage
            };

        default:
            return state;
    }

};

export default WeatherReducer;