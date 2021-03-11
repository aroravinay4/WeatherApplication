import { UPDATE_WEATHER_DATA, SET_ERROR_MESSAGE, SET_IS_LOADING } from '../WeatherAction';
import * as actions from '../WeatherAction';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

jest.mock("axios");
const mockAxios = require("axios");
const mockStore = configureStore([thunk]);
const data = require('../../../../_mocks_/weatherResponse.json');
const pincode = '122018'
const store = mockStore({
    weather: {
        data: {},
        errorMessage: '',
        isLoading: false
    }
});

describe('CurrentWeather-Actions', () => {
    it('should create an action to update weather data', () => {
        const expectedAction = {
            type: UPDATE_WEATHER_DATA,
            data
        };

        expect(actions.updateWeatherData(data)).toEqual(expectedAction);
    });

    it('should create an action to set error message', () => {
        const errorMessage = 'message to display';
        const expectedAction = {
            type: SET_ERROR_MESSAGE,
            errorMessage
        };

        expect(actions.setErrorMessage(errorMessage)).toEqual(expectedAction);
    });

    it('should create an action to set loading ', () => {
        const isLoading = true;
        const expectedAction = {
            type: SET_IS_LOADING,
            isLoading
        };

        expect(actions.setISLoading(isLoading)).toEqual(expectedAction);
    });

    describe("searchByPinocde action creator", () => {
        it('fetches successfully data from API', async () => {
            mockAxios.default.get.mockImplementationOnce(() =>
                promise.resolve({
                    data: data
                })
            );
            expect.assertions(4);

            await store.dispatch(actions.searchByPincode(pincode));
            const action = store.getActions();

            expect(action[0].type).toEqual(SET_IS_LOADING);
            expect(action[1].type).toEqual(SET_ERROR_MESSAGE);
            expect(action[2].type).toEqual(SET_IS_LOADING);
            expect(action[3].type).toEqual(UPDATE_WEATHER_DATA);
        });
    });

    describe("DataFromLocalStorage action creator", () => {
        it("fetches successfully data from an Local Storage", async () => {
            await store.dispatch(actions.getDataFromLocalStorage(pincode));
            const action = store.getActions();

            expect.assertions(1);
            expect(action[0].type).toEqual(SET_IS_LOADING);
        });
    });

});