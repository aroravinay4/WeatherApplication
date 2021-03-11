import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../Weather';


const mockWeatherData = require('../../../_mocks_/weatherResponse.json');

it('Weather component renders correctly', () => {
    renderer.create(<Weather />);
});

describe('Weather', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<Weather label="test label" isLoading />)
            expect(component).toMatchSnapshot("Primary Weather snapshot")
        });

        it('should match to snapshot - Secondary', () => {
            const component = shallow(<Weather label="test label" isLoading={false} />)
            expect(component).toMatchSnapshot("Secondary Weather snapshot")
        });

        it('should match to snapshot', () => {
            const component = shallow(<Weather errorMessage='Could not fetch weatherData' />)
            expect(component).toMatchSnapshot()
        });

        it('should render correctly when loading', () => {
            const componet = shallow(<Weather label="test label" isLoading />)
            expect(componet.find('View').length).toBe(1);
        });

        it('should render correctly when loading false and errorMessage', () => {
            const component = shallow(<Weather label="test label" isLoading={false} errorMessage='Test' />)
            expect(component.find('View').length).toBe(2);
            expect(component.find('Text').length).toBe(1);
        });

        it('shhould render correctly when loading false and mock weatherData', () => {
            const component = shallow(<Weather isLoading={false} errorMessage='' data={mockWeatherData} />)
            expect(component.find('View').length).toBe(3);
            expect(component.find('Text').length).toBe(1);
            expect(component.find('FlatList').length).toBe(1);
        });

        it('should render correctly when loading false and empty weatherData', () => {
            const component = shallow(<Weather isLoading={false} errorMessage='' />)
            expect(component.find('View').length).toBe(2);
            expect(component.find('Text').length).toBe(1);
        });

        it('should flatlist return KeyExtractor correctly', () => {
            const component = shallow(<Weather isLoading={false} errorMessage='' data={mockWeatherData} />)
            const key = component.find('FlatList').props().keyExtractor({ dt: 1618077000 });
            expect(key).toEqual('1618077000')
        });

    });

    describe('.renderItem', () => {
        let renderItemShallowWrapper;
        const mockItem = mockWeatherData.list[0];
        let wrapper;
        let RenderItem;

        beforeAll(() => {
            wrapper = shallow(<Weather isLoading={false} errorMessage='' data={mockWeatherData} />)
            // find the component whose property is rendered as renderItem={[Function]}
            RenderItem = wrapper.find('FlatList').prop('renderItem');
        });

        it('should match the snapshot', () => {
            renderItemShallowWrapper = shallow(<RenderItem item={mockItem} />);
            expect(renderItemShallowWrapper).toMatchSnapshot();
        });

        it('should match the snapshot - Haze', () => {
            mockItem.weather[0].main = 'Haze';
            // and since it's a component render it as such
            // with mockItem
            renderItemShallowWrapper = shallow(<RenderItem item={mockItem} />);
            // generate snapshot for the renderItem
            expect(renderItemShallowWrapper).toMatchSnapshot();
        });

        it('should match the snapshot - Snow', () => {
            mockItem.weather[0].main = 'Snow';
            renderItemShallowWrapper = shallow(<RenderItem item={mockItem} />);
            expect(renderItemShallowWrapper).toMatchSnapshot();
        });

        it('should match the snapshot - Clear', () => {
            mockItem.weather[0].main = 'Clear';
            renderItemShallowWrapper = shallow(<RenderItem item={mockItem} />);
            expect(renderItemShallowWrapper).toMatchSnapshot();
        });

        it('should match the snapshot - Rain', () => {
            mockItem.weather[0].main = 'Rain';
            renderItemShallowWrapper = shallow(<RenderItem item={mockItem} />);
            expect(renderItemShallowWrapper).toMatchSnapshot();
        });

        it('should match the snapshot - Fog', () => {
            mockItem.weather[0].main = 'Fog';
            renderItemShallowWrapper = shallow(<RenderItem item={mockItem} />);
            expect(renderItemShallowWrapper).toMatchSnapshot();
        });

        it('should match the snapshot - Default', () => {
            mockItem.weather[0].main = 'abc';
            renderItemShallowWrapper = shallow(<RenderItem item={mockItem} />);
            expect(renderItemShallowWrapper).toMatchSnapshot();
        });

        it('should render correctly - renderItem - View', () => {
            expect(renderItemShallowWrapper.find('View').length).toBe(4);
        });

        it('should render correctly - renderItem - Text', () => {
            expect(renderItemShallowWrapper.find('Text').length).toBe(3);
        });

    });
});

