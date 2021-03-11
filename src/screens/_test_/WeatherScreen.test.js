import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import WeatherScreen from '../WeatherScreen';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


let wrapper;
const mockStore = configureMockStore([thunk]);
const store = mockStore({
    weather: {
        data: {},
        errorMessage: '',
        isLoading: false
    }
});

wrapper = shallow(
    <Provider store={store}>
        <WeatherScreen route={{ getParam: jest.fn() }} />
    </Provider>
);

it('WeatherScreen renders correctly', () => {
    renderer.create(<Provider store={store}>
        <WeatherScreen route={{ getParam: jest.fn() }} />
    </Provider>).toJSON();
});

describe('WeatherScreen', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });
});

// test('navigation options', () => {
//     const navProps = { navigation: { navigate: () => { } } };
//     const navigationOptions = WeatherScreen.navigationOptions(navProps);

//     expect(navigationOptions).toMatchSnapshot();
// });